<script>
  import '$lib/styles/debugWindow.css';
  import { cn } from "$lib";
  import { getContext } from "svelte";
  import { codeToHtml } from "shiki";

  let {
    ref = $bindable(null),
    class: className,
    data = [],
    ...restProps
  } = $props();
</script>

<div
  bind:this={ref}
  class={cn(
    className,
    !getContext("debug").visible ? "hidden" : "",
    "fixed z-999 top-0 left-0 h-full max-h-full overflow-auto p-8",
    "resize-x w-120 min-w-80 max-w-full",
    "debug-window"
  )}
  {...restProps}
>
  {#await codeToHtml(JSON.stringify(data, null, 2), {
    lang: 'json',
    theme: 'vitesse-dark'
  }) then result}
    {@html result}
  {/await}
</div>

<style>
  .debug-window {
    background-color: #121212;
  }
</style>
