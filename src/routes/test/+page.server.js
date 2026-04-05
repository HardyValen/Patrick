import { fetchJSON, resolve } from "$lib";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, url }){

  try {
    const url = resolve("/assets/test/mh_mice_groups.json");
    const data = await fetchJSON(fetch, url);
    return {
      items: data
    };
  } catch (e) {
    error(500, "Sorry")
  }
}
