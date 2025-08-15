<script>
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import Next from "./Next.svelte";
  import Previous from "./Previous.svelte";
  import { cn } from "$lib/utils.js";
  import { typographyVariants } from "$lib/typographyVariants";
  import { Button, buttonVariants } from "$lib/components/ui/button";
  import { alignmentVariants } from "$lib/alignmentVariants";

  /** The "data" prop is optional, but follows this interface
   * CarouselData type definition
   * @typedef {Object} CarouselData
   * @property {string} title - The carousel big title text
   * @property {string} img - Link to the carousel image.
   * @property {string} [subtitle] - The carousel big title's little cousin
   * @property {"left" | "right" | "center"} [orientation] - Content Align
   * @property {CarouselButton} [button] - Optional button for the carousel
   *
   * CarouselButton type definition
   * @typedef {Object} CarouselButton
   * @property {string} title - carousel button text content
   * @property {string} href - when clicked, send the client to the designated Link URL
   */

  let {
		data: carouselData = [],
		class: className,
		...restProps
  } = $props();

  </script>

<!--
  To-do:
    * Image on carousel (ok)
    * Next / Previous Button is horrendous. fix it like you used to
    * Layouting the carousel content! (alignment)
    * Make button clickable and give it a variant, perhaps?
    *
-->

<Carousel.Root
  class={cn(
    className
  )}
  {...restProps}
>

  <Carousel.Content>

    {#each carouselData as data}

      <Carousel.Item
        class={cn(
          `h-[90vh] md:h-[80vh]`,
          `min-h-[600px]`,
          `bg-center bg-no-repeat bg-cover`,
          'px-(--px-lpage) md:px-(--px-lpage-md) xl:px-(--px-lpage-xl)',
          'py-20',
          'flex',
          alignmentVariants({"justify-content": data.orientation})
        )}
        style={`background-image: linear-gradient(90deg, oklch(0.208 0.042 265.755 / 0.7), oklch(0.208 0.042 265.755 / 0.7)), url(${data.img})`}
      >

        <!-- Carousel Content - Inner Background -->
        <div class={cn(
          'h-full',
          'text-white',
          'flex',
          'flex-col',
          'justify-center',
          "md:max-w-150",
          alignmentVariants({"align-items": data.orientation}),
          'gap-5'
        )}>

          <!-- Carousel Content - Title -->
          {#if data.title}
            <h1 class={ cn(
              typographyVariants({variant:"h1", typeface:"serif"}),
              alignmentVariants({"text-align": data.orientation})
            ) }>
              {data.title}
            </h1>
          {/if}

          <!-- Carousel Content - Subtitle -->
          {#if data.subtitle}
            <span class={ cn(
              alignmentVariants({"text-align": data.orientation})
            ) }>
              {data.subtitle}
            </span>
          {/if}

          <!-- Carousel Content - Button -->
          {#if data.button}
            <Button
              href={data.button.href}
              variant="secondary"
            >
              {data.button.title}
            </Button>
          {/if}
        </div>
      </Carousel.Item>
    {/each}
  </Carousel.Content>

  <!-- Carousel Button - Previous -->
  <Previous class={cn([
    "absolute",
    "left-0",
    "max-md:opacity-20"
  ].join(" "))}/>

  <!-- Carousel Button - Next -->
  <Next class={cn([
    "absolute",
    "right-0",
    "max-md:opacity-20"
  ].join(" "))}/>

</Carousel.Root>
