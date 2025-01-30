import { defineConfig } from '@sveltejs/kit';

export default defineConfig({
    kit: {
        prerender: {
            handleHttpError: ({ path, status }) => {
                console.warn(`Skipping prerender for ${path}: ${status}`);
                return { skip: true }; // This prevents build failure
            }
        }
    }
});
