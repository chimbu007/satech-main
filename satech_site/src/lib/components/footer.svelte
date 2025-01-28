<script>
    import * as contactjson from '$lib/json/contact.json'
    const socialLinks = contactjson.default;
    const currentYear = new Date().getFullYear();
</script>

<footer class="bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <span class="text-sm text-gray-400 sm:text-center text-center block mb-2">Join Our Community
        </span>
        <div class="flex mt-4 sm:justify-center sm:mt-0 flex-wrap sm:flex-row">
            {#each socialLinks as link}
                <a href={link.href} aria-label={link.ariaLabel} class="text-gray-500 hover:text-white ms-5">
                    <i class={link.iconClass + " w-4 h-4"}></i>
                </a>
            {/each}
        </div>
      <hr class="border-gray-700 sm:mx-auto my-6" />
      <div class="text-center">
        <span class="text-sm text-gray-400 mt-4">
            &copy; {currentYear} <a href="/" class="hover:underline">SATech Studios</a>. All Rights Reserved.
        </span>
    </div>
</footer>
