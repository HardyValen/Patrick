<script>
  import { cn } from "$lib/utils";
  import { typographyVariants } from "$lib";
  import { Taglist } from "$lib/composite";

  let {
    ref = $bindable(null),
    class: className,
    data,
    ...restProps
  } = $props();
</script>

<div
  bind:this={ref}
  class={cn(
    "rounded-md dark:bg-slate-800 bg-slate-100 border-1",
    className
  )}
  {...restProps}
>
  <img
    src={data.images.best}
    alt={data.type}
    width=120 height=120
    class={cn(
      "w-full max-h-60 object-cover rounded-t-md border-gray"
    )}
    loading="lazy"
  >
  <div class="px-2">
    <!-- title -->
    <p class={cn(
      "my-2 text-xs md:text-sm font-extrabold",
      "font-serif leading-4 tracking-wider",
      "dark:text-slate-200 text-slate-800",
      "line-clamp-2 overflow-hidden"
    )}>
      {data.name.toUpperCase()}
    </p>
    <!-- taglist -->
    <Taglist
      class="my-2"
      tags={data.tags.map(tag => {return {title: tag, href:`?tags=${tag}`}})}
      itemClass={cn(
        "border-1 border-slate-600 dark:border-slate-400",
        "text-[9px] md:text-[10px]",
        "text-slate-600 dark:text-slate-400",
        "transition hover:bg-slate-600 hover:text-white dark:hover:bg-slate-400 hover:dark:text-white"
      )}
    />
    <!-- description / subtitle -->
    <p class={cn(
      "my-2 text-[10px] md:text-xs line-clamp-3 overflow-hidden",
      "dark:text-slate-400 text-slate-600"
    )}>
      {@html data.description}
    </p>
    <!-- Price Tag -->
    <p class={cn(
      "my-2 text-sm md:text-md",
      "font-bold"
    )}>
      {Intl.NumberFormat("id-ID", {style:"currency", currency:"IDR", minimumFractionDigits:0, maximumFractionDigits:0}).format(581234)}
    </p>
  </div>
</div>
