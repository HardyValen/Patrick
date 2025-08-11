<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import ClientCarousel from './ClientCarousel.svelte';

  const { Story } = defineMeta({
    component: ClientCarousel,
    title: 'Composite/ClientCarousel',
    tags: ['autodocs'],
  });
</script>

<Story name="Default" args={{}}/>
