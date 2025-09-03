<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import ProductFooter from './ProductFooter.svelte';

  const { Story } = defineMeta({
    component: ProductFooter,
    title: 'Product/ProductFooter',
    tags: ['autodocs'],
  });
</script>

<Story name="Default" args={{}}/>
