import { error } from '@sveltejs/kit';
import { FI } from "$lib";

// export const prerender = true;

export async function load({fetch}) {
  try {
    return {
      navbar: await FI.Layout.navbar({fetch}),
      footer: await FI.Layout.footer({fetch}),
    }
  } catch (e) {
    error(404, e.message)
  }
}
