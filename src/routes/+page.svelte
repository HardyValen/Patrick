<script>
  import {
    DarkMode,
    ClientCarousel,
    ClientProducts,
    ClientArticles,
    ClientBrands
  } from "$composite";

  import { cn } from "$lib/utils";

  import {
    clientCarouselData,
    clientProductsData,
    clientArticlesData,
    clientBrandsData
  } from "$data";

</script>

<div>
  <!-- Carousel -->
  <ClientCarousel
    opts={{loop: true}}
    data={clientCarouselData}
  />

  <!-- Product -->
  <ClientProducts
    class={cn(
      "py-16 md:py-24",
      // "py-16 md:py-24 md:px-(--px-lpage-md) xl:px-(--px-lpage-xl)",
      "bg-background"
    )}
    data={clientProductsData}
  />
  <!-- Solutions -->
  <ClientArticles
    class={cn(
      "py-16 md:py-24 px-4",
      "bg-slate-100 dark:bg-slate-800"
    )}
    data={clientArticlesData}
  />

  <!-- Brands -->
  <ClientBrands
    class={cn(
      "py-16 md:py-24 px-8",
      "bg-slate-100 dark:bg-slate-800"
    )}
    data={clientBrandsData}
  />
</div>
