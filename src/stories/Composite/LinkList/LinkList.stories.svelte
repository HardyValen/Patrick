<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import LinkList from './LinkList.svelte';

  const { Story } = defineMeta({
    component: LinkList,
    title: 'Composite/LinkList',
    tags: ['autodocs'],
  });
</script>

<Story name="Default" args={{}}/>
