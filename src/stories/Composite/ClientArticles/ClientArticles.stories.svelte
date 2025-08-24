<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import ClientArticles from './ClientArticles.svelte';

  const { Story } = defineMeta({
    component: ClientArticles,
    title: 'Composite/ClientArticles',
    tags: ['autodocs'],
  });
</script>

<Story name="Default" args={{}}/>
