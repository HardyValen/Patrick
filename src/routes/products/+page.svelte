<script>
  import { cn } from "$lib/utils.js";
  import { typographyVariants } from "$lib/typographyVariants";
  import { SearchAuto, query } from "$composite/SearchAuto";
  import data from "$data/mh_mice.json";

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  } = $props();

  let formattedQuery = [];


</script>

<div
  bind:this={ref}
  class={cn(className)}
  {...restProps}
>

  <!-- <SearchAuto
    name="ProductSearch"
  /> -->

  Hello World

  <div>
    <!-- {#if query.string != ""}
      {#each filteredData as datum}
        <div>
          {datum.title}
        </div>
      {/each}
    {:else}
      {#each data as datum}
        <div>
          {datum.title}
        </div>
      {/each}
    {/if} -->
    <!-- {JSON.stringify(data[0])} -->
  </div>

</div>
