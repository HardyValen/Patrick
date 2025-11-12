import { FI } from "$lib";
import { error } from '@sveltejs/kit';
import { traverseJson } from "$lib/utils";

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, url }) {
  try {
    return {
      meta: await FI.About.meta({ fetch }),
        // .then(data => {
        //   // transforms $href to url.href for all string object value that contains it.
        //   const newObj = structuredClone(data);
        //   traverseJson(newObj, ({key, value}) => {
        //     if (key === "url") {
        //       newObj[key] = url.origin + value
        //     }
        //   })
        //   return newObj
        // }),
      content: await FI.About.data({ fetch })
    }
  } catch (e) {
    error(404, e.message);
  }
}
