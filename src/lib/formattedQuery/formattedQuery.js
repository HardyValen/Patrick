/**
 * Returns an array of object based of queryString and uniqueKeys
 * @param {string} queryString A string that will be passed. the queryString may include colon ':' to separate searchIndex and searchValue. the objects are delimited by space. Underscore '_' can be used to represent whitespace ' ' in the resulting searchValue. If the queryString does not have colon ':', the searchIndex value will be defaulted to "title"
 * @param {string[]} uniqueKeys An array of strings that limit the searchIndex occurence to just one. If provided, the function will trim the duplicate searchIndex, keeping the leftmost searchValue of the searchIndex. If not provided, the function will not trim duplicate searchIndex
 * @returns {{searchIndex: string, searchValue: string}}
 * @example formattedQuery("abcd") = [{searchIndex: "title", searchValue: "abcd"}]
 * @example formattedQuery("abcd:efgh") = [{searchIndex: "abcd", searchValue: "efgh"}]
 * @example formattedQuery("abcd:efgh foo:bar") = [
      {
        searchIndex: "abcd",
        searchValue: "efgh",
      }, {
        searchIndex: "foo",
        searchValue: "bar",
      }
    ]
 * @example formattedQuery("test:title1 test:title2") = [ { searchIndex: 'test', searchValue: 'title1' } ]
 */

function formattedQuery(queryString = "", uniqueKeys = []) {
  let query = []

  // 1. remove excess spaces
  queryString = queryString.replace(/\s+/g,' ').trim();

  // 2. split by space
  query = queryString.split(" ")

  // 3. format each element
  query = query.map((item) => {
    if (item.includes(":")) {
      let [ searchIndex, ...searchValue ] = item.split(":");
      return {
        searchIndex: searchIndex || "title",
        searchValue: searchValue.join("").replaceAll("_", " ")
      }
    } else {
      return {
        searchIndex: "title",
        searchValue: item
      }
    }
  });

  // 4. Make title only occur once (and other searchIndex that should be unique)
  //    keep the first occurrence

  uniqueKeys.forEach(key => {
    let query_arrayIndex = query.findIndex(item => item.searchIndex === key);

    if (query_arrayIndex >= 0) {
      let query_selectedArrayItem = query[query_arrayIndex];
      query = query.filter(item => item.searchIndex != key);
      query.push(query_selectedArrayItem)
    }
  });

  return query;
}

export default formattedQuery;
