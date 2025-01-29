<script>
import { onMount } from 'svelte';
let { data } = $props();
let selectedBlog = data.props;
</script>

<div class="rounded-lg md:m-5 md:p-5 m-2 text-white flex flex-col justify-center md:w-full">
    <img src={selectedBlog.image} alt={selectedBlog.title} class="rounded-lg self-center w-full md:w-1/3">
    <div class="flex justify-center w-full">
        <div class="flex flex-col m-5 md:w-3/4">
        <h2 class="text-4xl font-bold mb-3">{selectedBlog.title}</h2>
        <p class="text-lg mb-5">{selectedBlog.description}</p>
        </div>
    </div>
</div>
