async function fetchText(fetch, url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const result = await response.text();
    return result;

  } catch (e) {
    throw new Error("Fetch text failed", {cause: e.message});
  }
}

export default fetchText;
