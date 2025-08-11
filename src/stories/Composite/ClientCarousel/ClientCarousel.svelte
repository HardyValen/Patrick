<script>
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import Next from "./Next.svelte";
  import Previous from "./Previous.svelte";
  import { cn } from "$lib/utils.js";

  /** The "data" prop is optional, but follows this interface
   * CarouselData type definition
   * @typedef {Object} CarouselData
   * @property {string} title - The carousel big title text
   * @property {string} img - Link to the carousel image.
   * @property {string} [subtitle] - The carousel big title's little cousin
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
  } = $props()

</script>

<!--
  To-do:
    * Image on carousel
    * Next / Previous Button is horrendous. fix it like you used to
    * Layouting the carousel content!
    * Make button clickable and give it a variant, perhaps?
-->

<Carousel.Root
  class={cn(
    "h-100",
    className
  )}
  {...restProps}
>
  <Carousel.Content>
    {#each carouselData as data}
      <Carousel.Item>
        {JSON.stringify(data)}
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <Previous class={cn([
    "absolute",
    "left-10"
  ].join(" "))}/>
  <Next class={cn([
    "absolute",
    "right-10"
  ].join(" "))}/>
</Carousel.Root>
