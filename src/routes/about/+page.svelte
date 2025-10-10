<script>
  import { cn } from "$lib/utils.js";
  import { typographyVariants } from "$lib";
  import { Meta } from "$composite";
  import { setContext, getContext, onMount, onDestroy } from "svelte";
  import { AnimateIntersect } from "$composite";

  let {
    data
  } = $props()

  const hero = $derived(data.content.hero);
  const section1 = $derived(data.content.section1);
  const section2 = $derived(data.content.section2);
  const section3 = $derived(data.content.section3);

</script>

<Meta metadata={data.meta}/>

<!-- Make the first word bold. -->
{#snippet heroTitle(word)}
  <span>
    <strong>{word.toUpperCase().split(' ')[0]}</strong>
    {word.toUpperCase().replace(/^(\S+)\s/, "")}
  </span>
{/snippet}

<div class="overflow-x-hidden">
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
    <div class="stacked-image_top"></div>
    <div class="stacked-image_bottom bg-slate-300 dark:bg-slate-700"></div>
    <div class="stacked-image">
      <AnimateIntersect
        noExit
        duration=400
        variant="scale"
      >
      <img
        src={section1.img}
        alt={section1.title}
        class={cn(
          "w-full min-h-40 max-h-80",
          "object-cover object-center"
        )}
      />
      </AnimateIntersect>
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
        <AnimateIntersect
          noExit
          duration=400
        >
          <p class="text-3xl md:text-4xl font-light tracking-wider">
            {section2.title}
          </p>
        </AnimateIntersect>
      </div>
      <div
        class={cn(
          "md:col-span-3"
        )}
      >
        <div class="flex flex-col gap-4">
          {#each section2.content as content}
            <AnimateIntersect
              noExit
              duration=400
              variant="right"
            >
              <p>
                {content}
              </p>
            </AnimateIntersect>
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
        ". image ."
        ". image ."
      ;
    }

    .stacked-image_top {
      grid-area: 1 / 1 / 2 / 4;
      z-index: 0;
    }

    .stacked-image_bottom {
      grid-area: 2 / 1 / 3 / 4;
      z-index: 0;
    }

    .stacked-image {
      grid-area: image;
      z-index: 1;
    }
  }
</style>
