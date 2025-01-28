<script>
    import * as portfoliojson from '$lib/json/portfolio.json';
    const data1 = portfoliojson.data1;
    const data2 = portfoliojson.data2;
  </script>

<svelte:head>
  <title>Portfolio - SATech Studios</title>
  <meta name="description" content="Explore our portfolio of UI/UX designs, graphic designs, and 3D models showcasing creativity and innovation." />
</svelte:head>

  
  <main class="md:m-5 md:p-5 mt-5">
    <h1 class="md:text-6xl text-3xl text-center uppercase font-bold">Portfolio</h1>
    <hr class="border-2 border-blue-500 my-5" />
  
    <!-- UI/UX and Graphic Designs Section -->
    <section aria-labelledby="ui-ux-graphic-designs">
      <h2 id="ui-ux-graphic-designs" class="text-4xl font-bold text-center p-5">UI/UX and Graphic Designs</h2>
      <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 m-5 p-5">
        {#each data1 as item, i}
          <figure class="relative mb-4 group" aria-labelledby={`item-desc-${i}`}>
            <img class="w-full rounded-lg" src={item.src} alt={item.alt || 'UI/UX or graphic design image'} />
            {#if item.description}
              <!-- Description overlay -->
              <figcaption
                id={`item-desc-${i}`}
                class="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {item.description}
              </figcaption>
            {/if}
          </figure>
        {/each}
      </div>
    </section>
  
    <hr class="border-2 border-blue-500 my-5" />
  
    <!-- 3D Models Section -->
    <section aria-labelledby="3d-models">
      <h2 id="3d-models" class="text-4xl font-bold text-center p-5">3D Models</h2>
      <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 m-5 p-5">
        {#each data2 as item, i}
          <figure class="relative mb-4 group" aria-labelledby={`model-desc-${i}`}>
            <img class="w-full rounded-lg" src={item.src} alt={item.alt || '3D model image'} />
            {#if item.description}
              <!-- Description overlay -->
              <figcaption
                id={`model-desc-${i}`}
                class="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {item.description}
              </figcaption>
            {/if}
          </figure>
        {/each}
      </div>
    </section>
  </main>
  
  <style>
    @import "https://cdn.jsdelivr.net/npm/tailwindcss@3.3.2/dist/tailwind.min.css";
  </style>
  