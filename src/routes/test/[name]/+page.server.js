/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, url }){
  return {
    title: params.name
  }
}
