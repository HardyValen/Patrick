import adapter from "@sveltejs/adapter-node";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
		  out: 'build_node',
		}),
		alias: {
			'$appcss': "/src/app.css",
			'$composite': "/src/lib/composite",
			'$data': "/src/data_definitions",
		}
	}
};

export default config;
