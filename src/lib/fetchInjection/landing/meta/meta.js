import { fetchJSON, resolve } from "$lib";

async function getData({fetch, ...restProps}) {
  try {
    const url = resolve("/assets/json/meta/landing.json");
    const data = await fetchJSON(fetch, url);
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export default getData;
