<script>
  import { cn } from "$lib/utils.js";
  import { typographyVariants } from "$lib/typographyVariants";
  import { AnimateIntersect } from "$composite";

  let {
    ref = $bindable(null),
    class: className,
    data: clientProductsData = [],
    ...restProps
  } = $props();

  let screenWidth = $state(0);
  const breakpoint_xl = 1280;
</script>

<svelte:window
  bind:innerWidth={screenWidth}
/>

<div
  bind:this={ref}
  class={cn(
    className
  )}
  {...restProps}
>

  <div class={cn(
    "w-full max-w-480 m-auto",
    "flex flex-col",
    "gap-16",
  )}>

    <AnimateIntersect variant="top" noExit
      class={cn(
        "px-2 max-md:px-8"
      )}
    >
      <h1 class={cn(
        typographyVariants({variant: "h1", typeface: "serif"}),
        "text-center"
      )}>
        Products & Solutions
      </h1>
    </AnimateIntersect>

    <div
      class={cn(
        "px-0 md:px-4 xl:px-8 mx-auto",
        "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-y-10 md:gap-y-10 md:gap-x-4"
      )}
    >
      {#each clientProductsData.slice(0,6) as data, idx}
        <AnimateIntersect
          noExit
          duration={500}
          delay={(screenWidth > breakpoint_xl ? 300 * (1 + idx) : 300)}
          variant={idx % 2 == 0 ? "top" : "bottom"}
        >
          <a
            href={`/products/${data.id}`}
            class="cpc relative"
          >
            <div
              class={cn(
                "p-4 w-40 h-40 relative top-0",
                "rounded-xl",
                "cpc_img-bg",
                "scale-85",
                "flex flex-col items-center justify-end",
                "text-white font-semibold"
              )}
            >
              {data.title}
            </div>
            <img
              src={data.img}
              alt={data.title}
              class={cn(
                "absolute bottom-12 p-2",
              )}
            />
          </a>
        </AnimateIntersect>
      {/each}
    </div>
  </div>
</div>

<style>
  .cpc {
    .cpc_img-bg {
      transition: all 0.2s;

      background: linear-gradient(180deg,
        var(--color-gray-900) 0%,
        var(--color-gray-600) 100%
      );
    }

    img {
      transform: scale(1);
      transition: all 0.2s;
    }

    &:hover {
      .cpc_img-bg {
        box-shadow:
          0px 0px 10px 10px rgba(120,120,120,0.2),
          0px 0px 10px 20px rgba(120,120,120,0.1);
      }

      img {
        transform: scale(1.05) rotate(5deg);
      }
    }
  }
</style>
