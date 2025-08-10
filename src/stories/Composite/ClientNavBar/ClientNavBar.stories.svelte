<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import ClientNavBar from './ClientNavBar.svelte';

  const { Story } = defineMeta({
    component: ClientNavBar,
    title: 'ClientNavBar',
    tags: ['autodocs'],
  });
</script>

<Story name="Default" args={{}}/>
