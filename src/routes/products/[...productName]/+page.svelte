<script>
  import { cn } from "$lib/utils.js";
  import { typographyVariants } from "$lib";
  import { FeaturedProductTop, FeaturedProductFooter, Meta, ProductCarousel, Taglist } from "$lib/composite";
  import * as Accordion from "$lib/components/ui/accordion";

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
    className
  )}
  {...restProps}
>
  <!-- Layout for the page -->
  <div class={cn(
    // "border-4 border-red-500",
    "w-full max-w-4xl m-auto",
    "grid grid-cols-8 gap-2",
    "py-4"
  )}>
    <div class={cn(
      // "border-4 border-blue-500",
      "col-span-8 md:col-span-3"
    )}>
      <ProductCarousel images={current.images}/>
    </div>
    <div class={cn(
      // "border-4 border-green-500",
      "col-span-8 md:col-span-5",
      "px-4 md:p-0"
    )}>
      <!-- CURRENCY -->
      <p>
        <span class="text-lg font-semibold">
          Rp
        </span>
        <span class="font-extrabold text-2xl md:text-3xl">
          {Intl.NumberFormat("id-ID", {currency:"IDR", minimumFractionDigits:0, maximumFractionDigits:0}).format(current.retail_price_idr)}
        </span>
      </p>
      <!-- END OF CURRENCY -->
      <!-- END OF PRODUCT NAME -->
      <p
        class={cn(
          "font-extrabold text-lg md:text-xl"
        )}
      >
        {current.name}
      </p>
      <!-- PRODUCT NAME -->
      <!-- TAGLIST -->
      <Taglist
        class="my-2"
        tags={current.tags.map(tag => {return {title: tag, href:`/products?tags=${tag}`}})}
        itemClass={cn(
          "border-1 border-slate-600 dark:border-slate-400",
          "text-[9px] md:text-[10px]",
          "text-slate-600 dark:text-slate-400",
          "transition hover:bg-slate-600 hover:text-white dark:hover:bg-slate-400 hover:dark:text-white"
        )}
      />
      <!-- END OF TAGLIST -->
      <!-- PRODUCT -->
      <div class={cn(
        "mt-2"
      )}>
        <Accordion.Root type="multiple">
          <Accordion.Item value="item-1">
            <Accordion.Trigger>
              <h2 class={cn(
                "font-extrabold text-xl md:text-2xl"
              )}>
                Tentang Produk
              </h2>
            </Accordion.Trigger>
            <Accordion.Content>
              {@html current.description}
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
      {@html current.description}
      <!-- {current.url_tiktok_shop} -->
      <!-- {current.url_tokopedia} -->
    </div>
    <!-- <div class={cn(
      "border-4 border-purple-500",
      "max-xl:hidden md:col-span-2"
    )}>

    </div> -->
  </div>
</div>
