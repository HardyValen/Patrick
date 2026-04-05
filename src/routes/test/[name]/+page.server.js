import entries_list from "$static/assets/json/products-data.json";

/** @type {import('./$types').EntryGenerator} */
export function entries() {
  return entries_list.map(item => {
    return {name: item.name}
  })
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, url }){
  return {
    title: params.name
  }
}
