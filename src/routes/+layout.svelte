<script>
	import '$appcss';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from "mode-watcher";
  import ClientNavBar from '$sb/Composite/ClientNavBar/ClientNavBar.svelte';
  import { Footer } from '$sb/Composite/Footer'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- <nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav> -->

<ClientNavBar />

<ModeWatcher />
{@render children?.()}
<Footer />
