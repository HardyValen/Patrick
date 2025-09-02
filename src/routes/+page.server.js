  import {
    clientCarouselData,
    clientProductsSummaryData,
    clientArticlesData,
    clientBrandsData
  } from "$data";

  export function load() {
    return {
      carousel: clientCarouselData,
      products: clientProductsSummaryData,
      articles: clientArticlesData,
      brands: clientBrandsData
    }
  }
