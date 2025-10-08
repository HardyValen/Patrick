<script>
  import { cn } from "$lib/utils.js";
  import { typographyVariants } from "$lib";
  import { onMount } from 'svelte';
  import { Button } from "$lib/components/ui/button/";
  import ChevronLeft from "@lucide/svelte/icons/chevron-left";

  let {
    ref = $bindable(null),
    class: className,
    data: articleData,
    ...restProps
  } = $props();

  let date = $state(new Date(articleData.publishDate))

</script>

<!--
  articleData properties:
    - title: string
    - subtitle: string
    - img: URL Link
    - tags: string array
-->

{#snippet articleTop (mediaClass)}
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
        href="/articles"
      >
        <ChevronLeft/> Articles
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
      {articleData.title}
    </h1>

    <div class="flex gap-2 my-2">
      {#each articleData.tags as tags}
        <Button href={`/articles?tag=${tags}`} variant="outline" size="sm">{tags}</Button>
      {/each}
    </div>

    <img
      class={cn(
        "w-full h-auto mt-2 mb-8 max-h-100 md:max-h-160 mx-auto"
      )}
      src={articleData.img}
      alt={articleData.title}
    />

    {#if articleData.subtitle}
    <p
      class={cn(
        typographyVariants({variant: "blog-subtitle", typeface: "serif"}),
        "text-gray-700 dark:text-gray-300"
      )}
    >
      {articleData.subtitle}
    </p>
    {/if}
  </header>
{/snippet}

{@render articleTop()}
