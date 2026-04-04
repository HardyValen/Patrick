import { error } from "@sveltejs/kit";
import { unifiedPipeline as processor, FI } from '$lib';
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

function constructMetadata({url, data}) {
  const result = {
    title: data.title,
    type: "article",
    url: `/${data.id}`,
    image: {
      url: data.img,
      width: "400",
      height: "400",
    },
    article: {
      published_time: data.publishDate,
      author: "NiSi Optics Indonesia",
      tags: data.tags
    }
  }

  return result
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, url }) {
  try {
    // fetch clientProductData
    const clientProductsData = await FI.Products.data({fetch});

    // Get product element by id matches with product name
    const selectedData = clientProductsData.find(({ name }) => name === params.productName);

    // if the product element is not found, return an error.
    if (selectedData === undefined) {
      throw new Error("PRODUCT_PAGE_0001");
    }

    return {
      current: selectedData,
      meta: constructMetadata({data: selectedData, url})
    };
  } catch ({message: code}) {
    error(...errorArgs({errorMessages, code, defaultMessage: code}));
  }
}
