<script>
  import { cn } from "$lib/utils.js";
  import { typographyVariants } from "$lib/typographyVariants";

  let {
    ref = $bindable(null),
    class: className,
    data: brandsData = [],
    ...restProps
  } = $props()

</script>

{#snippet image({img, title})}
  <img
    src={img}
    alt={title}
    width="250"
    height="75"
  />
  <!-- <div
    class={cn(
      "_bg-center-contain w-50 h-30"
    )}
    style={`background-image: url(${img})`}
  >
  </div> -->
{/snippet}

<div
  bind:this={ref}
  class={cn(
    className
  )}
  {...restProps}
>

  <div class={cn(
    "max-w-320 w-full m-auto",
    "flex flex-col",
    "gap-8"
  )}>
    <h1 class={cn(
      typographyVariants({variant: "h2", typeface: "serif"}),
      "text-center", "font-black"
    )}>
      Brands Under our Store
    </h1>

    <div class={cn(
      "grid grid-cols-2 md:grid-cols-4 gap-8 xl:gap-y-16 xl:gap-x-24 items-center",
      "*:flex *:items-center *:justify-center *:opacity-80 *:hover:opacity-100",
      "*:transition *:duration-200 *:ease-in-out"
    )}>
      {#each brandsData as data}
        {#if data.href}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={data.href}
          >
            {@render image(data)}
          </a>
        {:else}
          <div>
            {@render image(data)}
          </div>
        {/if}
      {/each}
    </div>
  </div>


</div>
