import { clientNavBarData } from "$data";

export const prerender = true;

export function load() {
  return {
    navbar: clientNavBarData,
  }
}
