<script>
  import "./styles.css";
  import Carousal from "$lib/components/carousal.svelte";
  import Teammem from "$lib/components/teammem.svelte";

  let items = [
    {
      image: "/portfolio.jpg",
      alt: "Portfolio project showcase",
      title: "Portfolio",
      description: "Explore our innovative projects and creative designs reflecting passion for technology and impactful solutions.",
      href: "/portfolio",
    },
    {
      image: "/course.jpg",
      alt: "Learning resources image",
      title: "Courses",
      description: "Embark on a journey to master multiple disciplines seamlessly, with expert-guided courses for well-rounded expertise.",
      href: "/courses",
    },
    {
      image: "/team.jpg",
      alt: "Our dedicated team",
      title: "Team",
      description: "Meet the talented team delivering exceptional results and creating memorable experiences for every project.",
      href: "/team",
    },
  ];
</script>

<svelte:head>
<title>Home | SATech Studios</title>
<meta name="description" content="From vision to reality, SaTech Studios specializes in AR/VR technologies, delivering exceptional courses, projects, and services." />
<meta name="keywords" content="AR/VR, courses, portfolio, team, services, contact SaTech Studios" />
<meta name="author" content="SaTech Studios" />
</svelte:head>

<div id="top-section" class="text-white relative bg-cover bg-center" style="background-image: url('main_img.png');">
  <div class="absolute inset-0 bg-black opacity-85 z-0"></div>
  <div class="relative z-10 h-full w-full flex flex-col justify-center items-center text-center">
    <h1 class="md:text-6xl text-3xl font-bold uppercase my-5 py-5">
      From Vision to Reality, Beyond Imagination.
    </h1>
    <p class="md:text-xl text-md sm:w-4/6 my-3">
      We are a talented and passionate team turning your wildest dreams into reality using AR/VR technologies.
    </p>
    <a href="/contact" aria-label="Contact Us">
      <button class="w-40 bg-blue-800 text-xl hover:bg-blue-600 hover:-translate-y-1 hover:scale-110 p-3 rounded-xl m-5">
        Get Started
      </button>
    </a>
  </div>
</div>