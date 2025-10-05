// do not remove, it is used for shadcn components/ui

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ErrorMessageHandler } from "$lib";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any

/** Error message arguments for svelte routing */
export function errorArgs(errorMessages, code) {
  const getMessage = new Proxy(errorMessages, ErrorMessageHandler.GetMessage);
  const getHttpCode = new Proxy(errorMessages, ErrorMessageHandler.GetHTTPCode);
  return [getHttpCode[code], getMessage[code]]
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
