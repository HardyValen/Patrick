<script>
  import { cn, stringify } from "$lib/utils";
  import { Badge } from "$lib/components/ui/badge";

  let {
    ref = $bindable(null),
    class: className,
    itemClass: itemClassName,
    tags,
    ...restProps
  } = $props()
</script>

{#snippet tagElmt(tag)}
<Badge
  variant="outline"
  data-value={tag}
  class={cn(itemClassName)}
>
  {stringify(tag)}
</Badge>
{/snippet}

<div
  bind:this={ref}
  {...restProps}
  class={cn(
    "w-full",
    "max-h-40 overflow-y-auto",
    "flex flex-wrap gap-1",
    className
  )}
>
  {#each tags as tag}
    {#if typeof tag === "object" && tag !== null}
      {#if ["href", "title"].every(i => i in tag)}
        <a data-sveltekit-reload href={tag.href}>
          {@render tagElmt(tag.title)}
        </a>
      {/if}
    {:else}
      {@render tagElmt(tag)}
    {/if}
  {/each}
</div>
