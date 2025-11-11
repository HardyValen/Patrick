<script>
  import { cn } from "$lib/utils";
  import { typographyVariants } from "$lib";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  } = $props()
</script>

<div
  bind:this={ref}
  class={cn(
    "border-2 p-4 w-150 h-240",
    className
  )}
  {...restProps}
>
  <!-- Construct elements here -->
  {@render children?.()}
</div>
