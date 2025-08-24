<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import ClientProducts from './ClientProducts.svelte';

  const { Story } = defineMeta({
    component: ClientProducts,
    title: 'ClientProducts',
    tags: ['autodocs'],
  });
</script>

<Story name="Default" args={{}}/>
