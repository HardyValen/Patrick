import { fetchJSON, FI, resolve } from "$lib";
import { error } from '@sveltejs/kit';
import { traverseJson } from "$lib/utils";


/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, url, params }) {

  try {
    return {
      products: { data: [], hyper: {} },
      suggestions: {
        tags: await FI.TestMH.items_tags({ fetch })
          .then(items => items.tags)
      },
      meta: await FI.Products.meta({fetch}),
      catalogue: await FI.Catalogue.products({fetch})
    }
  } catch (e) {
    error(404, e.message);
  }
}
