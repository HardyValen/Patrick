<script>
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import Next from "./Next.svelte";
  import Previous from "./Previous.svelte";
  import { alignmentVariants, typographyVariants } from "$lib";
  import { cn, constructURLWithConfig } from "$lib/utils";
  import { Button, buttonVariants } from "$lib/components/ui/button";
  import { AnimateIntersect } from "$lib/composite";
  import { page } from "$app/state";

  /** The "data" prop is optional, but follows this interface
   * carouselData type definition
   * @typedef {Object} carouselData
   * @property {string} title - The carousel big title text
   * @property {string} img - Link to the carousel image.
   * @property {string} video - Link to the video.
   * @property {string} [subtitle] - The carousel big title's little cousin
   * @property {"left" | "right" | "center"} [orientationX] - Content Align X
   * @property {"top" | "center" | "bottom"} [orientationY] - Content Align Y
   * @property {CarouselButton} [button] - Optional button for the carousel
   *
   * CarouselButton type definition
   * @typedef {Object} CarouselButton
   * @property {string} title - carousel button text content
   * @property {string} href - when clicked, send the client to the designated Link URL
   */

  let {
    ref = $bindable(null),
		class: className,
		data: carouselData = [],
		...restProps
  } = $props();

  let { url } = $derived(page)

  function transpose(expr) {
    switch (expr) {
      case "top":
        return "left";
      case "bottom":
        return "right";
      case "center":
        return "center";
      default:
        return "center";
    }
  }

  </script>

<Carousel.Root
  bind:this={ref}
  class={cn(className)}
  {...restProps}
>

  <Carousel.Content>

    {#each carouselData as data, idx}

      <Carousel.Item
        class={cn(
          `h-[85vh] md:h-[90vh] min-h-120 max-h-240 w-full pl-0`
        )}
      >

        {#if "video" in data}
          <video
            autoplay loop muted
            class={cn(
              "object-cover w-full h-full z-0"
            )}
          >
            <source src={constructURLWithConfig(url, data.video.link)} type={data.video.type}/>
          </video>
        {:else if "img" in data}
          <img
            src={constructURLWithConfig(url, data.img)}
            alt={data.title}
            class={cn(
              "w-full h-full object-cover z-0"
            )}
          />
        {/if}

        <div
          class={cn(
            "relative top-[-100%] left-0",
            "w-full h-full z-1",
            "bg-black/60",
            'px-(--px-lpage) md:px-(--px-lpage-md) xl:px-(--px-lpage-xl)',
            "flex",
            alignmentVariants({"justify-content": data.orientationX}),
            alignmentVariants({"align-items": transpose(data.orientationY)})
          )}
        >
          <AnimateIntersect
            variant="right"
          >
            <div
              class={cn(
                "text-white md:max-w-120",
                "flex flex-col gap-5 pt-8 mb-16 md:mb-24",
                alignmentVariants({"align-items": data.orientationX}),
              )}
            >
              <!-- Carousel Content - Title -->
              {#if data.title}
                <h1 class={ cn(
                  typographyVariants({variant:"carousel_h1", typeface:"serif"}),
                  alignmentVariants({"text-align": data.orientationX}),
                ) }>
                  {data.title}
                </h1>
              {/if}

              <!-- Carousel Content - Subtitle -->
              {#if data.subtitle}
                <span class={ cn(
                  alignmentVariants({"text-align": data.orientationX}),
                  "line-clamp-5"
                ) }>
                  {data.subtitle}
                </span>
              {/if}

              <!-- Carousel Content - Button -->
              {#if data.button}
                <Button
                  href={constructURLWithConfig(url, data.button.href)}
                  class={cn(
                    "bg-slate-200 text-slate-800 hover:bg-slate-200/80"
                  )}
                >
                  {data.button.title}
                </Button>
              {/if}

            </div>
          </AnimateIntersect>

        </div>
      </Carousel.Item>
    {/each}
  </Carousel.Content>

  <!-- Carousel Button - Previous -->
  <Previous
    class={cn([
      "absolute",
      "left-0",
      "max-md:opacity-20"
    ].join(" "))}
    style="
      --control-pos: -50%;
      --grad-pos: 0%;
    "
  />

  <!-- Carousel Button - Next -->
  <Next
    class={cn([
      "absolute",
      "right-0",
      "max-md:opacity-20"
    ].join(" "))}
    style="
      --control-pos: 150%
    "
  />

</Carousel.Root>
