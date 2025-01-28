<script>
    import "../app.css";
    import Navbar from "../lib/components/navbar.svelte";
    import Footer from "../lib/components/footer.svelte";
    import { page } from '$app/stores';
</script>


<Navbar/>
<div class="grow">
    <slot>
    </slot>
</div>
<Footer />
