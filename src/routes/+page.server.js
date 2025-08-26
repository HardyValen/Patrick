  import {
    clientCarouselData,
    clientProductsData,
    clientArticlesData,
    clientBrandsData
  } from "$data";

  export function load() {
    return {
      carousel: clientCarouselData,
      products: clientProductsData,
      articles: clientArticlesData,
      brands: clientBrandsData
    }
  }
