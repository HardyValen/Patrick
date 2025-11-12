import { fetchJSON, FI, resolve } from "$lib";
import { error } from '@sveltejs/kit';
import { traverseJson } from "$lib/utils";

// export const prerender = false;

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, url }) {

  try {
    return {
      featured: await FI.Landing.articles({fetch}),
      articles: { data: [], hyper: {} },
      suggestions: {
        groups: await FI.TestMH.mice_groups({fetch}),
        subgroups: await FI.TestMH.mice_subgroups({fetch})
      },
      meta: await FI.Articles.meta({fetch}),
      catalogue: await FI.Catalogue.articles({fetch})
    }
  } catch (e) {
    error(404, e.message);
  }
}
