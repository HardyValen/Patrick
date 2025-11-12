import { resolve as pathsResolve } from "$app/paths";

function resolve(i) {
  if (i.includes("https://") || i.includes("http://")) {
    return i
  } else {
    return pathsResolve(i)
  }
}

export default resolve
