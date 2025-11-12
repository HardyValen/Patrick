import { FI } from "$lib";
import { error } from '@sveltejs/kit';
import { traverseJson } from "$lib/utils";

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, url }) {
  try {
    return {
      articles: await FI.Landing.articles({fetch}),
      brands: await FI.Landing.brands({fetch}),
      carousel: await FI.Landing.carousel({fetch}),
      products: await FI.Landing.products({fetch}),
      meta: await FI.Landing.meta({ fetch })
    }
  } catch (e) {
    error(404, e.message);
  }
}
