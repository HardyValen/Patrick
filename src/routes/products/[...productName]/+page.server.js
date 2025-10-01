import { error } from "@sveltejs/kit";
import { fetchJSON, unifiedPipeline as processor } from '$lib';
import { ErrorMessageHandlers } from "$lib/proxyHandlers";

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
    // URL for products data json
    const cpd_url = "/assets/json/products-data.json";

    // URL for error messages
    const err_url = "/assets/json/error.json";

    // fetch error message
    const errorMessages = await fetchJSON(fetch, err_url);

    // fetch clientProductData
    const clientProductsData = await fetchJSON(fetch, cpd_url);

    // proxy for error messages
    const getMessage = new Proxy(errorMessages, ErrorMessageHandler.GetMessage);
    const getHttpCode = new Proxy(errorMessages, ErrorMessageHandler.GetHTTPCode);

    // Get product element by id matches with product name
    let selectedData = await clientProductsData.find(({ id }) => id === params.productName);

    // if the product element is not found, return an error.
    if (selectedData === undefined) {
      throw new Error(getMessage["PRODUCT_NAME_0001"]);

    }

    // try fetch from content url, else it shall return error when the resource is not found.
    const response = await fetch(selectedData.content);

    if (!response.ok) {
      throw new Error(getMessage["PRODUCT_NAME_0002"]);
    }

    const result = await response.text()
      .then(item => mdToHtml(item));

    let previousData = await clientProductsData.find(({ id }) => id === selectedData.prevId);
    let nextData = await clientProductsData.find(({ id }) => id === selectedData.nextId);

    return {
      current: {...selectedData, content: result},
      prev: getFooterLink(previousData),
      next: getFooterLink(nextData)
    };
  } catch (e) {
    error(404, e.message);
  }
}
