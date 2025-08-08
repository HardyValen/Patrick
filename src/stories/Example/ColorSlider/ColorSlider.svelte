<script>
  import '$appcss';
  import { Slider } from "$lib/components/ui/slider/index.js";
  let value = $state(0);
  const {
    min = 0,
    max = 100,
    step = 1,
    subtitle = "Value",
    ...props
  } = $props();
</script>
<!-- min={0} max={100} step={1} -->
<div>
  <Slider
    type="single"
    bind:value={value}
    min={min}
    max={max}
    step={step}
    {...props}
  />
  <span>{subtitle}: {value}</span>
</div>
