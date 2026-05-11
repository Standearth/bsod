<script lang="ts">
	import { onMount } from 'svelte';
	import WindowTitleBar from './WindowTitleBar.svelte';
	import { trackLetterScrolledToBottom } from '$lib/analytics';

	let letterEnd: HTMLDivElement = undefined!;

	onMount(() => {
		let fired = false;
		const observer = new IntersectionObserver(
			(entries) => {
				if (!fired && entries[0]?.isIntersecting) {
					fired = true;
					trackLetterScrolledToBottom();
					observer.disconnect();
				}
			},
			{ threshold: 0.5 }
		);

		observer.observe(letterEnd);
		return () => observer.disconnect();
	});
</script>

<div class="word-window">
	<WindowTitleBar title="Open Letter to Microsoft — Word" icon="📄" />

	<!-- Word Ribbon / Menu Bar -->
	<div class="ribbon">
		<div class="ribbon-tabs">
			<span class="ribbon-tab active">File</span>
			<span class="ribbon-tab">Home</span>
			<span class="ribbon-tab">Insert</span>
			<span class="ribbon-tab">Design</span>
			<span class="ribbon-tab">Layout</span>
			<span class="ribbon-tab">Review</span>
			<span class="ribbon-tab">View</span>
		</div>
	</div>

	<!-- Toolbar -->
	<div class="toolbar">
		<div class="toolbar-group">
			<span class="toolbar-btn" title="Bold"><strong>B</strong></span>
			<span class="toolbar-btn" title="Italic"><em>I</em></span>
			<span class="toolbar-btn" title="Underline"><u>U</u></span>
		</div>
		<div class="toolbar-divider"></div>
		<div class="toolbar-group">
			<span class="toolbar-font">Calibri (Body)</span>
			<span class="toolbar-font-size">11</span>
		</div>
	</div>

	<!-- Document Area -->
	<div class="doc-area">
		<div class="doc-page">
			<div class="doc-content">
				<h2 class="letter-title">Microsoft, Are You <br/>Abandoning Your <br/>Climate Goals?<span class="cursor">|</span></h2>

				<p class="letter-addressee">Dear CEO Satya Nadella and Co-Founder Bill Gates,</p>

				<p>
					If you eliminate your climate targets, why should communities believe any of your commitments?
				</p>

				<p>
					Communities from across North America are facing more pollution, higher utility bills, and an increasingly unlivable climate – all exacerbated by your data center buildout. Now, your credibility as a climate leader and as a community partner is in danger of being gone for good.
				</p>

				<p>
					<b>You ask us to believe that you will contribute to our communities by paying fair taxes, providing jobs, and preserving water, so we should trust you to be a good neighbor – but what does your promise mean if commitments can be so easily abandoned?</b>
				</p>

				<p>
					You committed to be a climate leader, removing more carbon than you emitted and delivering around-the-clock clean energy, yet your company is increasingly using fossil fuels to power data centers, and has brought <a href="https://www.datacenterdynamics.com/en/news/microsoft-emissions-up-23-since-2020-blames-ai-data-centers/" target="_new">pollution</a>, <a href="https://spectrumnews1.com/wi/milwaukee/news/2026/04/10/neighbors-frustrated-with-data-center-s-noise" target="_new">noise</a>, <a href="https://www.wpr.org/news/microsoft-data-centers-8-million-gallons-water-each-year" target="_new">rampant water use</a>, and waste to local communities. Your company is selling AI and cloud services to oil and gas companies to increase fossil fuel production <a href="https://news.un.org/en/story/2021/10/1103472" target="_new">despite clear scientific warnings that existing oil reserves already exceed safe climate limits</a>.
				</p>

				<p>
					And now you may abandon your pledge to the planet in order to build more data centers as rapidly as possible, whatever the cost.
				</p>

				<p>
					We are writing to urge you to recommit to clean energy, community health, affordability, and environmental responsibility. Microsoft used to be a leader in developing clean, renewable energy to power its facilities, setting clear and meaningful environmental and climate pollution goals, and investing in durable carbon dioxide removal.
				</p>

				<p class="letter-closing">
					<strong>If you kill your commitment to clean energy, communities won't trust you again.</strong>
				</p>

				<hr class="letter-divider" />

				<div class="signatories">
					<p class="signatories-intro">
						Organizations representing communities across North America and around the globe have co-signed this letter, including:
					</p>

					<ul class="signatories-list">
						<li>Stand.earth</li>
						<li>Sierra Club</li>
						<li>Greenpeace USA</li>
						<li>Public Citizen</li>
						<li>Friends of the Earth U.S.</li>
						<li>Hip Hop Caucus</li>
						<li>Amazon Employees for Climate Justice</li>
						<li>350 Seattle</li>
						<li>350 Triangle</li>
						<li>350 Yakima Climate Action</li>
						<li>Appalachian Voices</li>
						<li>Autistic Women & Nonbinary Network</li>
						<li>BDS Malaysia</li>
						<li>Beyond Fossil Fuel</li>
						<li>Center for Progressive Reform</li>
						<li>Clean Water for North Carolina</li>
						<li>Enabled Emissions Campaign</li>
						<li>EnergyTag</li>
						<li>Institutional Climate Action at UW</li>
						<li>Keensight Health</li>
						<li>Kenoshans Unite Against Microsoft Data Center (KUAMDC)</li>
						<li>KUUF Social Justice Committee</li>
						<li>LaPlaca and Associates LLC</li>
						<li>Legal Rights for the Salish Sea</li>
						<li>MPower Change</li>
						<li>National Association of Voice Actors</li>
						<li>NC Environmental Justice Network</li>
						<li>NextGen Competition</li>
						<li>No Azure for Apartheid</li>
						<li>Oil and Gas Action Network</li>
						<li>Olympic Climate Action</li>
						<li>Pertubuhan Pelindung Khazanah Alam</li>
						<li>Rise Up WV</li>
						<li>Seattle Democratic Socialists of America</li>
						<li>Seattle Women for Sustainable Change</li>
						<li>ShareAction</li>
						<li>Sierra Club North Carolina Chapter Foothills Group</li>
						<li>Sustainable AI Futures</li>
						<li>Tech Oversight Project</li>
						<li>Third Act</li>
						<li>Troublemakers</li>
						<li>USC SCALE (Student Coalition Against Labor Exploitation)</li>
						<li>Washington Council of Trout Unlimited</li>
						<li>Washington Physicians for Social Responsibility</li>
						<li>Wenatchee for Palestine</li>
						<li>WV Citizen Action Group</li>
					</ul>
				</div>

				<!-- Scroll-tracking sentinel -->
				<div bind:this={letterEnd} aria-hidden="true"></div>
			</div>
		</div>
	</div>
</div>

<style>
	.word-window {
		display: flex;
		flex-direction: column;
		border: 1px solid #999;
		box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.35);
		background: #f0f0f0;
		min-height: 600px;
	}

	/* Ribbon */
	.ribbon {
		background: var(--word-toolbar-bg, #f3f3f3);
		border-bottom: 1px solid #d4d4d4;
		padding: 0;
	}

	.ribbon-tabs {
		display: flex;
		gap: 0;
		padding: 0 0.5rem;
	}

	.ribbon-tab {
		padding: 0.4rem 0.75rem;
		font-size: 0.75rem;
		color: #444;
		cursor: default;
		border-bottom: 2px solid transparent;
	}

	.ribbon-tab.active {
		border-bottom-color: var(--word-ribbon-bg, #2b579a);
		color: var(--word-ribbon-bg, #2b579a);
		font-weight: 600;
	}

	/* Toolbar */
	.toolbar {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.35rem 0.75rem;
		background: var(--word-toolbar-bg, #f3f3f3);
		border-bottom: 1px solid #d4d4d4;
	}

	.toolbar-group {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.toolbar-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.6rem;
		height: 1.6rem;
		font-size: 0.8rem;
		border: 1px solid transparent;
		border-radius: 2px;
		cursor: default;
		color: #333;
	}

	.toolbar-btn:hover {
		background: #ddd;
		border-color: #bbb;
	}

	.toolbar-divider {
		width: 1px;
		height: 1.2rem;
		background: #ccc;
		margin: 0 0.25rem;
	}

	.toolbar-font {
		font-size: 0.7rem;
		color: #444;
		padding: 0.15rem 0.4rem;
		border: 1px solid #ccc;
		border-radius: 2px;
		background: #fff;
	}

	.toolbar-font-size {
		font-size: 0.7rem;
		color: #444;
		padding: 0.15rem 0.3rem;
		border: 1px solid #ccc;
		border-radius: 2px;
		background: #fff;
		width: 2rem;
		text-align: center;
	}

	/* Document Area */
	.doc-area {
		flex: 1;
		overflow-y: auto;
		background: #e8e8e8;
		padding: 1.5rem;
		display: flex;
		justify-content: center;
	}

	.doc-page {
		background: var(--word-doc-bg, #ffffff);
		box-shadow: 0 1px 6px rgba(0, 0, 0, 0.15);
		width: 100%;
		max-width: 700px;
		min-height: 500px;
	}

	.doc-content {
		padding: 2.5rem 3rem;
		font-family: 'Aptos', 'Calibri', 'Segoe UI', sans-serif;
		font-size: 0.9rem;
		line-height: 1.65;
		color: var(--word-text, #333);
	}

	.doc-content h2 {
		font-size: 2.25rem;
		font-weight: 700;
		margin-bottom: 1rem;
		color: #1a1a1a;
	}

	/* Blinking cursor */
	.cursor {
		font-weight: 100;
		color: #333;
		animation: blink 1s step-end infinite;
	}

	@keyframes blink {
		0%, 100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}

	.letter-addressee {
		font-weight: 600;
		margin-bottom: 0.75rem;
	}

	.doc-content p {
		margin-bottom: 0.75rem;
		font-size:1rem;
	}

	.doc-content a {
		color:blue;
		text-decoration:underline;
	}

	.letter-closing {
		margin-top: 1.5rem;
	}

	/* Signatories */
	.letter-divider {
		border: none;
		border-top: 1px solid #ccc;
		margin: 2rem 0;
	}

	.signatories-intro {
		font-style: italic;
		margin-bottom: 1rem;
	}

	.signatories-list {
		list-style: none;
		columns: 2;
		column-gap: 2rem;
		margin: 0 0 1rem 0;
		padding: 0;
	}

	.signatories-list li {
		padding: 0.3rem 0;
		font-weight: 600;
		break-inside: avoid;
	}

	.signatories-additional {
		color: #666;
		font-size: 0.85rem;
	}

	@media (max-width: 768px) {
		.word-window {
			overflow: hidden;
		}

		.doc-content {
			padding: 1.5rem 1.25rem;
		}

		.toolbar {
			display: none;
		}
	}
</style>
