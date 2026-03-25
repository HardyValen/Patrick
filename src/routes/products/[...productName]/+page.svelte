<script>
  import { cn } from "$lib/utils.js";
  import { typographyVariants } from "$lib";
  import { FeaturedProductTop, FeaturedProductFooter, Meta, ProductCarousel } from "$lib/composite";

  let {
    ref = $bindable(null),
    class: className,
    data: productData,
    ...restProps
  } = $props();

  const { current } = $derived(productData ?? {});

</script>

<Meta metadata={productData.meta}/>

<div
  bind:this={ref}
  class={cn(
    className,
    "px-8"
  )}
  {...restProps}
>
  <ProductCarousel/>
</div>
