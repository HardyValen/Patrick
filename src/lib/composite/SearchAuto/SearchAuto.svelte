<script>
  import { cn } from "$lib/utils.js";
  import { typographyVariants, formattedQuery } from "$lib";
  // import { query } from "./SearchAuto.svelte.js";

  let {
    ref = $bindable(null),
    class: className,
    // value = "",
    value = $bindable(""),
    ...restProps
  } = $props();

</script>

<input
  type="text"
  name={restProps.name}
  placeholder={restProps.placeholder}
  bind:this={ref}
  bind:value
  class={cn(className)}
  oninput={restProps.oninput}
  {...restProps}
/>
  <!-- bind:value={query.string} -->
