<script>
  let domains = [
    {
      name: "Human Resource",
      members: [
        { name: "Sharmatha V", role: "Human Resource", linkedin: "https://www.linkedin.com/in/sharmatha-venkateswaran" },
      ],
    },
    {
      name: "Marketing",
      members: [
        { name: "Arulesh P P", role: "Business Development Associate", linkedin: "https://www.linkedin.com/in/aruleshpp2001/" },
        { name: "Samyuktha J", role: "Digital Marketer", linkedin: "https://www.linkedin.com/in/samyuktha-j-788899264/" },
      ],
    },
    {
      name: "AR/VR & Game Development",
      members: [
        { name: "Naresh S K", role: "Unity Developer", linkedin: "https://www.linkedin.com/in/naresh-s-k-aaa35724a" },
        { name: "Mukesh kanna N", role: "Unity Developer", linkedin: "https://www.linkedin.com/in/mukeshkanna75" },
      ],
    },
    {
      name: "3D Animation",
      members: [
        { name: "Deevith", role: "3D Generalist", linkedin: "https://www.linkedin.com/in/deevith-m-1b0729264/" },
      ],
    },
    {
      name: "Creative Design",
      members: [
        { name: "Giridharan S V", role: "Graphic & UI/UX Designer", linkedin: "https://www.linkedin.com/in/giridharan-s-v-b09a4228b/" },
        { name: "Sanjay K", role: "Graphic Designer", linkedin: "https://www.linkedin.com/" },
      ],
    },
    
    
    {
      name: "Full Stack Development",
      members: [
        { name: "Chidambaram S", role: "Frontend Developer", linkedin: "https://www.linkedin.com/in/chidambarams/" },
      ],
    },
    {
      name: "Mobile App Development",
      members: [
      ],
    },
  
    
  ];

  let activeDomain = null;

  const toggleDomain = (index) => {
    activeDomain = activeDomain === index ? null : index;
  };
</script>

<svelte:head>
  <title>Our Team - SATech Studios</title>
  <meta name="description" content="Meet our dedicated team of professionals specializing in human resources, marketing, development, design, and more." />
</svelte:head>


<main class="selection:bg-white selection:text-blue-700">
  <h1 class="m-5 p-5 text-center font-bold md:text-6xl sm:text-3xl text-2xl uppercase" id="top">
    Meet Our Team
  </h1>

  <section aria-labelledby="team-section" class="flex flex-col items-center space-y-6">
    <h2 id="team-section" class="sr-only">Explore team members by domain</h2>

    {#each domains as domain, index}
      <div class="w-full flex flex-col items-center">
        <!-- Domain Button -->
        <button
          class="w-full sm:w-3/4 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-teal-600 transition-transform transform hover:scale-105"
          aria-expanded={activeDomain === index}
          on:click={() => toggleDomain(index)}
        >
          {domain.name}
        </button>

        <!-- Team Members -->
        {#if activeDomain === index}
          <div
            class="mt-4 flex flex-wrap md:flex-row sm:flex-col justify-center space-y-4 sm:space-y-4 md:space-y-0 md:space-x-4"
            aria-labelledby={`domain-${index}`}
          >
            <h3 id={`domain-${index}`} class="sr-only">{domain.name} Team Members</h3>

            {#each domain.members as member}
              <article
                class="w-64 p-4 bg-white border-l-4 border-teal-500 shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200"
                aria-label={`Team member: ${member.name}`}
              >
                <h4 class="text-lg font-semibold text-gray-700">{member.name}</h4>
                <p class="text-gray-500">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-teal-500 hover:text-teal-700 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </article>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </section>
</main>

<style>
  @import "https://cdn.jsdelivr.net/npm/tailwindcss@3.3.2/dist/tailwind.min.css";
</style>
