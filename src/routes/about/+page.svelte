<script>
  import { cn } from "$lib/utils.js";
  import { typographyVariants } from "$lib";
  import { Meta, DebugWindow } from "$composite";
  import { setContext, getContext } from "svelte";
  import {
    debugConfig as dbg,
  } from "$config";

  let {
    data
  } = $props()

  const hero = $derived(data.content.hero);
  const section1 = $derived(data.content.section1);
  const section2 = $derived(data.content.section2);
  const section3 = $derived(data.content.section3);

  setContext("debugData", [
    ...getContext("debugData"),
    data.content.section3
  ])

</script>

<Meta metadata={data.meta}/>

<!-- Make the first word bold. -->
{#snippet heroTitle(word)}
  <span>
    <strong>{word.toUpperCase().split(' ')[0]}</strong>
    {word.toUpperCase().replace(/^(\S+)\s/, "")}
  </span>
{/snippet}

<div>
  <!-- Section 1: Hero -->
  <div
    class={cn(
      "w-full h-full _hero"
    )}
  >
    <div
      class={cn(
        "z-0 w-full h-full min-h-40 max-h-80",
        "place-self-stretch"
      )}
    >
      <img
        src={hero.img}
        alt={hero.title}
        class={cn(
          "w-full h-full object-center object-cover"
        )}
      />
    </div>
    <div
      class={cn(
        "z-1 text-slate-100",
        "text-center text-2xl tracking-widest",
        "flex items-center justify-center"
      )}
    >
      {@render heroTitle(hero.title)}
    </div>
  </div>

  <!-- Section 2: Founding -->
  <div
    class={cn(
      "max-md:px-8 my-16 mx-auto max-w-160"
    )}
  >
    <h1
      class={cn(
        "text-3xl md:text-4xl tracking-tight font-bold",
        "mb-8"
      )}
    >
      {section1.title}
    </h1>
    {#each section1.content as content}
      <p class="my-4">
        {content}
      </p>
    {/each}
  </div>

  <div class="stacked-image_container">
    <div class="stacked-image_top-left"></div>
    <div class="stacked-image_top-right"></div>
    <div class="stacked-image_bottom-left bg-slate-300 dark:bg-slate-700"></div>
    <div class="stacked-image_bottom-right bg-slate-300 dark:bg-slate-700"></div>
    <div class="stacked-image">
      <img
        src={section1.img}
        alt={section1.title}
        class={cn(
          "w-full min-h-40 max-h-80",
          "object-cover object-center"
        )}
      />
    </div>
  </div>

  <!-- Section 3: About NiSi -->
  <div
    class={cn(
      "bg-slate-300 dark:bg-slate-700",
    )}
  >
    <div
      class={cn(
        "px-8 py-16 mx-auto max-w-200",
        "grid grid-cols-1 md:grid-cols-5 max-md:gap-8"
      )}
    >
      <div
        class={cn(
          "md:col-span-2"
        )}
      >
        <p class="text-3xl md:text-4xl font-light tracking-wider">
          {section2.title}
        </p>
      </div>
      <div
        class={cn(
          "md:col-span-3"
        )}
      >
        <div class="flex flex-col gap-4">
          {#each section2.content as content}
            <p>
              {content}
            </p>
          {/each}
        </div>
      </div>

    </div>
  </div>

  <!-- Section 4: Other NiSi Locations -->
  <div
    class={cn(
      "bg-slate-800 text-white py-16",
    )}
  >
    <div
      class={cn(
        "px-8 mb-4 mx-auto max-w-200",
        "text-center"
      )}
    >
      <h1 class="text-3xl md:text-4xl tracking-wide">{section3.title}</h1>
      <p class="text-sm tracking-tight font-light">{section3.subtitle}</p>
    </div>

    <img
      src={section3.img}
      alt={section3.title}
      class={cn(
        "w-full py-4 mx-auto md:max-w-200"
      )}
    />

    <div
      class={cn(
        "px-8 mb-4 mx-auto max-w-200",
        "flex flex-col gap-8 md:gap-4"
      )}
    >
      {#each section3.items as item, idx}
        <div class="grid md:grid-cols-4 gap-4 md:gap-8 items-center">
          <p class="text-xl font-bold">{item.title}</p>
          <div
            class={cn(
              "col-span-3",
              "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
            )}
          >
            {#each item.links as link}
              <a class="text-sm tracking-widest hover:underline" href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a>
            {/each}
          </div>
        </div>
        {#if (idx + 1) < section3.items.length}
          <hr>
        {/if}
      {/each}
    </div>
  </div>

</div>

{#if dbg.enabled}
  <DebugWindow
    data={getContext("debugData")}
  />
{/if}

<style>
  ._hero {
    display: grid;

    > * {
      grid-area: 1 / 1;
    }
  }

  /* illusion for image stacked between two divs*/
  @media (width >= 48rem) {
    .stacked-image_container {
      display: grid;
      grid-template-columns: 1fr 768px 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "top-left image top-right"
        "bottom-left image bottom-right"
      ;
    }

    .stacked-image_top-left {
      grid-area: top-left;
    }

    .stacked-image_top-right {
      grid-area: top-right;
    }

    .stacked-image_bottom-left {
      grid-area: bottom-left;
    }

    .stacked-image_bottom-right {
      grid-area: bottom-right;
    }

    .stacked-image {
      grid-area: image;
    }
  }
</style>
