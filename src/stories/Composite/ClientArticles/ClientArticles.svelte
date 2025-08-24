<script>
  import { cn } from "$lib/utils.js";
  import { typographyVariants } from "$lib/typographyVariants";

  let {
    ref = $bindable(null),
    class: className,
    data: articlesData = [],
    ...restProps
  } = $props()

  let rv = $state("rounded-[1rem]");
</script>

<div
  bind:this={ref}
  class={cn(
    className
  )}
  {...restProps}
>
  <!-- container -->
  <div class={cn(
    "max-w-320 w-full m-auto",
    "flex flex-col",
    "gap-8",
  )}>

    <!-- article title -->
    <div>
      <h1
        class={cn(
          typographyVariants({variant: "h1", typeface: "serif"}),
          "px-4"
        )}
      >
        Articles
      </h1>
    </div>

    <!-- article grid wrapper -->
    <div class={cn(
      `min-h-100 w-full ${rv} p-5`,
      "bg-slate-950",
      "grid grid-cols-1 gap-4",
      articlesData.length > 1 ? "md:grid-cols-2" : ""
    )}>
      {#each articlesData.slice(0, 1) as data}
        <!-- Featured Item wrapper -->
        <a
          class={cn(
            `${rv}`,
            "min-h-50",
            "bg-center bg-cover bg-no-repeat",
            "bg-slate-900/70 hover:bg-slate-900/60 bg-blend-multiply",
            "p-5 flex flex-col justify-end",
            "hover:underline active:underline",
            "transition-all duration-150 ease-in-out",
            "text-slate-50"
          )}
          href={data.href}
          style={`background-image: url(${data.img})`}
        >
          <div>{data.tag}</div>
          <h3 class={cn(
            typographyVariants({variant: "h2"}),
            "font-bold line-clamp-3"
          )}>
            {data.title}
          </h3>
        </a>
      {/each}

      <!-- Rest of the Articles wrapper -->
      {#if articlesData.length > 1}
        <div class={cn(
          `${rv}`,
          "bg-slate-900",
          "text-slate-50",
          "p-5",
          "flex flex-col items-stretch gap-2"
        )}>
          {#each articlesData.slice(1, 4) as data}
            <a
              class={cn(
                "not-last:pb-2 not-last:border-b-1 not-last:border-b-slate-700",
                "flex justify-start items-center gap-4 md:gap-8"
              )}
              href={data.href}
            >
              <div class={cn(
                "flex flex-col",
                "w-full",
              )}>
                <p class={cn(
                  "text-slate-400 text-sm line-clamp-1"
                )}>
                  {data.tag}
                </p>
                <p class={cn(
                  "text-white font-bold line-clamp-3"
                )}>{data.title}</p>
              </div>
              <div
                class={cn(
                  "_bg-center", `${rv}`
                )}
                style={`background-image: url(${data.img})`}
              >
                <div class={"w-20 h-20 md:w-25 md:h-25"}></div>
              </div>
            </a>
          {/each}
        </div>
      {/if}
    </div>

  </div>
</div>
