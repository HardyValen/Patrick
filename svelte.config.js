import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
		adapter: adapter({
		  pages: 'build_static',
			fallback: '404.html'
		}),
		alias: {
			'$appcss': "/src/app.css",
			'$data': "/src/data_definitions",
			'$config': "/src/config",
		},
		prerender: {
			handleHttpError: 'warn',
		},
		paths: {
			base: process.argv.includes('dev') ? '' : "/Patrick"
		}
	}
 };

 export default config;
