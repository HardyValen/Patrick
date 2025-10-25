<!--
Todo:
* command for tags
* tags can be closed by utilizing clickable cross icon and a button-like element (like MUI chips)
* the suggestion includes recent titles and tags.
* formatted query still hold for execute search.
-->

<script>
  import { cn, selectDistinct, stringify } from "$lib/utils.js";
  import { typographyVariants, fetchJSON } from "$lib";
  import { Button } from "$lib/components/ui/button";
  import { Badge } from "$lib/components/ui/badge";
  import { page as appStatePage } from "$app/state";
  import { computeCommandScore } from "bits-ui";
  import ButtonGroup from "$lib/components/ui/button-group/button-group.svelte";
  import { replaceState } from "$app/navigation";
  import { SvelteSet } from "svelte/reactivity";
  import CircleX from "@lucide/svelte/icons/circle-x";
  import { SearchAuto } from "$lib/composite/index.js";
  import { Input } from "$lib/components/ui/input";
  import * as Popover from "$lib/components/ui/popover";

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
  // Command Items = Suggestions
  let commandItems = $state(
    {
      titles: data.suggestions.titles?.reduce((acc, item) => {
        // !!! titles
        acc.push({
          // href: new URL(`/products/${item.id}`, appStatePage.url),
          title: item.name,
          type: "single"
        });
        return acc;
      }, []),
      tags: data.suggestions.tags?.map(tag => {
        let url = new URL(appStatePage.url);
        url.searchParams.set("tag", tag)
        return {
          // href: url.href,
          title: tag,
          type: "multiple"
        }
      })
    }
  )

  let displayedProducts = $derived(data.suggestions.titles?.filter(product => {
    let queryTags = appStatePage.url.searchParams.get("tag")
    if (queryTags) {
      return product.tags?.includes(queryTags)
    } else {
      return true
    }
  }));

  let isOnProgress = $state(false);
  let showCommand = $state(false);
  let productsData = $state(data.products);
  let searchValue = $state("");
  let searchTags = $state(new SvelteSet(
    appStatePage.url.searchParams.getAll("tags")
  ));
  let inputRef = $state(null);
  let searchAutoRef = $state(null);

  // =================================
  //  FUNCTIONS
  // =================================
  async function handleTestClick({cursor, page} = {}) {
    console.log(page)
    if (isOnProgress) return;
    isOnProgress = true;
    try {
      let apiProductURL = new URL("/api/products", appStatePage.url);
      let productSearchParams = new URLSearchParams();

      // Construct URLSearchParams
      // productSearchParams.set("title", testSearch);
      productSearchParams.set("limit", "15");
      if (searchValue) productSearchParams.set("name", searchValue);
      if (cursor) productSearchParams.set("cursor", cursor);
      if (page) productSearchParams.set("page", page);

      searchTags.forEach(tag => {
        productSearchParams.append("tags", tag);
      });

      // Set the window URL to include the queries
      replaceState(`?${productSearchParams.toString()}`, {});

      // Fetch data from API
      apiProductURL.search = productSearchParams;
      productsData = await fetchJSON(fetch, apiProductURL);
      // console.log($state.snapshot(productsData))
    } catch (e) {
      console.error(e.message);
    }
    isOnProgress = false;
  }

  function handleInputFocus() {
    showCommand = true;
  }

  function handleInputKeydown(e) {

    // capture directional keys
    let directionalKeys = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"]
    if (directionalKeys.includes(e.key)) {
      e.preventDefault();
      console.log(e.key, e.keyCode);
      searchAutoRef.focus();
      // searchAutoRef.dispatchEvent(new KeyboardEvent("keydown", {key: e.key}))
    }
  }

  function handleCommandItemClick(e) {
    let {unit, value, id} = e.target.dataset;
    if (unit === "single") searchValue = value;
    if (unit === "multiple") {
      searchTags.add(id);
      searchValue = "";
    }
    showCommand = false;

    // simulate handleTestClick
    handleTestClick()
  }

  function handleTagBadgeClick(e) {
    let {value} = e.target.dataset;

    // remove selected tag from searchTags
    searchTags.delete(value);

    // simulate handleTestClick
    handleTestClick()
  }
</script>

<div
  bind:this={ref}
  class={cn(className)}
  {...restProps}
>
  <!-- {JSON.stringify(displayedProducts.map(item => item.title))} -->

  <div
    class={cn(
      "w-full max-w-280 m-auto my-10",
      "flex items-center gap-x-2"
    )}
  >
    <Input type="text" placeholder="Search"
      bind:value={searchValue}
      bind:ref={inputRef}
      onfocus={handleInputFocus}
      onkeydown={handleInputKeydown}
    />

    <button
      class="py-1 px-6 bg-slate-400"
      onclick={() => handleTestClick()}
      disabled={isOnProgress}
    >
      Submit
    </button>
  </div>

  <SearchAuto
    items={commandItems}
    showComponent={showCommand}
    value={searchValue}
    showInput={false}
    inputRef={inputRef}
    bind:ref={searchAutoRef}
    onCommandItemClick={handleCommandItemClick}
    class={cn(
      "w-full max-w-280",
      "relative"
    )}
  />

  <div>
    {#each [...searchTags.values()] as tags}
      <Badge
        class={cn(
          "cursor-pointer",
          "bg-slate-50 dark:bg-slate-800 border-slate-800 dark:border-slate-200",
          "hover:bg-slate-200/50 hover:dark:bg-slate-800/50 hover:border-slate-800/50 hover:dark:border-slate-200/50",
          "text-black dark:text-white"
        )}
        onclick={handleTagBadgeClick}
        data-value={tags}
      >
        {stringify(tags)}
        <CircleX/>
      </Badge>
    {/each}
  </div>
  <div>
    <ul>
      {#each productsData.data as data}
        <li>{data.id} - {data.name} - {data.relevancyScore}</li>
      {/each}
    </ul>
  </div>

  <ButtonGroup>
    <Button
      variant="outline"
      onclick={() => handleTestClick({page: 1})}
    >
      First
    </Button>
    <Button
      variant="outline"
      onclick={() => handleTestClick({page: Math.max(productsData.hyper.currentPage - 1, 1)})}
    >
      Previous
    </Button>
    <Button
      variant="outline"
      onclick={() => handleTestClick({page: Math.min(productsData.hyper.currentPage + 1, productsData.hyper.totalPages)})}
    >
      Next
    </Button>
    <Button
      variant="outline"
      onclick={() => handleTestClick({page: productsData.hyper.totalPages})}
    >
      Last
    </Button>
  </ButtonGroup>
</div>
