import { fetchJSON, FI } from "$lib";
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
  try {
    return {
      carousel: await FI.landingCarousel({fetch}),
      products: await FI.productsData({fetch}),
      articles: await FI.clientArticles({fetch}),
      brands: await FI.landingBrands({fetch})
    }
  } catch (e) {
    error(404, e.message);
  }
}
