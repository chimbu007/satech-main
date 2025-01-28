<script>
  import { onMount, onDestroy } from "svelte";

  import * as carousaljson from '$lib/json/carousal.json'
  const carouselItems = carousaljson.default;

  let currentIndex = 0;
  let visibleItemsCount = 1;
  let timer;

  // Determine visible items based on screen size
  const getVisibleItemsCount = () => {
    if (window.innerWidth >= 1024) return 4; // Large screens
    if (window.innerWidth >= 640) return 2; // Medium screens
    return 1; // Small screens
  };

  // Update visible items count on resize
  const updateVisibleItemsCount = () => {
    visibleItemsCount = getVisibleItemsCount();
  };

  // Start auto-scroll
  const startAutoScroll = () => {
    timer = setInterval(nextSlide, 5000);
  };

  // Stop auto-scroll
  const stopAutoScroll = () => {
    if (timer) clearInterval(timer);
  };

  // Move to the previous slide
  const prevSlide = () => {
    currentIndex =
      (currentIndex - visibleItemsCount + carouselItems.length) %
      carouselItems.length;
  };

  // Move to the next slide
  const nextSlide = () => {
    currentIndex = (currentIndex + visibleItemsCount) % carouselItems.length;
  };

  // Lifecycle Hooks
  onMount(() => {
    if (typeof window !== "undefined") {
      updateVisibleItemsCount();
      window.addEventListener("resize", updateVisibleItemsCount);
      startAutoScroll();
    }
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", updateVisibleItemsCount);
      stopAutoScroll();
    }
  });
</script>

<!-- Carousel -->
<div id="carousel" class="relative w-full overflow-hidden">
  <!-- Carousel Wrapper -->
  <div
    id="carousel-items"
    class="flex transition-transform duration-700 ease-in-out"
    style="transform: translateX(-{currentIndex * (100 / visibleItemsCount)}%);"
  >
    {#each carouselItems as item (item.title)}
      <div
        class="relative flex-shrink-0 group p-5"
        style="width: {100 / visibleItemsCount}%;"
      >
        <!-- Image -->
        <img class="w-full" src={item.image} alt={item.alt} />

        <!-- Description Overlay -->
        {#if item.description}
          <p
            class="absolute bottom-0 left-0 w-full px-5 p-2 bg-black/70 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {item.description}
          </p>
        {/if}
      </div>
    {/each}
  </div>

  <!-- Navigation Buttons -->
  <button
    on:click={() => {
      stopAutoScroll();
      prevSlide();
      startAutoScroll();
    }}
    class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
    aria-label="Previous Slide"
  >
    &lt;
  </button>
  <button
    on:click={() => {
      stopAutoScroll();
      nextSlide();
      startAutoScroll();
    }}
    class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
    aria-label="Next Slide"
  >
    &gt;
  </button>
</div>

<style>
  #carousel-items {
    display: flex;
    transition: transform 0.7s ease-in-out;
  }
</style>
