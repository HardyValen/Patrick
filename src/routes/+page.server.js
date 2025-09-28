import { fetchJSON } from "$lib";
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
  try {
    let carouselData = await fetchJSON(fetch, "/assets/json/landing-carousel.json");

    let productsSummaryData = await fetchJSON(fetch, "/assets/json/products-data.json");

    let articlesData = await fetchJSON(fetch, "/assets/json/client-articles.json");

    let brandsData = await fetchJSON(fetch, "/assets/json/landing-brands.json");

    return {
      carousel: carouselData,
      products: productsSummaryData,
      articles: articlesData,
      brands: brandsData
    }
  } catch (e) {
    error(404, e.message);
  }
}
