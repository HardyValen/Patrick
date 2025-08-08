<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import ColorSlider from './ColorSlider.svelte';
  import MarginDecorator from '$sb/Decorators/MarginDecorator.svelte';

  const { Story } = defineMeta({
    component: ColorSlider,
    title: 'Example/ColorSlider',
    tags: ['autodocs'],
    // parameters: {
    //   layout: 'fullscreen',
    // },
    decorators: [() => MarginDecorator],
  });

  const colorSliderData = [
    {},
    {
        min: -10,
        max: 10,
    },
    {
      min: -0.4,
      max: 0.4,
      step: 0.001,
      subtitle: "Custom Subtitle"
    }
  ];
</script>

<Story name="Default" args={{...colorSliderData[0]}}/>
<Story name="Negative Min" args={{...colorSliderData[1]}}/>
<Story name="Decimal Steps" args={{...colorSliderData[2]}}/>
