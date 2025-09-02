<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import ProductTop from './ProductTop.svelte';

  const { Story } = defineMeta({
    component: ProductTop,
    title: 'Product/ProductTop',
    tags: ['autodocs'],
  });
</script>

<Story name="Default" args={{}}/>
