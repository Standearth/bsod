<script lang="ts">
	import { onMount } from 'svelte';
	import WordWindow from './WordWindow.svelte';
	import DemandsWindow from './DemandsWindow.svelte';
	import SignatureCounter from './SignatureCounter.svelte';
	import ShareSection from './ShareSection.svelte';
	import YouTubeEmbed from './YouTubeEmbed.svelte';
	import Modal from './Modal.svelte';
	import bgImage from '$lib/assets/bg.jpeg';
	import { trackIndividualSignOn, trackOrgSignOn } from '$lib/analytics';

	let individualModalOpen = $state(false);
	let orgModalOpen = $state(false);

	function openIndividual() {
		individualModalOpen = true;
		trackIndividualSignOn();
	}

	function openOrg() {
		orgModalOpen = true;
		trackOrgSignOn();
	}

	const baseIndividualFormUrl = 'https://act.stand.earth/page/97803/petition/1';
	const baseOrgFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfjK_YjQktcQznWFmM05UKMkTTqf9iERh8Zyz-j8ELr9QUhDA/viewform';

	// Append any URL params from the current page to the iframe form URLs
	let individualFormUrl = $state(baseIndividualFormUrl);
	let orgFormUrl = $state(baseOrgFormUrl);

	onMount(() => {
		const pageParams = window.location.search;
		if (pageParams) {
			const suffix = pageParams.slice(1);
			const sepIndividual = baseIndividualFormUrl.includes('?') ? '&' : '?';
			const sepOrg = baseOrgFormUrl.includes('?') ? '&' : '?';
			individualFormUrl = baseIndividualFormUrl + sepIndividual + suffix;
			orgFormUrl = baseOrgFormUrl + sepOrg + suffix;
		}
	});
</script>

<section id="open-letter" class="letter-section" style="background-image: url({bgImage})">
	<div class="section-content">
		<div class="content-word">
			<WordWindow />
		</div>
		<div class="content-sidebar">
			<DemandsWindow onSignIndividual={openIndividual} onSignOrganization={openOrg} />
			<div class="sidebar-extras">
				<SignatureCounter />
				<ShareSection />
				<YouTubeEmbed />
			</div>
		</div>
	</div>
</section>

<!-- Sign-on modals -->
<Modal bind:open={individualModalOpen} title="Sign as an Individual" iframeSrc={individualFormUrl} />
<Modal bind:open={orgModalOpen} title="Sign as an Organization" iframeSrc={orgFormUrl} wide />

<style>
	.letter-section {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		padding: 2.5rem 2rem;
		min-height: 100vh;
	}

	.section-content {
		display: flex;
		gap: 1.5rem;
		max-width: 1280px;
		margin: 0 auto;
	}

	.content-word {
		flex: 1.25;
		min-width: 0;
		position: sticky;
		top: 1.5rem;
		align-self: flex-start;
	}

	.content-sidebar {
		flex: 1;
		min-width: 300px;
		max-width: 500px;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.sidebar-extras {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	@media (max-width: 900px) {
		.section-content {
			flex-direction: column;
			align-items: center;
		}

		.content-word {
			width: 100%;
			position: static;
		}

		.content-sidebar {
			max-width: 500px;
			width: 100%;
		}
	}

	@media (max-width: 600px) {
		.letter-section {
			padding: 1rem 0.75rem;
		}
	}
</style>
