<script>
  import { resolve } from "$lib";
  let {
    data
  } = $props();

  const items = $derived(data.items || [])
</script>

<!-- {#each items as item}
  <div>
    <a href={resolve(`/test/${item}`)}>Go To {item}</a>
  </div>
{/each} -->
<a href={resolve(`/test/123`)}>Go To 123</a>
