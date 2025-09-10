<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import SearchAuto from './SearchAuto.svelte';

  const { Story } = defineMeta({
    component: SearchAuto,
    title: 'Search/SearchAuto',
    tags: ['autodocs'],
  });
</script>

<Story name="Default" args={{}}/>
