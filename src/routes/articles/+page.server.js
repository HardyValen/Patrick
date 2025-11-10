import { fetchJSON, FI } from "$lib";
import { error } from '@sveltejs/kit';
import { traverseJson } from "$lib/utils";

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, url }) {

  let dataURL = new URL("/api/articles", url.href);
  // constant param
  dataURL.searchParams.set("limit", 24);

  // params with single value: single
  let userDefinedSingleParams = ["page", "name", "group", "subgroup"];
  userDefinedSingleParams.forEach(param => {
    if (url.searchParams.get(param)) {
      dataURL.searchParams.set(param, url.searchParams.get(param));
    }
  });

  try {
    return {
      featured: await FI.Landing.articles({fetch}),
      articles: await fetchJSON(fetch, dataURL.href),
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
