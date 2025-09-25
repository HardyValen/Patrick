<script>
  import {
    DarkMode,
    ClientCarousel,
    ClientProducts,
    ClientArticles,
    ClientBrands
  } from "$composite";

  import { cn } from "$lib/utils";

  let { data } = $props();

</script>

<svelte:head>
	<title>NiSi Optics Indonesia</title>
	<meta name="description" content="NiSi Optics Indonesia" />
</svelte:head>

<div>
  <!-- Carousel -->
  <ClientCarousel
    class={cn(
      "z-0"
    )}
    opts={{loop: true}}
    data={data.carousel}
  />

  <!-- Product -->
  <ClientProducts
    class={cn(
      "py-16 md:py-24",
      "bg-background",
      "relative top-[--spacing(-10)] rounded-t-3xl z-5"
    )}
    data={data.products}
  />
  <!-- Solutions -->
  <ClientArticles
    class={cn(
      "py-16 md:py-24 px-4",
      "bg-slate-100 dark:bg-slate-800",
      "relative z-5"
    )}
    data={data.articles}
  />

  <!-- Brands -->
  <!-- <ClientBrands
    class={cn(
      "py-16 md:py-24 px-8",
      "bg-slate-100 dark:bg-slate-800",
      "relative z-5"
    )}
    data={data.brands}
  /> -->
</div>
