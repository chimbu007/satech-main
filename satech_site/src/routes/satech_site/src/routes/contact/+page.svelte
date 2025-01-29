<script>
  import { onMount } from 'svelte';
  import * as contactjson from '$lib/json/contact.json';

  const socialLinks = contactjson.default;
  const scriptURL = 'https://script.google.com/macros/s/AKfycbw6901srxECceQjqcFRhMleJ8vQEf8vQodMKBfiB-M51gdQ6cllm-dLaQBXTLXIY17-_A/exec';
  let form;
  let status = "";

  onMount(() => {
    form.addEventListener('submit', handleSubmit);
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(() => {
        alert("Thank you! Form is submitted");
        window.location.reload();
      })
      .catch(error => console.error('Error!', error.message));
  }

  const handleSubmit2 = async data => {
    status = 'Submitting...';
    const formData = new FormData(data.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        console.log(result);
        status = result.message || "Success";
      }
    } catch (error) {
      console.error("Submission failed", error);
      status = "Submission failed. Please try again.";
    }
  };
</script>

<svelte:head>
  <title>Contact Us - SATech Studios</title>
  <meta name="description" content="Get in touch with us through our contact form. Follow us on social media and reach out to our team for more information." />
</svelte:head>


<main class="flex flex-col items-center md:p-5 pt-5">
  <h1 class="text-4xl font-bold text-center">Follow Us</h1>
  <section class="flex flex-wrap justify-center mt-5">
    {#each socialLinks as link}
      <a
        href={link.href}
        aria-label={link.ariaLabel}
        class="w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 hover:text-white text-black hover:bg-black m-5"
      >
        <i class={link.iconClass + " text-2xl"}></i>
      </a>
    {/each}
  </section>

  <h1 class="text-4xl font-bold text-center mt-10">Contact Our Team</h1>
  <section class="flex justify-center w-full md:p-5 pt-5">
    <form
      bind:this={form}
      class="lg:w-1/2 w-[400px] p-3 bg-gray-800 rounded-lg"
      method="post"
      action=""
      name="contact-form"
      on:submit|preventDefault={handleSubmit2}
    >
      <input type="hidden" name="access_key" value="76803e84-ecab-4c6b-8237-0d7a53f5e345" />

      <div class="mb-5">
        <label for="name" class="block mb-2 text-sm font-medium text-white">Your name</label>
        <input
          name="name"
          type="text"
          id="name"
          placeholder="John Doe"
          required
          pattern="[A-Za-z\s]+"
          title="Name should only contain letters and spaces."
          class="bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rounded-lg"
        />
      </div>

      <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
        <input
          name="email"
          type="email"
          id="email"
          placeholder="john.doe@email.com"
          required
          title="Please enter a valid email address."
          class="bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rounded-lg"
        />
      </div>

      <div class="mb-5">
        <label for="phnno" class="block mb-2 text-sm font-medium text-white">Your phone number</label>
        <input
          name="phnno"
          type="text"
          inputmode="numeric"
          id="phnno"
          placeholder="123-456-7890"
          required
          pattern="[0-9]*"
          title="Phone number should be in the format: 123-456-7890."
          class="bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rounded-lg"
        />
      </div>

      <div class="mb-5">
        <label for="message" class="block mb-2 text-sm font-medium text-white">Your message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Enter your message"
          required
          class="bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rounded-lg"
        ></textarea>
      </div>

      <button
        type="submit"
        class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </form>
  </section>

  <p class="text-center text-white mt-5">{status}</p>
</main>

<style>
  @import "https://cdn.jsdelivr.net/npm/tailwindcss@3.3.2/dist/tailwind.min.css";
</style>
