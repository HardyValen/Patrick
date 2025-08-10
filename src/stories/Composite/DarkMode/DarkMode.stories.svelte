<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import DarkMode from './DarkMode.svelte';

  const { Story } = defineMeta({
    component: DarkMode,
    title: 'Simple/DarkMode',
    tags: ['autodocs'],
  });
</script>

<Story name="Default" args={{}}/>
