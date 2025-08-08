<!-- TODO: Buat Color Graph untuk OKLCH / OKLAB -->
<script>
  import { Slider } from "$lib/components/ui/slider/index.js";
  import '$appcss';
  import './ColorGraph.css';
  /**
   * @typedef {Object} Props
   * @property {'OKLCH' | 'OKLAB' | 'RGB'} [type] What color model do you want to use?
   * @property {Array} [sliderValues] the values of the color model
   */
  /** @type {Props} */
  const {
    type = "OKLCH", // OKLCH, OKLAB
    sliderValues = [
      {keyName: "L", minValue: 0, maxValue: 1, step: 0.01},
      {keyName: "C", minValue: 0, maxValue: 0.4, step: 0.004},
      {keyName: "H", minValue: 0, maxValue: 360, step: 0.5},
    ],
    ...props
  } = $props();

  let values = $state([...sliderValues.map(x => (x.maxValue + x.minValue) / 2)])

  let style = $derived(((type) => {
    let cmf; // color model function

    switch(type) {
      case "OKLAB":
        cmf = `oklab`;
        break;
      case "RGB":
        cmf = `rgb`;
        break;
      default:
        cmf = `oklch`;
        break;
    };

    return `background-color: ${cmf}(${values.join(' ')})`;

  })(type));

</script>

<div class={['storybook-color-graph-container'].join(' ')}>
  <div
    class={['storybook-color-graph-box'].join(' ')}
    {style}
    {...props}
  >
  </div>
  <!-- <p>
    {@html sliderValues.map((x, i) => [x.keyName, values[i]].join(': ')).join(' &mdash; ')}
  </p> -->
  {#each sliderValues as sv, i}
    <div class={['storybook-color-graph-sliderbox'].join('')}>
      <Slider
        type="single"
        bind:value={values[i]}
        min={sv.minValue}
        max={sv.maxValue}
        step={sv.step}
        style={`max-width: 300px`}
      />
      <div style={`min-width: 80px`}>{sv.keyName}: {values[i]}</div>
    </div>
  {/each}
</div>
