<script lang="ts">
	import HeroBSOD from '$lib/components/HeroBSOD.svelte';
	import OpenLetterSection from '$lib/components/OpenLetterSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main>
	<HeroBSOD />
	<OpenLetterSection />
	<Footer />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
	}
</style>
