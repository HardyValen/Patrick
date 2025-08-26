<script>
  import {
    DarkMode,
    ClientCarousel,
    ClientProducts,
    ClientArticles,
    ClientBrands
  } from "$composite";

  import { cn } from "$lib/utils";

  let { data } = $props()

</script>

<div>
  <!-- Carousel -->
  <ClientCarousel
    opts={{loop: true}}
    data={data.carousel}
  />

  <!-- Product -->
  <ClientProducts
    class={cn(
      "py-16 md:py-24",
      "bg-background"
    )}
    data={data.products}
  />
  <!-- Solutions -->
  <ClientArticles
    class={cn(
      "py-16 md:py-24 px-4",
      "bg-slate-100 dark:bg-slate-800"
    )}
    data={data.articles}
  />

  <!-- Brands -->
  <ClientBrands
    class={cn(
      "py-16 md:py-24 px-8",
      "bg-slate-100 dark:bg-slate-800"
    )}
    data={data.brands}
  />
</div>
