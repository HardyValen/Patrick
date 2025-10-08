<script>
  import { cn } from "$lib/utils.js";
  import { typographyVariants } from "$lib";
  import { query } from "./SearchAuto.svelte.js";

  let {
    ref = $bindable(null),
    class: className,
    value = "",
    ...restProps
  } = $props();

</script>

<input
  type="text"
  name={restProps.name}
  placeholder={restProps.placeholder}
  bind:this={ref}
  bind:value={query.string}
  class={cn(className)}
  {...restProps}
/>
<p>hello {query.string}</p>
