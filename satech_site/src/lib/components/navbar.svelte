<script>
  import { page } from '$app/stores';

  let navItems = $state([
    { name: 'Home', href: '/#top-section' },
    { name: 'About', href: '/About' },
    { name: 'Portfolio', href: '/portfolio' },
    {
      name: 'Courses',
      href: '/courses',
      dropdown: [
         { name: 'Frontend Development', href: '/courses/1' },
      { name: 'UI/UX Design', href: '/courses/2' },
      { name: 'Graphic Design', href: '/courses/3' },
      { name: 'Auto CAD', href: '/courses/4' },
      { name: 'Full Stack Development', href: '/courses/5' },
      { name: 'Blender Modelling and Animation', href: '/courses/6' },
      { name: 'AR/VR Development', href: '/courses/7' },
      { name: 'Game Design and Development', href: '/courses/8' }
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Team', href: '/contact' }  
  ]);

  let dropdownVisible = $state(false);
  let isNavbarOpen = $state(false); // Tracks whether the mobile navbar is open

  const toggleDropdown = (itemName) => {
    if (dropdownVisible === itemName) {
      dropdownVisible = null;
    } else {
      dropdownVisible = itemName;
    }
  };

  const toggleNavbar = () => {
    isNavbarOpen = !isNavbarOpen; // Toggle the navbar's open state
  };

  const closeNavbar = () => {
    isNavbarOpen = false; // Close the navbar
    dropdownVisible = null; // Hide dropdowns when closing the navbar
  };
</script>

<nav class="border-gray-200 bg-gray-900 sticky top-0 z-50">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <!-- Logo -->
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/Letterpad.png" alt="Satech Studios logo" class="sm:h-8 h-5" />
    </a>

    <!-- Mobile Menu Button -->
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      onclick={toggleNavbar}
      aria-controls="navbar-default"
      aria-expanded={isNavbarOpen}
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>

    <!-- Navigation Links -->
    <div
      class="{isNavbarOpen ? 'block' : 'hidden'} w-full md:block md:w-auto"
      id="navbar-default"
    >
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700 text-white">
        {#each navItems as item}
          <li class="relative text-white">
            {#if item.dropdown}
              <!-- Dropdown Toggle -->
              <button
                onclick={() => toggleDropdown(item.name)}
                class="flex items-center justify-between w-full py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto text-white md:dark:hover:text-blue-500 focus:text-white border-gray-700"
              >
                {item.name}
                <svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <!-- Dropdown Menu -->
              {#if dropdownVisible === item.name}
                <div
    class="absolute left-0 z-10 mt-2 font-normal bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                   <ul class="py-2 text-sm text-white">
      {#each item.dropdown as subItem}
        <li>
          <a
            href={subItem.href}
            onclick={closeNavbar}
            class="block px-4 py-2 hover:bg-gray-600 text-white"
          >
            {subItem.name}
          </a>
        </li>
      {/each}
    </ul>
                </div>
              {/if}
            {/if}
            {#if !item.dropdown}
              <!-- Normal Link -->
              <a
                href={item.href}
                onclick={closeNavbar}
                class="block py-2 px-3 rounded md:p-0 md:border-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                {item.name}
              </a>
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>
