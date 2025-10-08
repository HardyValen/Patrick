<script>
	import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
	import { getEmblaContext } from "$lib/components/ui/carousel/context.js";
	import { cn } from "$lib/utils.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import "./CarouselControls.css";

	let {
		class: className,
		...restProps
	} = $props();

	const emblaCtx = getEmblaContext("<Next/>");
</script>

<div
	data-slot="carousel-next"
	aria-disabled={!emblaCtx.canScrollNext}
	class={cn(
		"h-full rounded-none transition-all",
		"min-w-(--px-lpage) md:min-w-(--px-lpage-md) xl:min-w-(--px-lpage-xl)",
		"flex justify-center items-center",
		"md:cursor-pointer",
		emblaCtx.orientation === "horizontal"
			? "-right-12 top-1/2 -translate-y-1/2"
			: "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
		"client-carousel-control",
		className
	)}
	onclick={emblaCtx.scrollNext}
	onkeydown={emblaCtx.handleKeyDown}
	{...restProps}
>
	<ChevronRightIcon class="size-8 text-white"/>
	<span class="sr-only">Next slide</span>
</div>

<!-- <div class={cn(
  emblaCtx.orientation === "horizontal"
		? "-right-12 top-1/2 -translate-y-1/2 h-full"
		: "-bottom-12 left-1/2 -translate-x-1/2 rotate-90 w-full",
	"bg-red-400",
	className
)}>
  <ArrowRightIcon class="size-4" />
	<span class="sr-only">Next slide</span>
</div> -->
