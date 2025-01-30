export async function load({ fetch }) {
    try {
        const res = await fetch('/api/courses/wireframing');

        if (!res.ok) {
            throw new Error(`Failed to load: ${res.status}`);
        }

        const data = await res.json();
        return { data };
    } catch (error) {
        console.error("Error loading wireframing page:", error);
        return { error: true }; // Return a safe response
    }
}
