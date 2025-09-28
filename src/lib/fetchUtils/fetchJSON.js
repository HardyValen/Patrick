async function fetchJSON(fetch, url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const result = await response.json();
    return result;

  } catch (e) {
    throw new Error("Fetch JSON failed", {cause: e.message});
  }
}

export default fetchJSON;
