import adapter from '@sveltejs/adapter-vercel';

export default {
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: ({ status, path }) => {
				// Redirect all 404 errors to /404
				if (status === 404) {
					console.warn(`Redirecting ${path} to /404`);
					return { path: '/404' };
				}

				// Throw for other types of errors
				throw new Error(`Unhandled error at ${path}`);
			}
		}
	}
};
