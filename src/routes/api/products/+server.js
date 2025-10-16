/** @type {import('./$types').RequestHandler} */
export function GET({url, params}) {
  return new Response("hello")
}
