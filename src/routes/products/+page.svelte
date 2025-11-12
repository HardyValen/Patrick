<!-- FOR 28 OCTOBER 2025 -->
<!--
  [Search Products...] [Submit Button] [Filter Icon with Tooltip]
-->

<script>
  import { cn, stringify } from "$lib/utils";
  import { typographyVariants, fetchJSON, Pagination, resolve, asset } from "$lib";
  import * as Command from "$lib/components/ui/command";
  import * as Kbd from "$lib/components/ui/kbd";
  import * as InputGroup from "$lib/components/ui/input-group";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { Button } from "$lib/components/ui/button";
  import ButtonGroup from "$lib/components/ui/button-group/button-group.svelte";
  import { Skeleton } from "$lib/components/ui/skeleton";
  import { page as appStatePage } from "$app/state";
  import { replaceState } from "$app/navigation";
  import { SvelteSet } from "svelte/reactivity";
  import { InteractibleTaglist, Meta, Taglist } from "$lib/composite";
  import { computeCommandScore } from 'bits-ui';
  import {
    Search,
    Tags,
    X,
    ChevronFirst,
    ChevronLast,
    ChevronLeft,
    ChevronRight,
    ChevronsUpDownIcon
  } from "@lucide/svelte/icons";
    import { onMount } from "svelte";

  let {
    ref = $bindable(null),
    data
  } = $props();

  // ===========================
  // DATA DEFINITIONS
  // ===========================
  let searchTags = $state(new SvelteSet([]));
  let searchValue = $state("");
  let commandTagsOpen = $state(false);
  let commandInputValue = $state("");
  let isOnProgress = $state(true);
  let { products: productsData, catalogue } = $state(data);
  let { hyper } = $derived(productsData);
  let refWindow = $state(null);
  let activeCatalogue = $state("");
  let activeCatalogueTitle = $derived.by(() => {
    let idx = catalogue.findIndex(v => v.id === activeCatalogue)
      if (idx >= 0) {
        return catalogue[idx].title;
      } else {
        return "Tags Catalogue"
      }
    });
  let catalogueOpen = $state(false);

  // ===========================
  // ON MOUNT
  // ===========================

  onMount(async () => {
      activeCatalogue = appStatePage.url.searchParams.get("tags");
      searchValue = appStatePage.url.searchParams.get("name") ?? "";
      searchTags = new SvelteSet(appStatePage.url.searchParams.getAll("tags"));

      let apiProductURL = constructURL(({search: searchValue, tags: searchTags}));
      productsData = await fetchJSON(fetch, apiProductURL);
      isOnProgress = false;
    return () => {}
  })

  // ===========================
  // FUNCTIONS
  // ===========================
  function toggleSearchDialog() {
    commandTagsOpen = !commandTagsOpen;
  }

  function handleDocumentKeydown(e) {
    // low-priority todo: make keymap as a config.
    if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      toggleSearchDialog();
    } else return;
  }

  function handleCommandItemClick(e) {
    let {id} = e.target.dataset;
    searchTags.add(id);
    activeCatalogue = id;
    commandInputValue = ""
    getProducts({search: searchValue, tags: searchTags});
  }

  function handleCatalogueItemClick(e) {
    let {id} = e.target.dataset;
    searchTags.clear();
    searchTags.add(id);
    activeCatalogue = id;
    getProducts({search: searchValue, tags: searchTags})
  }

  function handleTagBadgeClick(e) {
    let {value} = e.target.dataset;
    searchTags.delete(value);
    getProducts({search: searchValue, tags: searchTags})
    activeCatalogue = appStatePage.url.searchParams.get("tags");
  }

  function handleInputXClick() {
    searchValue = "";
    getProducts({search: searchValue, tags: searchTags})
  }

  function handleInputTagsIconClick() {
    toggleSearchDialog();
  }

  function handleTagBadgeClearAll() {
    searchTags.clear();
    getProducts({search: searchValue, tags: searchTags})
    activeCatalogue = "";
  }

  function constructURL({search, cursor, page, tags} = {}) {
    // let apiProductURL = new URL("/api/products", appStatePage.url);
    let apiProductURL = new URL(resolve("/api/products"), appStatePage.url);
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

  function handleCatalogueComboboxClick() {
    catalogueOpen = true;
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
      "space-y-2 px-4 mb-8",
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
                  onclick={handleInputTagsIconClick}
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

    <!-- CATALOGUE COMBOBOX FOR MOBILE -->
    <div class="md:hidden">
      <button
        class={cn(
          "w-full text-xs text-left border-1 rounded-md px-3 py-1 h-fit",
          "dark:text-slate-400 text-slate-600",
          "flex justify-between"
        )}
        variant="outline"
        onclick={handleCatalogueComboboxClick}
      >
        <p class="line-clamp-1 overflow-hidden flex-11/12">
          {activeCatalogueTitle}
        </p>
        <ChevronsUpDownIcon size={12}/>
      </button>
    </div>
    <!-- SEARCH PRODUCT TAGS -->
    {@render taglist()}
  </div>

  <div class="mx-auto max-w-360 px-2">
    <div class="grid grid-cols-5 gap-2 items-start">
      <div
        class={cn(
          "rounded-md dark:bg-slate-800 bg-slate-100 border-1",
          "max-md:hidden max-h-360"
        )}
      >
        <!-- Catalogue Header -->
        <div
          class={cn(
            "p-4",
            "text-xs font-serif font-black uppercase tracking-wider",
            "dark:text-slate-400 text-slate-600"
          )}
        >
          Tags Catalogue ({catalogue.length})
        </div>
        <!-- Catalogue Content -->
        <div>
          {#each catalogue as catalogueItem}
            <button
              onclick={handleCatalogueItemClick}
              data-id={catalogueItem.id}
              class={cn(
                "dark:bg-slate-800 bg-slate-100 hover:dark:bg-slate-700 hover:bg-slate-200 hover:font-extrabold transition",
                activeCatalogue === catalogueItem.id ? "dark:bg-slate-700 bg-slate-200 font-extrabold" : "",
                "px-4 py-2",
                "text-sm w-full text-left"
              )}
            >
              {catalogueItem.title}
            </button>
          {/each}
        </div>
      </div>
      <!-- ITEMS RENDER -->
      {#if isOnProgress}
        <div class={cn(
          "mx-auto w-full max-w-320 h-full",
          "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 p-2",
          "col-span-5 md:col-span-4"
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
      {:else}
        {#if productsData.data.length > 0}
          <div
            class={cn(
              "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2",
              "max-w-320 mx-auto",
              "col-span-5 md:col-span-4"
            )}
          >
            {#each productsData.data as product}
              <a href={resolve(`/products/${product.id}`)} class="w-full h-full">
                <!-- <ItemsCard data={product} class={"md:hover:scale-101 transition w-full h-full"}/> -->
                <div
                  class={cn(
                    "rounded-md dark:bg-slate-800 bg-slate-100 border-1",
                    "md:hover:scale-101 transition w-full h-full"
                  )}
                >
                  <img
                    src={asset(product.images.best)}
                    alt={product.name}
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
                      {product.name.toUpperCase()}
                    </p>
                    <!-- taglist -->
                    <Taglist
                      class="my-2"
                      tags={product.tags.map(tag => {return {title: tag, href:`/products?tags=${tag}`}})}
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
                      {@html product.description}
                    </p>
                    <!-- Price Tag -->
                    <!-- <p class={cn(
                      "my-2 text-sm md:text-md",
                      "font-bold"
                    )}>
                      {Intl.NumberFormat("id-ID", {style:"currency", currency:"IDR", minimumFractionDigits:0, maximumFractionDigits:0}).format(581234)}
                    </p> -->
                  </div>
                </div>
              </a>
            {/each}
          </div>
        {:else}
          <div
            class={cn(
              "max-w-320 mx-auto",
              "text-center my-20",
              "col-span-5 md:col-span-4"
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
      {/if}
    </div>
  </div>

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

<!-- COMMAND DIALOG FOR CATALOGUE -->
<Command.Dialog bind:open={catalogueOpen}>
  <Command.List>
    <Command.Group heading={`TAGS CATALOGUE (${catalogue.length})`}>
      {#each catalogue as item}
        <Command.Item
          data-id={item.id}
          onclick={(e) => {
            handleCatalogueItemClick(e);
            catalogueOpen = false;
          }}
        >
          {item.title}
        </Command.Item>
      {/each}
    </Command.Group>
  </Command.List>
</Command.Dialog>
