import { error } from "@sveltejs/kit";
import { clientProductsData } from "$data";
import { unifiedPipeline as processor} from '$lib'

async function mdToHtml(content) {
  return String(await processor.process(content));
}

function getFooterLink(obj) {
  const { id, title } = obj ?? {};
  return { id, title }
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, url }) {
  let selectedData = await clientProductsData.find(({ id }) => id === params.productCategory);
  selectedData.content = await mdToHtml(selectedData.content);

  let previousData = clientProductsData.find(({ id }) => id === selectedData.prevId);
  let nextData = clientProductsData.find(({ id }) => id === selectedData.nextId);

  return {
    current: selectedData,
    prev: getFooterLink(previousData),
    next: getFooterLink(nextData)
  };
}
