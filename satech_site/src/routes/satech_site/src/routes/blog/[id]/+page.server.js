

/** @type {import('./$types').PageLoad} */
import * as blogsjson from '$lib/json/blogs.json'
    
export async function load({ params }) {
    const Blogs = blogsjson.default;
    const blog = Blogs.find(blog => blog.id == params.id);
    if (blog) {
        return { props: blog  };
    } else {
        return { status: 404 };
    }
}
