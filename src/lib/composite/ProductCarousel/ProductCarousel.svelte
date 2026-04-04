<script>
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Next from "./Next.svelte";
	import Previous from "./Previous.svelte";
  import { cn } from "$lib/utils";
  import { typographyVariants } from "$lib";

  let {
    ref = $bindable(null),
    class: className,
    children,
    images,
    ...restProps
  } = $props();

  let mainSliderAPI = $state();
	let secondarySliderAPI = $state();
  let current = $state(0);

  $effect(() => {
		if (mainSliderAPI) {
			current = mainSliderAPI.selectedScrollSnap()
			mainSliderAPI.on('select', () => {
				secondarySliderAPI?.scrollTo(
					mainSliderAPI.selectedScrollSnap(),
				)
				current = mainSliderAPI.selectedScrollSnap()
			})
		}
	})

	$effect(() => {
		if (mainSliderAPI) {
			mainSliderAPI.scrollTo(current)
		}
	})
</script>

<div
  bind:this={ref}
  class={cn(className)}
  {...restProps}
>
  <!-- Construct elements here -->
  <div class="flex w-full flex-col items-center">
	<Carousel.Root
		setApi={(emblaApi) => (mainSliderAPI = emblaApi)}
		class="w-full md:max-w-xs p-1">
		<Carousel.Content>
			{#each images as imageURL, i}
				<Carousel.Item class="pl-0">
					<div>
						<img src={imageURL} alt=""/>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<!-- Carousel Button - Previous -->
    <Previous
      class={cn(
        "absolute",
        "left-0",
        "max-md:opacity-20",
        current === 0 ? "hidden" : ""
      )}
      style="
        --control-pos: -50%;
        --grad-pos: 0%;
      "
    />

    <!-- Carousel Button - Next -->
    <Next
      class={cn(
        "absolute",
        "right-0",
        "max-md:opacity-20",
        current >= images.length - 1 ? "hidden" : ""
      )}
      style="
        --control-pos: 150%
      "
    />
	</Carousel.Root>
	<Carousel.Root
		setApi={(emblaApi) => (secondarySliderAPI = emblaApi)}
		opts={{
			containScroll: 'keepSnaps',
			dragFree: true,
		}}
		class="w-full max-w-xl">
		<Carousel.Content>
			{#each images as imageURL, i}
				<Carousel.Item
					class="basis-1/5 cursor-pointer pl-0"
					onclick={() => {
						current = i
					}}>
					<div class="p-1">
					  <img src={imageURL} alt=""/>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>
  </div>
</div>
