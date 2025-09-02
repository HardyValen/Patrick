import { error } from "@sveltejs/kit";
import { clientProductsData } from "$data";
import { UnifiedPipeline as processor} from '$lib'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, url }) {
  let selectedData = clientProductsData.find(({ id }) => id === params.slug);
  selectedData.content = String(await processor.process(selectedData.content));

  return {
    q: url.searchParams.get('q'),
    ...selectedData
  };
}
