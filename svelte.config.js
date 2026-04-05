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
			'$static': "/static"
		},
		prerender: {
      handleHttpError: 'warn',
      entries: [
        '*',
        '/products/NISI%20JETMAG%20PRO%20CINEMA%20KIT%20-%20Super%20Fast%20Magnetic%20System%2082mm%20-%20with%20FS%20ND%20%2B%20CPL%20%2B%20Black%20Mist%201%2F8%20Filter%20-%20support%20lens%2082%2F77%2F72%2F67mm'
			]
		},
		paths: {
			base: process.argv.includes('dev') ? '' : "/Patrick"
		}
	}
 };

 export default config;
