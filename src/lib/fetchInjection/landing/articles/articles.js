// for now, the articles JSON are sourced from the same file.
import { fetchJSON, resolve } from "$lib";

async function getData({fetch, ...restProps}) {
  try {
    const url = resolve("/assets/json/client-articles.json");
    const data = await fetchJSON(fetch, url);
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export default getData;
