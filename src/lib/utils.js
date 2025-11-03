// do not remove, it is used for shadcn components/ui

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ErrorMessageHandler } from "$lib";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any

/** Error message arguments for svelte routing */
export function errorArgs({errorMessages, code, defaultMessage = "Internal Server Error"}) {
  const getMessage = new Proxy(errorMessages, ErrorMessageHandler.GetMessage);
  const getHttpCode = new Proxy(errorMessages, ErrorMessageHandler.GetHTTPCode);
  if (getHttpCode[code] >= 400 && getHttpCode[code] <= 599) {
    return [getHttpCode[code], getMessage[code]]
  } else {
    return [500, defaultMessage]
  }
}

/**
 * @param obj {object}
 * @param callback {function({key, value, obj})}
 */
export function traverseJson(obj, callback) {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null) {
      traverseJson(value, callback);
    } else {
      callback({key, value});
    }
  }
}

export function selectDistinct({input = [], keys = []}) {
  if (keys.length === 0) return input
  return input.filter((obj, idx, self) =>
    idx === self.findIndex((t) =>
      keys.every(key =>
        t[key] === obj[key]
      )
    )
  );
}

/**
 * @param {string} input
 * @return {string}
 * Replace underscores to spaces and make them all lower case.
 */
export function stringify(input) {
  return input.toString().toLowerCase().replaceAll("_", " ")
}
