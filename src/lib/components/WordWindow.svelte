<script lang="ts">
	import { onMount } from 'svelte';
	import WindowTitleBar from './WindowTitleBar.svelte';
	import { trackLetterScrolledToBottom } from '$lib/analytics';
	import data from '$lib/data.json';

	let {
		onSignIndividual,
		onSignOrganization
	}: {
		onSignIndividual: () => void;
		onSignOrganization: () => void;
	} = $props();

	let letterEnd: HTMLDivElement = undefined!;
	let showAllSignatories = $state(false);

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

<div class="word-window" id="letter">
	<WindowTitleBar title="Microsoft's Data Center Problems" icon="📄" />

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
	<div class="doc-area" >
		<div class="doc-page">
			<div class="doc-content">
				<h2 class="letter-title">Microsoft is in trouble<span class="cursor">|</span></h2>

				<p>
					Microsoft has an image problem, a financial problem — and increasingly a community opposition problem. As Microsoft (MSFT) ramps up its data center buildout, public opposition from communities is growing — and frequently, it’s everyday people who are winning, costing Microsoft dearly in the process.

				</p>

				<p>
					Microsoft claims that it works with communities to reduce noise pollution and mitigate environmental damage, and <a href="https://news.microsoft.com/datacenters/" target="_blank" rel="noopener noreferrer">insists that these data centers bring economic benefits to surrounding areas</a>. Microsoft also made a significant commitment to end the anti-democratic practice of <a href="https://theassemblync.com/news/business/person-county-microsoft-data-center-nondisclosure-agreements/" target="_blank" rel="noopener noreferrer">non-disclosure agreements (NDAs)</a>. However, <a href="https://futurism.com/artificial-intelligence/microsoft-ai-data-center-lawsuit-neighbors" target="_blank" rel="noopener noreferrer">actions and impacts speak louder than words</a>. As Microsoft consistently breaks its promises through a seemingly never ending onslaught of unsustainable data centers, targeted communities report being shut out of critical information and decisions — and <a href="https://www.mlive.com/news/grand-rapids/2026/06/we-dont-want-you-lowell-residents-protest-microsofts-data-center-plan.html" target="_blank" rel="noopener noreferrer">they are catching on</a>.

				</p>

				<p>
					People are beginning to see Microsoft’s vows to "unleash innovation" for what they are: nothing more than cynical corporate marketing that attempts to build as much compute as possible without considering the cost to impacted communities. While Microsoft slips through these deals without meaningful transparency or community benefit, local residents pay the price in the form of <a href="https://www.nytimes.com/2026/07/14/business/energy-environment/pjm-electricity-prices-data-centers.html" target="_blank" rel="noopener noreferrer">skyrocketing electricity bills</a>, increased <a href="https://spectrumnews1.com/wi/milwaukee/news/2026/04/10/neighbors-frustrated-with-data-center-s-noise" target="_blank" rel="noopener noreferrer">noise</a>, <a href="https://www.datacenterdynamics.com/en/news/microsoft-emissions-up-23-since-2020-blames-ai-data-centers/" target="_blank" rel="noopener noreferrer">air</a>, and <a href="https://www.wpr.org/news/microsoft-data-centers-8-million-gallons-water-each-year" target="_blank" rel="noopener noreferrer">water</a> pollution, as well as growing health impacts.
				</p>

				<p>
					The real question communities face is this: Do you trust Microsoft to build out data centers responsibly and sustainably, and to keep your power and water bills from skyrocketing? 
				</p>

				<p>
					Increasingly, the answer is a resounding NO. In a recent Gallup poll, <a href="https://www.gallup.com/poll/709772/americans-oppose-data-centers-area.aspx" target="_blank" rel="noopener noreferrer">71% of Americans</a> say they oppose or strongly oppose additional data centers. In fact, only 7% of respondents “strongly support” the idea of a data center near them. In the history of dumb ideas, it joins the <a href="https://www.yougov.com/en-us/articles/35852-lions-and-tigers-and-bears-what-animal-would-win-f" target="_blank" rel="noopener noreferrer">6% of U.S. men who say they could beat a grizzly bear in a fight</a>. When your primary vehicle for growth is polling neck and neck with fistfighting a grizzly, alarm bells should be going off up and down the line.
				</p>

				<p>The question for shareholders, stakeholders, and investors is more serious: Do you trust such a contentious business plan with your retirement savings, or that of your clients? As $MSFT steamrolls on undeterred and continues to dump billions into a reckless data center bet without taking community or investor concerns seriously, recent headlines suggest that further investment in the company is risky at best. </p>
				<ul><li>
					As of August 2026, over 530 local laws in the U.S. restrict or outright ban new data centers. Notably, <a href="https://www.governor.ny.gov/news/first-statewide-moratorium-new-hyperscale-data-centers-launched-governor-kathy-hochul" target="_blank" rel="noopener noreferrer">New York became the first to put a statewide data center moratorium into effect in July 2026</a>. Even more remarkable, Texas Governor Greg Abbott — who recently called for Texas to be the “epicenter” of artificial intelligence — has reversed course, <a href="https://www.eenews.net/articles/texas-governor-puts-data-center-grid-approvals-on-hold" target="_blank" rel="noopener noreferrer">declaring that no new data centers can be brought online until impacts on grid stability have a solution</a>.
				</li><li>
					Economists are urging caution, suggesting that <a href="https://www.cnbc.com/2026/07/27/jim-cramer-warns-ai-circular-financing-echoes-dot-com-bubble.html" target="_blank" rel="noopener noreferrer">AI and its infrastructure are on a similar boom-and-bust track to the dot com bubble of the 90s</a>, and warn that there are many safer, less risky, more sustainable places to invest currently.
				</li><li>
					As public opposition continues to grow, data centers have become a legitimate legislative target, and grassroots organizing from communities poses a meaningful threat to construction being completed on time and on budget. In only the first quarter of 2026, <a href="https://datacenterwatch.org/q1-2026" target="_blank" rel="noopener noreferrer">75 data centers worth a collective $130 billion were disrupted</a>.
				</li></ul>

				<p>Unless Microsoft begins truly engaging with communities and starts taking its sustainability goals seriously, its data center expansion plans are dead in the water. </p>

				<p>If you’re interested in joining the campaign for a better, cleaner, more responsible Microsoft, <a href="#" onclick={(e) => { e.preventDefault(); onSignIndividual(); }}>join tens of thousands of supporters by adding your name here</a>. If you represent an organization or business, <a href="#" onclick={(e) => { e.preventDefault(); onSignOrganization(); }}>you can officially add your organization here</a>. </p>

				<p>From local groups fighting new data centers in their own communities to household names like Stand.earth, Sierra Club, Greenpeace USA, Public Citizen, Friends of the Earth U.S., Hip Hop Caucus, Amazon Employees for Climate Justice, Beyond Fossil Fuel, Third Act and so many more, this coalition is strong and only getting stronger. In early 2026, over 150 organizations signed on to our open letter, demanding answers from Microsoft on its climate and community impacts. <a href="/letter">You can view the original letter and all signers here. </a></p>

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

	ul {
		padding-left:30px;
		padding-bottom:10px;
		font-size:1rem;
	}
	li {
		padding-bottom:15px;
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

	.signatories-list.no-gap {
		margin-bottom: 0;
	}

	.read-more-btn {
		display: block;
		margin: 0.5rem 0 1.5rem 0;
		padding: 0.5rem 0;
		background: none;
		border: none;
		color: #000;
		font-size: 0.85rem;
		font-weight: 600;
		cursor: pointer;
		text-decoration: underline;
	}

	.read-more-btn:hover {
		opacity: 0.7;
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
