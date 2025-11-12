import { asset as pathsAsset } from "$app/paths";

function asset(i) {
  if (i.includes("https://") || i.includes("http://")) {
    return i
  } else {
    return pathsAsset(i)
  }
}

export default asset
