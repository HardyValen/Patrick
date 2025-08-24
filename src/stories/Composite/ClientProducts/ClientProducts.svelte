<script>
  import { cn } from "$lib/utils.js";
  import { typographyVariants } from "$lib/typographyVariants";
  import * as Card from "$lib/components/ui/card/index.js";

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
    "w-full max-w-320 m-auto",
    "flex flex-col",
    "gap-8",
  )}>
    <div class={cn(
      "px-2 max-md:px-8"
    )}>
      <h1 class={cn(
        typographyVariants({variant: "h1", typeface: "serif"}),
        "max-2xl:text-center"
      )}>Products & Solutions</h1>
    </div>
    <div class="grid grid-cols-1 items-stretch md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 px-1">
      {#each clientProductsData.slice(0,6) as data}
        <a href={data.href}>
          <Card.Root class={cn(
            "h-full w-full rounded-none md:rounded-md shadow-none md:shadow-sm gap-0 p-0",
            "dark:bg-slate-900 bg-slate-50"
          )}>
            <div
              class={cn(
                `bg-center bg-no-repeat bg-cover`,
                `min-h-40 md:rounded-t-md`
              )}
              style={`background-image: url(${data.img})`}
            >
            </div>

            <div class={cn(
              "flex flex-col gap-3 py-3 h-full justify-between"
            )}>
              <Card.Content>
                <Card.Title class={"pb-1 tracking-wide line-clamp-2 leading-5"}>{data.title}</Card.Title>
                <Card.Description class={cn(
                  "line-clamp-3"
                )}>{data.subtitle}</Card.Description>
              </Card.Content>
              {#if data.linkText}
                <Card.Footer class={cn("flex justify-end px-5 md:px-2")}>
                  <span
                  class={cn(
                  "after:content-['_⟶'] transition-all text-sm font-extrabold tracking-wider",
                  "md:rounded-xl",
                  "md:hover:underline md:px-3 xl:px-5 md:py-1 md:hover:bg-blue-50 md:dark:hover:bg-blue-950",
                  "text-slate-600 dark:text-slate-300 max-md:underline"
                  )}
                  >
                    {data.linkText}
                  </span>
                </Card.Footer>
              {/if}
            </div>

          </Card.Root>
        </a>
      {/each}
    </div>
  </div>
</div>
