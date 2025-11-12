import { fetchJSON, FI, resolve } from "$lib";
import { error } from '@sveltejs/kit';
import { traverseJson } from "$lib/utils";

export const prerender = false;

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, url, params }) {
  // let tag = url.searchParams.get("tag");

  // let dataURL = new URL("/api/products", url.href);
  let dataURL = new URL(resolve("/api/products"), url.href);
  // constant param
  dataURL.searchParams.set("limit", 24);

  // params with single value: single
  let userDefinedSingleParams = ["page", "name"];
  userDefinedSingleParams.forEach(param => {
    if (url.searchParams.get(param)) {
      dataURL.searchParams.set(param, url.searchParams.get(param));
    }
  });

  // params with multiple values: tags
  let userDefinedMultipleParams = ["tags"];
  userDefinedMultipleParams.forEach(param => {
    let values = url.searchParams.getAll(param);
    values.forEach(v => {
      dataURL.searchParams.append(param, v)
    })
  })


  try {
    return {
      products: await fetchJSON(fetch, dataURL.href),
      suggestions: {
        // titles: await FI.Products.data({ fetch })
        //   .then(titles => {
        //     return titles.map(item => {
        //       return {
        //         id: item.id,
        //         name: item.title
        //       }
        //     })
        //   }),
        // tags: await FI.Products.tags({fetch}),
        tags: await FI.TestMH.items_tags({ fetch })
          .then(items => items.tags)
      },
      meta: await FI.Products.meta({fetch}),
      catalogue: await FI.Catalogue.products({fetch})
    }
  } catch (e) {
    error(404, e.message);
  }
}
