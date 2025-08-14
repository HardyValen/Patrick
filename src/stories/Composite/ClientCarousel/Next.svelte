<script>
	import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
	import { getEmblaContext } from "$lib/components/ui/carousel/context.js";
	import { cn } from "$lib/utils.js";
	import { Button } from "$lib/components/ui/button/index.js";

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
		"h-full rounded-none min-w-10 md:min-w-30 xl:min-w-50 transition-all",
		"flex justify-center items-center",
		"bg-gradient-to-l from-primary-immutable-500/50",
		"md:cursor-pointer md:hover:bg-gradient-to-l md:hover:from-primary-immutable-300/70",
		emblaCtx.orientation === "horizontal"
			? "-right-12 top-1/2 -translate-y-1/2"
			: "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
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
