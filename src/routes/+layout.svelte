<script>
	import '$appcss';
	import favicon from '$lib/assets/favicon.svg';
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
    "w-full bg-background sticky top-0 z-1 shadow-md p-4"
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
