import { error } from '@sveltejs/kit';
import { fetchJSON } from "$lib";

export const prerender = true;

export async function load({fetch}) {
  try {
    let clientNavBarData = await fetchJSON(fetch, "/assets/json/client-navbar.json");
    return {
      navbar: clientNavBarData,
    }
  } catch (e) {
    error(404, e.message)
  }

}
