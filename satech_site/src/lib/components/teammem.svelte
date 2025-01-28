<script>
  export let domains = [];
  let activeDomain = null;

  const toggleDomain = (index) => {
    activeDomain = activeDomain === index ? null : index;
  };
</script>

<div class="flex flex-col items-center space-y-6">
  {#each domains as domain, index}
    <div class="w-full flex flex-col items-center">
      <!-- Domain Button -->
      <button
        class="w-3/4 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-teal-600 transition-transform transform hover:scale-105"
        on:click={() => toggleDomain(index)}
      >
        {domain.name}
      </button>

      <!-- Members Display -->
      {#if activeDomain === index}
        <div class="mt-4 flex flex-row justify-center space-x-4">
          {#each domain.members as member}
            <div class="w-64 p-4 bg-white border-l-4 border-teal-500 shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200">
              <h3 class="text-lg font-semibold text-gray-700">{member.name}</h3>
              <p class="text-gray-500">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                class="text-teal-500 hover:text-teal-700 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  {/each}
</div>
