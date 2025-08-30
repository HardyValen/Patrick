import { error } from "@sveltejs/kit";
import { clientProductsData } from "$data";

export function load({params}) {
  return clientProductsData.find(({ id }) => id === params.slug);
}
