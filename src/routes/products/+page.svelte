<script>
  import { cn } from "$lib/utils.js";
  import { typographyVariants, formattedQuery } from "$lib";
  import { SearchAuto, query } from "$composite/SearchAuto";
  import { Button } from "$lib/components/ui/button";

  let {
    ref = $bindable(null),
    class: className,
    data,
    ...restProps
  } = $props();

  // To-Do
  function executeSearch() {
    // Do not do anything if there's no query (disabled)
    // if (query.formatted.length < 1) return;

    let selectedObjects = data.products.filter(item => {
      // return item.name.toLowerCase().includes(query.string.toLowerCase())

      let truthArray = query.formatted.map(pair => {
        let [[pKey, pValue]] = Object.entries(pair);

        // if item[pKey] is string or number or boolean.
        if (["string", "number", "boolean"].includes(typeof item[pKey])) {
          // stringify item[pKey].
          let item_pKey = item[pKey];
          item_pKey = item_pKey.toString();

          // lowercase both data item and query value
          item_pKey = item_pKey.toLowerCase();
          pValue = pValue.toLowerCase();

          return item_pKey.includes(pValue)
        }

        //
        if (Array.isArray(item[pKey])) {
          return item[pKey].includes(pValue);
        }

        // if item[pKey] type is none from the above, return false
        return false;
      })

      return truthArray.every(item => item)
    })

    console.log(selectedObjects)
  }

  function handleSearchInput() {
    const fqConfig = {
      queryString: query.string,
      primaryKey: "title"
    }
    query.formatted = formattedQuery(fqConfig);
  }

  function handleSearchKeypress(e) {
    console.log(query.string)
    if (e.key === "Enter") {
      executeSearch();
    } else return;
  }
</script>

<div
  bind:this={ref}
  class={cn(className)}
  {...restProps}
>

  <SearchAuto
    name="ProductSearch"
    oninput={handleSearchInput}
    onkeypress={handleSearchKeypress}
    bind:value={query.string}
  />
  <br>
  String: {query.string}
  <br>
  Formatted: {JSON.stringify(query.formatted)}
  <div>
    <!-- Search Button -->
    <Button onclick={executeSearch}>Search</Button>
    <!-- When clicked, trigger the search handler. -->
  </div>

</div>
