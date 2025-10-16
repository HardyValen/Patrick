/**
 * Returns an array of object based of queryString and uniqueKeys
 * @param {string} queryString A string that will be passed. the queryString may include colon ':' to separate searchIndex and searchValue. the objects are delimited by space. Underscore '_' can be used to represent whitespace ' ' in the resulting searchValue. If the queryString does not have colon ':', the searchIndex value will be defaulted to "title"
 * @param {string} primaryKey @default "title" A string that used for determining the main key name.
 * @param {string[]} uniqueKeys An array of strings that limit the searchIndex occurence to just one. If provided, the function will trim the duplicate searchIndex, keeping the leftmost searchValue of the searchIndex. If not provided, the function will not trim duplicate searchIndex
 * @returns {{searchIndex: string, searchValue: string}}
 * @example format({queryString: "abcd"}) = ["title": ["abcd"]]
 * @example format({queryString: "abcd:efgh foo:bar"}) = [
      { "abcd":["efgh"] },
      { "foo":["bar"] }
    ]
 */

function format({
  queryString = "",
  primaryKey = "title",
  uniqueKeys = []
}) {
  let query = [];
  let searchIndices = new Set();

  // 1. remove excess spaces
  queryString = queryString.replace(/\s+/g,' ').trim();

  // 2. split by space
  query = queryString.split(" ")

  // 3. format each element
  query = query.map((item) => {
    if (item.includes(":")) {
      let [ searchIndex, ...searchValue ] = item.split(":");
      searchIndices.add(searchIndex);
      return Object.fromEntries([[searchIndex, searchValue.join("").replaceAll("_", " ")]])
    } else {
      searchIndices.add(primaryKey);
      return Object.fromEntries([[primaryKey, item]])
    }
  });

  // 4. Concatenate objects that has "title" as their key to one singular object
  let titles = query.filter(item => primaryKey in item)
  query = [
    ...query.filter(item => !(primaryKey in item))
  ]
  // let quashedTitle = Object.fromEntries([[primaryKey, titles.reduce((a, c) => [a, c[primaryKey]].join(" "), "")]])
  let quashedTitle = Object.fromEntries([[primaryKey, titles.map(item => item[primaryKey]).join(" ")]])
  if (quashedTitle[primaryKey].trim() !== "") {
    query.push(quashedTitle)
  }

  // 5. Make objects that listed in uniqueKeys only occur once
  //    keep the first occurrence
  // [{tags: "camera"}, {tags: "filter"}, {title: "something"}, ...]
  uniqueKeys.forEach(key => {
    let query_arrayIndex = query.findIndex(item => key in item);

    if (query_arrayIndex >= 0) {
      let query_selectedArrayItem = query[query_arrayIndex];
      query = query.filter(item => !(key in item));
      query.push(query_selectedArrayItem)
    }
  });

  // 6. Transform query array with signature like no 5 to result object
  // {
  //    tags: ["camera", "filter", "something"],
  //    title: ["something"]
  // }
  let result = {};

  searchIndices.forEach(key => {
    if (key === primaryKey) {
      result[key] = "";
    } else
     result[key] = [];
  })

  query.forEach(item => {
    let [[key, value]] = Object.entries(item);
    if (key === primaryKey) {
      result[key] = value;
    } else {
      result[key].push(value);
    }
  })

  return result;
}

export default format;
