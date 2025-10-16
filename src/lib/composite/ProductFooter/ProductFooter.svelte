<script>
  import { cn } from "$lib/utils.js";
  import { typographyVariants } from "$lib";


  let {
    ref = $bindable(null),
    class: className,
    data: productData,
    ...restProps
  } = $props();

  let { next, prev } = $derived(productData ?? {});
</script>

<!-- Snippets -->
<!-- 01. Footer Link  -->
<!--     @param data = {id, title} -->
{#snippet footerLink(data, footerTitle)}
  <h4
    class={cn(
      typographyVariants({variant: "h4", typeface: "serif"}),
      "mb-4"
    )}
  >
    {footerTitle}
  </h4>
  <a
    href={`/products/${data.id}`}
    class={cn(
      "line-clamp-3",
      typographyVariants({variant: "blog-link"})
    )}
  >
    {data.title}
  </a>
{/snippet}

<!-- Main Section -->
<footer
  bind:this={ref}
  class={cn(
    className,
  )}
  {...restProps}
>
  <div
    class={cn(
      "grid grid-cols-2 gap-2 md:gap-4 xl:gap-8"
    )}
  >
    <div
      class={cn(
        "justify-self-start"
      )}
    >
      {@render footerLink(prev, "Previous")}
    </div>
    <div
      class={cn(
        "justify-self-end",
        "text-right"
      )}
    >
      {@render footerLink(next, "Next")}
    </div>
  </div>
</footer>
