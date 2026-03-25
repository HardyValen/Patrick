<script>
  import { cn } from "$lib/utils";
  import { typographyVariants } from "$lib";
  import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  } = $props();

  let mainSliderAPI = $state()
	let secondarySliderAPI = $state()
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
  Product Carousel
  <div class="flex w-full flex-col items-center">
	<Carousel.Root
		setApi={(emblaApi) => (mainSliderAPI = emblaApi)}
		class="w-full max-w-xs">
		<Carousel.Content>
			{#each Array(10), i}
				<Carousel.Item>
					<div class="p-1">
						<Card.Root>
							<Card.Content
								class="flex aspect-square items-center justify-center p-6">
								<span class="text-4xl font-semibold">{i + 1}</span>
							</Card.Content>
						</Card.Root>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
	<Carousel.Root
		setApi={(emblaApi) => (secondarySliderAPI = emblaApi)}
		opts={{
			containScroll: 'keepSnaps',
			dragFree: true,
		}}
		class="w-full max-w-xl">
		<Carousel.Content>
			{#each Array(10), i}
				<Carousel.Item
					class="basis-1/5 cursor-pointer"
					onclick={() => {
						current = i
					}}>
					<div class="p-1">
						<Card.Root class={cn(i === current && 'border-2')}>
							<Card.Content
								class="flex aspect-square items-center justify-center p-6">
								<span class="text-4xl font-semibold">{i + 10}</span>
							</Card.Content>
						</Card.Root>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>
  </div>
</div>
