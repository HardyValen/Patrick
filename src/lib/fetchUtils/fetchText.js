import { debugConfig } from "$config";

async function fetchText(fetch, url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const result = await response.text();
    return result;

  } catch (e) {
    if (debugConfig.enabled) {
      throw new Error(`Text fetch failed. Not found: ${url}`);
    } else {
      throw new Error(`Data could not be fetched.`);
    }
  }
}

export default fetchText;
