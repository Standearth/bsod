<script lang="ts">
	import HeroBSOD from '$lib/components/HeroBSOD.svelte';
	import OpenLetterSection from '$lib/components/OpenLetterSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CityBanner from '$lib/components/CityBanner.svelte';
</script>

<main>
	<HeroBSOD />
	<OpenLetterSection />
	<Footer />
</main>

<CityBanner />

<style>
	main {
		display: flex;
		flex-direction: column;
	}
</style>
