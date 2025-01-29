<script>
    import * as coursesjson from '$lib/json/courses.json';
    const courses = coursesjson.default;
  </script>

<svelte:head>
  <title>Our Course - SATech Studios</title>
  <meta name="description" content="Discover our range of courses designed to enhance your skills in various domains. Learn from the best with our expert-led programs." />
</svelte:head>

  
  <main class="selection:bg-white selection:text-blue-700">
    <h1 class="m-5 p-5 text-center font-bold md:text-6xl sm:text-3xl text-xl uppercase" id="top">Our Courses</h1>
  
    <!-- Course List -->
    <section aria-labelledby="courses-section" class="flex flex-wrap justify-center">
      <h2 id="courses-section" class="sr-only">Available Courses</h2>
      {#each courses as course (course.id)}
        <a
          href={`/courses/${course.id}`}
          class="flex flex-col bg-blue-800 rounded-lg m-5 max-w-[300px] cursor-pointer transition-transform duration-300 ease-in-out no-underline text-white hover:scale-105"
          aria-label={`Learn more about ${course.name}`}
        >
          <div>
            <img 
              src={course.image} 
              alt={course.name} 
              class="rounded-t-lg object-cover h-48 w-full"
            />
            <div class="m-5">
              <p class="text-3xl font-medium my-2">{course.name}</p>
              <p class="text-lg">{course.description}</p>
            </div>
          </div>
        </a>
      {/each}
    </section>
  </main>
  
  <style>
    @import "https://cdn.jsdelivr.net/npm/tailwindcss@3.3.2/dist/tailwind.min.css";
  </style>
  