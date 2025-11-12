<script>
	import { page } from '$app/state';
	import { cn } from "$lib/utils";
	import { resolve } from "$lib";
	import { Button } from "$lib/components/ui/button";
	import * as ButtonGroup from "$lib/components/ui/button-group/index.js";
	import ArrowBigLeftDash from "@lucide/svelte/icons/arrow-big-left-dash";
	import House from "@lucide/svelte/icons/house";

	const errorText = {
	  403: "You don't have permission to access this page",
		404: "The page you are looking for might have been removed, had its name changed or is temporarily unavailable.",
		500: "We're experiencing a problem. Please try again later 🙏"
	}

	function goBack() {
    history.back();
	}
</script>

<svelte:head>
  <title>{page.status} | NiSi Optics Indonesia</title>
</svelte:head>

<div
  class={cn(
    "min-h-[80vh] w-full",
    "flex items-center"
  )}
>
  <div
    class={cn(
      "mx-auto max-w-192 w-full px-8",
      "text-center",
      "flex flex-col items-center"
    )}
  >
    <h1 class="text-serif text-7xl sm:text-8xl md:text-9xl font-black text-slate-800 dark:text-slate-300 tracking-wide mb-1 md:mb-2">
      sorry
    </h1>
    <p class="text-lg md:text-2xl text-slate-800 dark:text-slate-300 font-bold leading-none">
      {page.status} &mdash; {page.error.message}
    </p>
    <p class="text-xs md:text-sm text-slate-600 dark:text-slate-400 max-w-80 my-4">
      {errorText[page.status]}
    </p>

    <ButtonGroup.Root class="text-slate-800 dark:text-slate-300">
      <Button class="cursor-pointer" size="sm" variant="outline" onclick={goBack}>
        <ArrowBigLeftDash />
        <span class="text-xs md:text-sm">Back</span>
      </Button>
      <Button href={resolve("/")} class="cursor-pointer" variant="outline" size="sm">
        <House />
        <span class="text-xs md:text-sm">Home</span>
      </Button>
    </ButtonGroup.Root>
  </div>
</div>
