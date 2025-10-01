import { error } from '@sveltejs/kit';
import { FI } from "$lib";

export const prerender = true;

export async function load({fetch}) {
  try {
    return {
      navbar: await FI.clientNavbar({fetch}),
    }
  } catch (e) {
    error(404, e.message)
  }
}
