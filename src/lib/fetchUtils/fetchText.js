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
      throw new Error(`JSON fetch failed. Not found: ${url}`);
    } else {
      throw new Error(`JSON fetch failed.`);
    }
  }
}

export default fetchText;
