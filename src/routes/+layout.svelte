<script>
	import '$appcss';
	import favicon from '$lib/assets/nisi-favicon.webp';
	import { ModeWatcher } from "mode-watcher";
  import { Footer, ClientNavBar } from '$composite';
  import { cn } from '$lib/utils';

	let { data, children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ClientNavBar
  class={cn(
    "inset-x-0 bg-background sticky top-0 z-10 shadow-md p-4",
    "dark:border-b-1"
  )}
  data={data.navbar}
/>

{@render children?.()}

<Footer
  class={cn(
    "w-full bg-(--footer) py-8 px-4"
  )}
/>

<ModeWatcher />
