<script>
  import { cn } from "$lib/utils.js";
  import { typographyVariants } from "$lib";
  import { Meta } from "$composite";

  let {
    ref = $bindable(null),
    class: className,
    data,
    ...restProps
  } = $props()
</script>

<Meta metadata={data.meta}/>

<div
  bind:this={ref}
  class={cn(className)}
  {...restProps}
>
  <div
    class={cn(
      "w-full max-w-240 m-auto my-10",
      "_client-content",
      "px-4"
    )}
  >
    {@html data.content}
  </div>
</div>
