import { fetchJSON } from "$lib";

async function getData({fetch, ...restProps}) {
  try {
    const url = "/assets/json/meta/products.json";
    const data = await fetchJSON(fetch, url);
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export default getData;
