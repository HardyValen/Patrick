<script>
  import { cn } from "$lib/utils.js";
  import { typographyVariants } from "$lib/typographyVariants";
  import {
    ProductTop
  } from "$composite";

  let {
    ref = $bindable(null),
    class: className,
    data: productData,
    ...restProps
  } = $props()

</script>

<!-- Components: -->
<!-- - Top Banner: Title, Image, Subtitle; Publish Date, Tags -->
<!-- - Markdown Content -->
<!-- - Footer: Previous / Next post, Related Posts with similar tags -->

<div
  bind:this={ref}
  class={cn(className)}
  {...restProps}
>
  <ProductTop
    class={cn(
      "w-full max-w-280 m-auto my-10",
      "px-4"
    )}
    data={productData}
  />

  <div
    class={cn(
      "w-full max-w-200 m-auto my-10",
      "_client-content",
      "px-4"
    )}
  >
    {@html productData.content}
  </div>
</div>
