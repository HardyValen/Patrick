<script>
	import '$appcss';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from "mode-watcher";
  import { Footer, ClientNavBar } from '$composite';

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
