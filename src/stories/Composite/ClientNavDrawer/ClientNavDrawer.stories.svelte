<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import ClientNavDrawer from './ClientNavDrawer.svelte';

  const { Story } = defineMeta({
    component: ClientNavDrawer,
    title: 'Composite/ClientNavDrawer',
    tags: ['autodocs'],
  });
</script>

<Story name="Default" args={{}}/>
