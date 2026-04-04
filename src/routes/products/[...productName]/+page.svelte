<script>
  import { cn } from "$lib/utils.js";
  import { typographyVariants } from "$lib";
  import { FeaturedProductTop, FeaturedProductFooter, Meta, ProductCarousel, Taglist } from "$lib/composite";
  import { Button } from "$lib/components/ui/button";
    import { ExternalLink } from "@lucide/svelte";

  let {
    ref = $bindable(null),
    class: className,
    data: productData,
    ...restProps
  } = $props();

  const { current, meta } = $derived(productData ?? {});
  let showCompleteDescription = $state(false);

</script>

<Meta metadata={meta}/>

<div
  bind:this={ref}
  class={cn(
    className
  )}
  {...restProps}
>
  <!-- LAYOUT FOR THE PAGE -->
  <div class={cn(
    // "border-4 border-red-500",
    "w-full max-w-4xl m-auto",
    "grid grid-cols-8 gap-2 md:gap-8",
    "py-4"
  )}>
    <!-- LAYOUT FOR CAROUSEL -->
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
      <div class={cn(
        // "border-4 border-green-500",
        "grid grid-cols-1 gap-8"
      )}>
        <!-- PRODUCT DESCRIPTION HEADER -->
        <div class={cn(
          // "border-4 border-fuchsia-500",
        )}>
          <!-- CURRENCY -->
          <div class={cn(
            // "border-4 border-cyan-500"
          )}>
            <span class="text-lg font-semibold">
              Rp
            </span>
            <span class="font-extrabold text-2xl md:text-3xl">
              {Intl.NumberFormat("id-ID", {currency:"IDR", minimumFractionDigits:0, maximumFractionDigits:0}).format(current.retail_price_idr)}
            </span>
          </div>
          <!-- END OF CURRENCY -->
          <!-- PRODUCT NAME -->
          <div
            class={cn(
              // "border-4 border-cyan-500",
              "font-extrabold text-lg md:text-xl"
            )}
          >
            {current.name}
          </div>
          <!-- END OF PRODUCT NAME -->
          <!-- TAGLIST -->
          <Taglist
            class={cn(
              // "border-4 border-cyan-500"
              "mt-2"
            )}
            tags={current.tags.map(tag => {return {title: tag, href:`/products?tags=${tag}`}})}
            itemClass={cn(
              "border-1 border-slate-600 dark:border-slate-400",
              "text-[9px] md:text-[10px]",
              "text-slate-600 dark:text-slate-400",
              "transition hover:bg-slate-600 hover:text-white dark:hover:bg-slate-400 hover:dark:text-white"
            )}
          />
          <!-- END OF TAGLIST -->
        </div>
        <!-- END OF PRODUCT DESCRIPTION HEADER -->
        <!-- EXTERNAL LINKS -->
        <div class={cn(
          // "border-4 border-fuchsia-500",
          "flex flex-row items-start",
          "gap-2"
        )}>
          <Button
            class={cn(
              "cursor-pointer"
            )}
            href={current.url_tokopedia}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy at Tokopedia
            <ExternalLink/>
          </Button>
          <Button
            variant="secondary"
            class={cn(
              "cursor-pointer"
            )}
            href={current.url_tiktok_shop}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy at TikTok Shop
            <ExternalLink/>
          </Button>
        </div>
        <!-- END OF EXTERNAL LINKS -->
        <!-- PRODUCT DESCRIPTION BODY -->
        <div class={cn(
          // "border-4 border-fuchsia-500",
          "flex flex-col",
          "gap-2"
        )}>
          <div class={cn(
            "font-extrabold text-xl md:text-2xl",
          )}>
            Tentang Produk
          </div>
          <div class={cn(
            !showCompleteDescription && "line-clamp-5",
          )}>
            {@html current.description}
          </div>
          <div class={cn(
            // "border-4 border-red-500",
            "flex justify-end"
          )}>
            <Button variant="link" class="cursor-pointer" onclick={() => {
              showCompleteDescription = !showCompleteDescription;
            }}>
              {showCompleteDescription ? "Show Less" : "Show More"}
            </Button>
          </div>
        </div>
        <!-- END OF PRODUCT DESCRIPTION BODY -->
      </div>

    </div>
  </div>
  <!-- END OF MAIN LAYOUT -->
</div>
