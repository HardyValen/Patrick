<script>
  import { cn } from "$lib/utils.js";
  import { typographyVariants } from "$lib/typographyVariants";
  import * as Card from "$lib/components/ui/card/index.js";
  import { AnimateIntersect } from "$composite";

  let {
    ref = $bindable(null),
    class: className,
    data: clientProductsData = [],
    ...restProps
  } = $props()
</script>

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
    "gap-8",
  )}>
    <div class={cn(
      "px-2 max-md:px-8"
    )}>

      <AnimateIntersect
        variant="top"
        noExit
      >
        <h1 class={cn(
          typographyVariants({variant: "h1", typeface: "serif"}),
          "text-center"
        )}>
          Products & Solutions
        </h1>
      </AnimateIntersect>

    </div>
    <div class="grid grid-cols-2 items-stretch md:grid-cols-3 xl:grid-cols-6 gap-1 md:gap-4 px-4 xl:px-8">
      {#each clientProductsData.slice(0,6) as data}
        <a href={`/products/${data.id}`}>
          <Card.Root class={cn(
            "h-full w-full rounded-none md:rounded-md shadow-none md:shadow-sm gap-0 p-0",
            "dark:bg-slate-900 bg-slate-50"
          )}>
            <div
              class={cn(
                `bg-center bg-no-repeat bg-contain`,
                `min-h-40 md:rounded-t-md bg-slate-200 dark:bg-slate-600`
              )}
              style={`background-image: url(${data.img})`}
            >
            </div>

            <div class={cn(
              "flex flex-col gap-3 py-3 h-full justify-between"
            )}>
              <Card.Content class={cn(
                "px-3 py-1"
              )}>
                <Card.Title class={"pb-1 tracking-wide line-clamp-2 leading-5"}>{data.title}</Card.Title>
                <Card.Description class={cn(
                  "line-clamp-3"
                )}>{data.subtitle}</Card.Description>
              </Card.Content>
            </div>

          </Card.Root>
        </a>
      {/each}
    </div>
  </div>
</div>
