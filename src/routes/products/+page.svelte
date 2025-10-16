<!--
Todo:
* command for tags
* tags can be closed by utilizing clickable cross icon and a button-like element (like MUI chips)
* the suggestion includes recent titles and tags.
* formatted query still hold for execute search.
-->

<script>
  import { cn } from "$lib/utils.js";
  import { typographyVariants, MyQuery } from "$lib";
  import { SearchAuto } from "$composite/SearchAuto";
  import { Button } from "$lib/components/ui/button";

  let {
    ref = $bindable(null),
    class: className,
    data,
    ...restProps
  } = $props();

  // =================================
  //  DATA DEFINITION
  // =================================
  // construct data for the command element
  // commandItems = {
  //    title: ["a", "b", ...]
  //    tags: ["x", "y", ...]
  // }
  let commandItems = $state(
    data.products.reduce((acc, item) => {
      acc.tags = [...new Set(acc.tags.concat(item.tags ?? []))];
      acc.titles.push(item.title);
      return acc;
    }, { titles: [], tags: [] })
  )

  let searchPrompt = $state({formatted: {}})
  // =================================
  //  FUNCTIONS
  // =================================
</script>

<div
  bind:this={ref}
  class={cn(className)}
  {...restProps}
>
  <!-- {JSON.stringify(commandItems)} -->
  <SearchAuto items={commandItems} bind:value={searchPrompt}/>
  {JSON.stringify(searchPrompt.formatted)}
</div>
