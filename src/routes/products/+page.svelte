<!-- FOR 28 OCTOBER 2025 -->
<!--
  [Search Products...] [Submit Button] [Filter Icon with Tooltip]
-->

<script>
  import { cn, stringify } from "$lib/utils";
  import { typographyVariants, fetchJSON, Pagination } from "$lib";
  import * as Command from "$lib/components/ui/command";
  import { Button } from "$lib/components/ui/button";
  import * as Kbd from "$lib/components/ui/kbd";
  import * as InputGroup from "$lib/components/ui/input-group";
  import ButtonGroup from "$lib/components/ui/button-group/button-group.svelte";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { Skeleton } from "$lib/components/ui/skeleton";
  import { page as appStatePage } from "$app/state";
  import { replaceState } from "$app/navigation";
  import { SvelteSet } from "svelte/reactivity";
  import { InteractibleTaglist, ItemsCard, Meta } from "$lib/composite";
  import { computeCommandScore } from 'bits-ui';
  import { Search, Tags, X,
    ChevronFirst,
    ChevronLast,
    ChevronLeft,
    ChevronRight
  } from "@lucide/svelte/icons";

  let {
    ref = $bindable(null),
    class: className,
    data,
    ...restProps
  } = $props();

  // ===========================
  // DATA DEFINITIONS
  // ===========================
  let searchTags = $state(new SvelteSet(
    appStatePage.url.searchParams.getAll("tags")
  ));
  let searchValue = $state(appStatePage.url.searchParams.get("name") ?? "");
  let commandTagsOpen = $state(false);
  let commandInputValue = $state("");
  let isOnProgress = $state(false);
  let { products: productsData, catalogue } = $state(data);
  let { hyper } = $derived(productsData);
  let refWindow = $state(null);

  // ===========================
  // FUNCTIONS
  // ===========================
  function toggleSearchDialog() {
    commandTagsOpen = !commandTagsOpen;
  }

  function handleDocumentKeydown(e) {
    if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      commandTagsOpen = !commandTagsOpen;
    } else return;
  }

  function handleCommandItemClick(e) {
    let {id} = e.target.dataset;
    searchTags.add(id);
    commandInputValue = ""
    getProducts({search: searchValue, tags: searchTags})
  }

  function handleTagBadgeClick(e) {
    let {value} = e.target.dataset;
    searchTags.delete(value);
    getProducts({search: searchValue, tags: searchTags})
  }

  function handleInputXClick() {
    searchValue = "";
    getProducts({search: searchValue, tags: searchTags})
  }

  function handleInputTagsClick() {
    toggleSearchDialog();
    // getProducts({search: searchValue, tags: searchTags})
  }

  function handleTagBadgeClearAll() {
    searchTags.clear();
    getProducts({search: searchValue, tags: searchTags})
  }

  function constructURL({search, cursor, page, tags} = {}) {
    let apiProductURL = new URL("/api/products", appStatePage.url);
    let productSearchParams = new URLSearchParams();

    // Construct URLSearchParams
    if (search) productSearchParams.set("name", search);
    if (cursor) productSearchParams.set("cursor", cursor);
    if (page) productSearchParams.set("page", page);

    tags.forEach(tag => {
      productSearchParams.append("tags", tag);
    });

    apiProductURL.search = productSearchParams;
    return apiProductURL;
  }

  async function getProducts(params) {
    if (isOnProgress) return;
    isOnProgress = true;
    try {
      let apiProductURL = constructURL(params);
      replaceState(apiProductURL.search || "?", {});
      productsData = await fetchJSON(fetch, apiProductURL);
    } catch (e) {
      console.error(e.message);
    }
    isOnProgress = false;
  }

  function handleSubmitForm(e) {
    getProducts({search: searchValue, tags: searchTags});
  }

  function handlePageButtonClick(page) {
    refWindow.scrollTo({top: 0, left: 0, behavior: "smooth"});
    getProducts({
      search: searchValue,
      tags: searchTags,
      page: page
    })
  }

</script>

<!-- Snippets -->
<!-- SNIPPET FOR TAGLIST -->
{#snippet taglist({class: tagClass} = {class: ""})}
  {#if [...searchTags].length > 0}
    <InteractibleTaglist
      tags={searchTags}
      onclick={handleTagBadgeClick}
      class={cn(tagClass)}
      clearAll={handleTagBadgeClearAll}
    />
  {/if}
{/snippet}

<!-- Metadata -->
<Meta metadata={data.meta}></Meta>
<!-- SVELTE DOCUMENT FOR HANDLING SHORTCUT KEYDOWN -->
<svelte:document onkeydown={handleDocumentKeydown}/>
<svelte:window bind:this={refWindow}/>

<!-- Main Component -->
<div
  class={cn(
    "w-full mx-auto py-8",
  )}
>
  <!-- SEARCH PRODUCT INPUT FORM -->
  <div
    class={cn(
      "w-full max-w-md mx-auto",
      "space-y-4 px-4",
    )}
  >
    <form onsubmit={handleSubmitForm}>
      <InputGroup.Root>
        <InputGroup.Input
          placeholder="Search products..."
          bind:value={searchValue}
          autocomplete="off"
          class="text-xs"
        />
        {#if searchValue}
          <InputGroup.Addon align="inline-end">
            <InputGroup.Button
              class="rounded-full"
              onclick={handleInputXClick}
              size="icon-xs"
            >
              <X/>
            </InputGroup.Button>
          </InputGroup.Addon>
        {/if}
        <InputGroup.Addon align="inline-end">
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <InputGroup.Button
                  class="rounded-full"
                  onclick={handleInputTagsClick}
                  size="icon-xs"
                >
                  <Tags/>
                </InputGroup.Button>
              </Tooltip.Trigger>
              <Tooltip.Content side="bottom">
                <div class="flex items-center gap-2">
                  <span>Manage Tags</span>
                  <Kbd.Group>
                    <Kbd.Root>Ctrl</Kbd.Root>
                    <Kbd.Root>K</Kbd.Root>
                  </Kbd.Group>
                </div>
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </InputGroup.Addon>
      </InputGroup.Root>
    </form>

    <!-- SEARCH PRODUCT TAGS -->
    {@render taglist()}
  </div>

  <!-- ITEMS RENDER -->
  {#if isOnProgress}
    <div class="mx-auto my-8 w-full min-h-screen">
      <div class={cn(
        "mx-auto max-w-320 h-full",
        "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 p-2"
      )}>
        {#each {length: 24} as _}
          <div class={cn(
            "rounded-md border-1",
            "space-y-2 pb-2"
          )}>
            <Skeleton class="rounded-none rounded-t-md w-full h-30"/>
            <div class="px-2">
              <Skeleton class="w-full h-4"/>
            </div>
            <div class="px-2">
              <Skeleton class="w-[80%] h-4"/>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {:else}
    <div
      class={cn(
        "px-2 py-2 mt-8"
      )}
    >
      {#if productsData.data.length > 0}
        <div
          class={cn(
            "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2",
            "max-w-320 mx-auto",
          )}
        >
          {#each productsData.data as product}
            <a href={product.id} class="w-full h-full">
              <ItemsCard data={product} class={"md:hover:scale-101 transition w-full h-full"}/>
            </a>
          {/each}
        </div>
      {:else}
      <div
        class={cn(
          "max-w-320 mx-auto",
          "text-center my-20"
        )}
      >
        <h1
          class={cn(
            "text-3xl md:text-5xl tracking-tighter",
            "font-black"
          )}
        >
          No Result Found
        </h1>
        <p
          class={cn(
            "text-xs md:text-sm",
            "dark:text-slate-300 text-slate-700",
            "mt-4"
          )}
        >
          We couldn't find what you searched for.<br/>
          Try searching again.
        </p>
      </div>
      {/if}
    </div>
  {/if}

  <!-- PAGE BUTTON RENDER -->
  <!-- "sticky bottom-0 md:bottom-4", -->
  {#if productsData.data.length > 0}
    <div class="flex flex-col items-center gap-2 my-8">
      <ButtonGroup>
        <Button
          onclick={() => handlePageButtonClick(1)}
          class={cn(
            "dark:text-white dark:bg-slate-800 hover:dark:bg-slate-700",
            "text-black bg-slate-200 hover:bg-slate-300",
          )}
          size="sm"
        >
          <ChevronFirst/>
        </Button>

        {#each Pagination.constructPages(hyper) as page}
          <Button
            onclick={() => handlePageButtonClick(page)}
            size="sm"
            class={cn(
              "dark:text-white text-black",
              hyper.currentPage === page
                ? "bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 hover:dark:bg-slate-600"
                : "dark:bg-slate-800 hover:dark:bg-slate-700 bg-slate-200 hover:bg-slate-300",
              "shadow-none"
            )}
          >
            <span>{page}</span>
          </Button>
        {/each}
        <Button
          onclick={() => handlePageButtonClick(Pagination.getLastPage(hyper))}
          size="sm"
          class={cn(
            "dark:text-white dark:bg-slate-800 hover:dark:bg-slate-700",
            "text-black bg-slate-200 hover:bg-slate-300",
            "shadow-none"
          )}
        >
          <ChevronLast/>
        </Button>
      </ButtonGroup>

      <span class="text-[10px] md:text-xs dark:text-slate-400 text-slate-600">
        Page {hyper.currentPage} of {hyper.totalPages}
      </span>
    </div>
  {/if}
</div>

<!-- COMMAND DIALOG FOR SEARCHING -->
<Command.Dialog
  bind:open={commandTagsOpen}
>
  <Command.Input
    placeholder="Type to search a product tag or category..."
    bind:value={commandInputValue}
  />

  {@render taglist({class: "px-4 md:px-8 my-4"})}

  <Command.List>
    <Command.Empty>No Result Found</Command.Empty>
    <Command.Group heading="TAGS">
      {#each data.suggestions.tags as item}
        <Command.Item class="cursor-pointer"
          onclick={handleCommandItemClick}
          data-id={item}
        >
          {stringify(item)}
        </Command.Item>
      {/each}
    </Command.Group>
  </Command.List>
</Command.Dialog>
