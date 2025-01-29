import * as coursesjson from '$lib/json/courses.json'
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

    const Courses = coursesjson.default;
	  
	const course = Courses.find(course => course.id == params.id);


	if (course) {
		return { props: course };
	} else {
		return { status: 404 };
	}
	

}