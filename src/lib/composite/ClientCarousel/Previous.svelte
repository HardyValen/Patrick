<script>
  import ChevronLeftIcon from "@lucide/svelte/icons/chevron-left";
	import { getEmblaContext } from "$lib/components/ui/carousel/context.js";
	import { cn } from "$lib/utils.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import "./CarouselControls.css";

	let {
		class: className,
		...restProps
	} = $props();

	const emblaCtx = getEmblaContext("<Previous/>");
</script>

<div
  data-slot="carousel-previous"
	aria-disabled={!emblaCtx.canScrollPrev}
	class={cn(
		"h-full rounded-none",
		"min-w-(--px-lpage) md:min-w-(--px-lpage-md) xl:min-w-(--px-lpage-xl)",
		"flex justify-center items-center",
		"md:cursor-pointer",
		emblaCtx.orientation === "horizontal"
			? "-left-12 top-1/2 -translate-y-1/2"
			: "-top-12 left-1/2 -translate-x-1/2 rotate-90",
		"client-carousel-control",
		className
	)}
	onclick={emblaCtx.scrollPrev}
	onkeydown={emblaCtx.handleKeyDown}
	{...restProps}
>
	<ChevronLeftIcon class="size-8 text-white"/>
	<span class="sr-only">Next slide</span>
</div>
