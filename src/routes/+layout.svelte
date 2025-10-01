<script>
	import '$appcss';
	import favicon from '$lib/assets/nisi-favicon.webp';
	import { mode, toggleMode, ModeWatcher } from "mode-watcher";
  import { Footer, ClientNavBar, DebugWindow } from '$composite';
  import { setContext } from "svelte";
  import { cn } from '$lib/utils';
  import {
    debugConfig as dbg,
    searchWindowConfig as search,
    darkModeConfig
  } from "$config";
  import { handleKeyCombinations } from "$lib";

	let { data, children } = $props();

	let debugWindow = $state({
	  visible: false
	});
	let searchWindow = $state({
	  visible: false
	});

	setContext('debug', debugWindow);
	setContext('search', searchWindow);

	function onkeydown(e) {
    if (e.repeat) return;

    // Handle Debug
		if (handleKeyCombinations(e, dbg.showWindowKeys)) {
		  if (dbg.enabled) {
        e.preventDefault();
        debugWindow.visible = !debugWindow.visible;
			}
		}

		// Handle Search Window
		if (handleKeyCombinations(e, search.showWindowKeys)) {
      e.preventDefault();
      searchWindow.visible = !searchWindow.visible;
		}

		// Handle Dark Mode Toggle Shortcut
		if (handleKeyCombinations(e, darkModeConfig.showWindowKeys)) {
		  e.preventDefault();
			toggleMode();
		}
	}
</script>

<svelte:window {onkeydown}/>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div>

</div>

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

{#if dbg.enabled}
  <DebugWindow
    data={[
      {searchWindow},
      {mode},
      {debugWindow}
    ]}
  />
{/if}

<ModeWatcher />
