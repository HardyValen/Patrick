import { fetchJSON, resolve } from "$lib";

async function getData({fetch, ...restProps}) {
  try {
    const url = resolve("/assets/test/mh_mice.json");
    let data = await fetchJSON(fetch, url);
    data = data.map(item => {
      let tags = ["group", "subgroup"].reduce((ac, cv) => {
        if (item[cv]) {
          ac.push(item[cv])
        }
        return ac
      }, [])
      return {...item, tags}
    })
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export default getData;
