<script>
  import { cn, stringify } from "$lib/utils";
  import { typographyVariants } from "$lib";
  import { Badge } from "$lib/components/ui/badge";
  import X from "@lucide/svelte/icons/x";

  let {
    ref = $bindable(null),
    class: className,
    tags,
    onclick: handleTagBadgeClick = () => {},
    clearAll: handleClearAll = () => {},
    ...restProps
  } = $props()
</script>


<div
  bind:this={ref}
  {...restProps}
  class={cn(
    "flex gap-2 items-start",
    className
  )}
>
  <div class="text-sm font-bold">Tags:</div>
  <div
    class={cn(
      "w-full",
      "max-h-40 overflow-y-auto",
      "flex flex-wrap gap-1"
    )}
  >
    {#each tags as tag}
      <Badge
        variant="outline"
        onclick={handleTagBadgeClick}
        class={cn("hover:bg-muted cursor-pointer")}
        data-value={tag}
      >
        {stringify(tag)} <X/>
      </Badge>
    {/each}
    <!-- {#if tags.length > 0} -->
      <Badge
        onclick={handleClearAll}
        class={cn(
          "bg-transparent border-1 border-red-500 text-red-500 cursor-pointer",
          "hover:bg-red-500 hover:text-white",
        )}
      >
        clear all
      </Badge>
    <!-- {/if} -->
  </div>
</div>
