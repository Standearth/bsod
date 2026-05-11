<script lang="ts">
	import SignOnButtons from './SignOnButtons.svelte';
	import SignatureCounter from './SignatureCounter.svelte';
	import ShareSection from './ShareSection.svelte';

	let {
		onSignIndividual,
		onSignOrganization
	}: {
		onSignIndividual: () => void;
		onSignOrganization: () => void;
	} = $props();
</script>

<aside class="sidebar">
	<SignOnButtons {onSignIndividual} {onSignOrganization} />

	<SignatureCounter />

	<ShareSection />
</aside>

<style>
	.sidebar {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}
</style>
