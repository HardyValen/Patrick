<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import MarginDecorator from '$sb/Decorators/MarginDecorator.svelte';
  import ColorGraph from './ColorGraph.svelte';

  const { Story } = defineMeta({
    component: ColorGraph,
    title: 'Example/ColorGraph',
    tags: ['autodocs'],
    // parameters: {
    //   layout: 'fullscreen',
    // }
    decorators: [() => MarginDecorator],
  });

  const sliderData = [
    {
      type: "OKLCH",
      sliderValues: [
        {keyName: "L", minValue: 0, maxValue: 1, step: 0.01},
        {keyName: "C", minValue: 0, maxValue: 0.4, step: 0.004},
        {keyName: "H", minValue: 0, maxValue: 360, step: 0.5},
      ]
    },
    {
      type: "OKLAB",
      sliderValues: [
        {keyName: "L", minValue: 0, maxValue: 1, step: 0.01},
        {keyName: "A", minValue: -0.4, maxValue: 0.4, step: 0.008},
        {keyName: "B", minValue: -0.4, maxValue: 0.4, step: 0.008},
      ]
    },
    {
      type: "RGB",
      sliderValues: [
        {keyName: "R", minValue: 0, maxValue: 255, step: 1},
        {keyName: "G", minValue: 0, maxValue: 255, step: 1},
        {keyName: "B", minValue: 0, maxValue: 255, step: 1},
      ]
    },
  ]
</script>

<Story name="OKLCH" args={{...sliderData[0]}}/>

<Story name="OKLAB" args={{...sliderData[1]}}/>

<Story name="RGB" args={{...sliderData[2]}}/>
