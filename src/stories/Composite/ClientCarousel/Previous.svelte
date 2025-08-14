<script>
  import ChevronLeftIcon from "@lucide/svelte/icons/chevron-left";
	import { getEmblaContext } from "$lib/components/ui/carousel/context.js";
	import { cn } from "$lib/utils.js";
	import { Button } from "$lib/components/ui/button/index.js";

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
		"h-full rounded-none min-w-10 md:min-w-30 xl:min-w-50 transition-all",
		"flex justify-center items-center",
		"bg-gradient-to-l to-primary-immutable-500/50",
		"md:cursor-pointer md:hover:bg-gradient-to-l md:hover:to-primary-immutable-300/70",
		emblaCtx.orientation === "horizontal"
			? "-left-12 top-1/2 -translate-y-1/2"
			: "-top-12 left-1/2 -translate-x-1/2 rotate-90",
		className
	)}
	onclick={emblaCtx.scrollPrev}
	onkeydown={emblaCtx.handleKeyDown}
	{...restProps}
>
	<ChevronLeftIcon class="size-8 text-white"/>
	<span class="sr-only">Next slide</span>
</div>
