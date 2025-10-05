<script>
  import { cn } from "$lib/utils.js";
  import { typographyVariants } from "$lib";
  import {
    ArticleTop,
    ArticleFooter
  } from "$composite";

  let {
    ref = $bindable(null),
    class: className,
    data: productData,
    ...restProps
  } = $props();

  const { current, prev, next } = $derived(productData ?? {});
  const { content, ...restCurrent } = $derived(current ?? {});

</script>

<svelte:head>
	<title>{current.title}</title>
	<meta name="description" content={current.title} />
</svelte:head>
<!-- Components: -->
<!-- - Top Banner: Title, Image, Subtitle; Publish Date, Tags -->
<!-- - Markdown Content -->
<!-- - Footer: Previous / Next post, Related Posts with similar tags -->

<div
  bind:this={ref}
  class={cn(
    className,
    "px-8"
  )}
  {...restProps}
>
  <ArticleTop
    class={cn(
      "w-full max-w-280 m-auto my-10"
    )}
    data={restCurrent}
  />

  <div
    class={cn(
      "w-full max-w-200 m-auto my-10",
      "_client-content"
    )}
  >
    {@html content}
  </div>

  <ArticleFooter
    class={cn(
      "w-full max-w-280 m-auto my-10"
    )}
    data={{prev, next}}
  />
</div>
