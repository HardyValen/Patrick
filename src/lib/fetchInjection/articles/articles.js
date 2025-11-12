import { fetchJSON, resolve } from "$lib";
import { debugConfig } from "$config";

async function getData({fetch, ...restProps}) {
  try {
    const url = debugConfig.enabled
      ? resolve("/assets/json/client-articles.json")
      : resolve("/assets/json/client-articles-gh-pages.json");
    const data = await fetchJSON(fetch, url);
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export default getData;
