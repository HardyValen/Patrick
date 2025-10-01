import { error } from "@sveltejs/kit";
import { fetchJSON, unifiedPipeline as processor, FI } from '$lib';
import errorMessages from "$lib/data/errors.json";
import { errorArgs } from "$lib/utils";

// unified process mdToHtml
async function mdToHtml(content) {
  return String(await processor.process(content));
}

function getFooterLink(obj) {
  const { id, title } = obj ?? {};
  return { id, title }
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, url }) {
  try {
    // fetch clientProductData
    const clientProductsData = await FI.productsData({fetch});

    // Get product element by id matches with product name
    const selectedData = clientProductsData.find(({ id }) => id === params.productName);

    // if the product element is not found, return an error.
    if (selectedData === undefined) {
      throw new Error("PRODUCT_PAGE_0001");
    }

    // try fetch from content url, else it shall return error when the resource is not found.
    const response = await fetch(selectedData.content);

    if (!response.ok) {
      throw new Error("PRODUCT_PAGE_0002");
    }

    const result = await response.text()
      .then(item => mdToHtml(item));

    let previousData = clientProductsData.find(({ id }) => id === selectedData.prevId);
    let nextData = clientProductsData.find(({ id }) => id === selectedData.nextId);

    return {
      current: {...selectedData, content: result},
      prev: getFooterLink(previousData),
      next: getFooterLink(nextData)
    };
  } catch ({message: code}) {
    error(...errorArgs(errorMessages, code));
  }
}
