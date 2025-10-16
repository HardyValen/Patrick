function stringify({
  formattedQuery = {},
  primaryKey = "title"
}) {
  let result = [];

  let entries = Object.entries(formattedQuery);
  entries.forEach(item => {
    let [key, value] = item
    if (key === primaryKey) {
      result.push(value)
    } else {
      value.forEach(v => {
        v = v.replace(/\s+/g,' ').trim().replaceAll(" ", "_");
        result.push([key, v].join(":"))
      })
    }
  })

  return result.join(" ");
}

export default stringify;
