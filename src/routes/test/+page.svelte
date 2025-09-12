<script>
  import AnimateIntersect from "$composite/AnimateIntersect";
  import { cn } from "$lib";
</script>

<div class={cn(
  "justify-items-center items-center",
  "grid grid-cols-1 gap-4 max-w-240 mx-auto"
)}>
  {#each {length: 8} as item}
    <AnimateIntersect
      class={cn(
        "h-40 w-40 flex flex-col items-center justify-center border-2"
      )}
      variant="scale"
    >
      <div class="text-red-500">
        Hello World
      </div>
    </AnimateIntersect>
  {/each}
</div>

<div
  class={cn(
    "flex justify-center w-full"
  )}
>
  {#each {length: 8} as item, idx}
    <AnimateIntersect
      class={cn("h-40 w-40 flex flex-col items-center justify-center border-2")}
      variant={idx % 2 == 0 ? "top" : "bottom"}
      duration={300 + (Math.log(idx + 1) * 500)}
      delay={300 + (Math.log(idx + 1) * 300)}
    >
      <div class="text-red-500">
        Hello World
      </div>
    </AnimateIntersect>
  {/each}
</div>
