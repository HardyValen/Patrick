/**
 * Returns an array of object based of queryString and uniqueKeys
 * @param {string} queryString A string that will be passed. the queryString may include colon ':' to separate searchIndex and searchValue. the objects are delimited by space. Underscore '_' can be used to represent whitespace ' ' in the resulting searchValue. If the queryString does not have colon ':', the searchIndex value will be defaulted to "title"
 * @param {string} primaryKey @default "title" A string that used for determining the main key name.
 * @param {string[]} uniqueKeys An array of strings that limit the searchIndex occurence to just one. If provided, the function will trim the duplicate searchIndex, keeping the leftmost searchValue of the searchIndex. If not provided, the function will not trim duplicate searchIndex
 * @returns {{searchIndex: string, searchValue: string}}
 * @example formattedQuery({queryString: "abcd"}) = ["title": "abcd"]
 * @example formattedQuery({queryString: "abcd:efgh foo:bar"}) = [
      { "abcd":"efgh" },
      { "foo": "bar" }
    ]
 */

function formattedQuery({
  queryString = "",
  primaryKey = "title",
  uniqueKeys = []
}) {
  let query = []

  // 1. remove excess spaces
  queryString = queryString.replace(/\s+/g,' ').trim();

  // 2. split by space
  query = queryString.split(" ")

  // 3. format each element
  query = query.map((item) => {
    if (item.includes(":")) {
      let [ searchIndex, ...searchValue ] = item.split(":");
      return Object.fromEntries([[searchIndex, searchValue.join("").replaceAll("_", " ")]])
    } else {
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
  uniqueKeys.forEach(key => {
    let query_arrayIndex = query.findIndex(item => key in item);

    if (query_arrayIndex >= 0) {
      let query_selectedArrayItem = query[query_arrayIndex];
      query = query.filter(item => !(key in item));
      query.push(query_selectedArrayItem)
    }
  });

  return query;
}

export default formattedQuery;
