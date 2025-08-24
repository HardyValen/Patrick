<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import ClientBrands from './ClientBrands.svelte';

  const { Story } = defineMeta({
    component: ClientBrands,
    title: 'Composite/ClientBrands',
    tags: ['autodocs'],
  });
</script>

<Story name="Default" args={{}}/>
