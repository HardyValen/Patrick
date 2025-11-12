<script>
  import { cn } from "$lib/utils.js";
  import { typographyVariants, fetchJSON, Pagination, resolve, asset } from "$lib";
  import {
    InteractibleTaglist,
    Meta,
    Taglist,
    ClientArticles
  } from "$lib/composite";
  import { page as appStatePage } from "$app/state";
  import { Button } from "$lib/components/ui/button";
  import ButtonGroup from "$lib/components/ui/button-group/button-group.svelte";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import * as Command from "$lib/components/ui/command";
  import * as Kbd from "$lib/components/ui/kbd";
  import * as InputGroup from "$lib/components/ui/input-group";
  import { Skeleton } from "$lib/components/ui/skeleton";
  import { replaceState } from "$app/navigation";
  import { SvelteSet } from "svelte/reactivity";
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

  let {
    ref = $bindable(null),
    data
  } = $props();

  // =================================================================================
  // DATA DEFINITIONS
  // =================================================================================
  let {featured, articles, suggestions, catalogue, meta} = $state(data);
  let {hyper, data: articleData} = $derived(articles);
  let isOnProgress = $state(false);
  let commandDialogOpen = $state(false);
  let refWindow = $state(null);
  let searchValue = $state(appStatePage.url.searchParams.get("name") ?? "");
  let searchTags = $state(new SvelteSet(
    appStatePage.url.searchParams.getAll("tags")
  ));
  let activeCatalogue = $state(appStatePage.url.searchParams.get("tags"));
  let activeCatalogueTitle = $derived.by(() => {
    let idx = catalogue.findIndex(v => v.id === activeCatalogue)
      if (idx >= 0) {
        return catalogue[idx].title;
      } else {
        return "Tags Catalogue"
      }
    });
  let catalogueOpen = $state(false);

  // =================================================================================
  // FUNCTIONS
  // =================================================================================
  function constructURL({search, cursor, page, tags} = {}) {
    // let apiURL = new URL("/api/articles", appStatePage.url);
    let apiURL = new URL(resolve("/api/articles"), appStatePage.url);
    let searchParams = new URLSearchParams();

    if (search) searchParams.set("name", search);
    if (cursor) searchParams.set("cursor", cursor);
    if (page) searchParams.set("page", page);

    tags.forEach(tag => {
      if (tag) {
        searchParams.append("tags", tag);
      }
    });

    apiURL.search = searchParams;
    return apiURL;
  }

  async function getArticles(params) {
    if (isOnProgress) return;
    isOnProgress = true;
    try {
      let apiURL = constructURL(params);
      replaceState(apiURL.search || "?", {});
      articles = await fetchJSON(fetch, apiURL);
    } catch (e) {
      console.error(e.message)
    }
    isOnProgress = false;
  }

  function handlePageButtonClick(page) {
    refWindow.scrollTo({top: 0, left: 0, behavior: "smooth"});
    getArticles({
      search: searchValue,
      page: page,
      tags: searchTags
    })
  }

  function handleSubmitForm(e) {
    getArticles({search: searchValue, tags: searchTags});
  }

  function toggleCommandDialog() {
    commandDialogOpen = !commandDialogOpen;
  }

  function handleDocumentKeydown(e) {
    if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      toggleCommandDialog();
    } else return;
  }

  function handleCommandItemClick(e) {
    let {id} = e.target.dataset;
    searchTags.clear();
    searchTags.add(id);
    activeCatalogue = id;
    getArticles({search: searchValue, tags: searchTags});
    toggleCommandDialog();
  }

  function handleCatalogueItemClick(e) {
    let {id} = e.target.dataset;
    searchTags.clear();
    searchTags.add(id);
    activeCatalogue = id;
    getArticles({search: searchValue, tags: searchTags})
  }
</script>

<Meta metadata={meta}></Meta>
<svelte:document onkeydown={handleDocumentKeydown}/>
<svelte:window bind:this={refWindow}/>

<!-- Main Component -->
<div
  class={cn(
    "w-full mx-auto py-8",
  )}
>

  <ClientArticles
    data={featured}
  />

  <!-- SEARCH INPUT FORM -->
  <div
    class={cn(
      "w-full max-w-md mx-auto",
      "space-y-2 px-4 mb-8",
    )}
  >
    <form onsubmit={handleSubmitForm}>
      <InputGroup.Root>
        <InputGroup.Input
          placeholder="Search articles..."
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
                  onclick={toggleCommandDialog}
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
  </div>

  <!-- TODO: ARTICLES -->
  <div class="mx-auto max-w-360 px-2">
    <div class="grid grid-cols-5 gap-2 items-start">

      <!-- CATALOGUE -->
      <div
        class={cn(
          "rounded-md dark:bg-slate-800 bg-slate-100 border-1",
          "max-md:hidden max-h-240 overflow-y-auto"
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
          Groups ({catalogue.length})
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

      <div
        class={cn(
          "mx-auto w-full max-w-320 h-full",
          "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2",
          "col-span-5 md:col-span-4"
        )}
      >
        {#if isOnProgress}
          {#each {length: 24} as _}
            <div class={cn(
              "rounded-md border-1",
              "space-y-2 pb-2"
            )}>
              <Skeleton class="rounded-none rounded-t-md w-full h-50"/>
              <div class="px-2">
                <Skeleton class="w-full h-12"/>
              </div>
              <div class="px-2">
                <Skeleton class="w-full h-4"/>
              </div>
              <div class="px-2">
                <Skeleton class="w-full h-4"/>
              </div>
              <div class="px-2">
                <Skeleton class="w-[80%] h-4"/>
              </div>
            </div>
          {/each}
        {:else}
          {#if articleData.length > 0}
            {#each articleData as article}
              <a href={resolve(`/articles/${article.id}`)} class="w-full h-full">
                <div
                  class={cn(
                    "rounded-md dark:bg-slate-800 bg-slate-100 border-1",
                    "md:hover:scale-101 transition w-full h-full"
                  )}
                >
                  <img
                    src={asset(article.images.square)}
                    alt={article.name}
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
                      {article.name.toUpperCase()}
                    </p>
                    <!-- taglist -->
                    <Taglist
                      class="my-2"
                      tags={article.tags.map(tag => {return {title: tag, href:`/articles?tags=${tag}`}})}
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
                      {@html article.description}
                    </p>
                  </div>
                </div>
              </a>
            {/each}
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

  </div>

  <!-- PAGE BUTTON RENDER -->
  {#if articleData.length > 0}
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
  bind:open={commandDialogOpen}
>
  <Command.Input
    placeholder="Type to search article group or subgroup..."
  />

  <Command.List>
    <Command.Empty>No Result Found</Command.Empty>
    {#each Object.entries(suggestions) as [key, items]}
      <Command.Group heading={key.toUpperCase()}>
        {#each items as item}
          <Command.Item class="cursor-pointer"
            onclick={handleCommandItemClick}
            data-id={item}
          >
            {item}
          </Command.Item>
        {/each}
      </Command.Group>
    {/each}
  </Command.List>
</Command.Dialog>
