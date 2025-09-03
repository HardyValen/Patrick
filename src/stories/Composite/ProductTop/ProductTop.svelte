<script>
  import { cn } from "$lib/utils.js";
  import { typographyVariants } from "$lib/typographyVariants";
  import { onMount } from 'svelte';
  import { Button } from "$lib/components/ui/button/";
  import ChevronLeft from "@lucide/svelte/icons/chevron-left";

  let {
    ref = $bindable(null),
    class: className,
    data: productData,
    ...restProps
  } = $props();

  let date = $state(new Date(productData.publishDate))

  let imgRef = $state(null);
  let naturalDimension = $state({});

  onMount(() => {
    naturalDimension.naturalWidth = imgRef.naturalWidth;
    naturalDimension.naturalHeight = imgRef.naturalHeight;
  })

</script>

<!--
  productData properties:
    - title: string
    - subtitle: string
    - img: URL Link
    - tags: string array
-->

{#snippet productTop (mediaClass)}
  <header
    bind:this={ref}
    class={cn(
      className,
      mediaClass
    )}
    {...restProps}
  >
    <div class="flex gap-3 mb-4">
      <a
        class={cn(
          typographyVariants({variant: "blog-link"}),
          "flex items-center justify-center",
          "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:mr-2"
        )}
        href="/products"
      >
        <ChevronLeft/> Products
      </a>
      <span>/</span>
      <span>
        {new Intl.DateTimeFormat("en-US", {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }).format(date)}
      </span>
    </div>

    <h1 class={cn(
      typographyVariants({variant: "blog-title", typeface: "serif"}),
      "mb-4"
    )}>
      {productData.title}
    </h1>

    <div class="flex gap-2 my-2">
      {#each productData.tags as tags}
        <Button href={`/products?tag=${tags}`} variant="outline" size="sm">{tags}</Button>
      {/each}
    </div>

    <img
      bind:this={imgRef}
      class={cn(
        "w-full h-auto mt-2 mb-8 max-h-100 md:max-h-160 mx-auto"
      )}
      src={productData.img}
      alt={productData.title}
    />

    {#if productData.showSubtitle}
    <p
      class={cn(
        typographyVariants({variant: "blog-subtitle", typeface: "serif"}),
        "text-gray-700 dark:text-gray-300"
      )}
    >
      {productData.subtitle}
    </p>
    {/if}
  </header>
{/snippet}

{#if naturalDimension.naturalWidth <= naturalDimension.naturalHeight}
  <header
    bind:this={ref}
    class={cn(
      className,
      "max-md:hidden grid grid-cols-2 gap-8"
    )}
  >
    <div>
      <div class="flex gap-3 mb-4">
        <a
          class={cn(
            typographyVariants({variant: "blog-link"}),
            "flex items-center justify-center",
            "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:mr-2"
          )}
          href="/products"
        >
          <ChevronLeft/> Products
        </a>
        <span>/</span>
        <span>
          {new Intl.DateTimeFormat("en-US", {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          }).format(date)}
        </span>
      </div>

      <h1 class={cn(
        typographyVariants({variant: "blog-title", typeface: "serif"}),
        "mb-4"
      )}>
        {productData.title}
      </h1>

      <div class="flex gap-2 my-2">
        {#each productData.tags as tags}
          <Button href={`/products?tag=${tags}`} variant="outline" size="sm">{tags}</Button>
        {/each}
      </div>
      {#if productData.showSubtitle}
      <p
        class={cn(
          typographyVariants({variant: "blog-subtitle", typeface: "serif"}),
          "text-gray-700 dark:text-gray-300",
          "md:mt-8"
        )}
      >
        {productData.subtitle}
      </p>
      {/if}
    </div>
    <div>
      <img
        bind:this={imgRef}
        class={cn(
          "w-full h-auto mt-2 mb-8 max-h-100 md:max-h-160 mx-auto"
        )}
        src={productData.img}
        alt={productData.title}
      />
    </div>
  </header>
{:else}
  {@render productTop("max-md:hidden")}
{/if}

{@render productTop("md:hidden")}
