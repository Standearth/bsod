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
				<h2 class="letter-title">Microsoft is a bad neighbor.<span class="cursor">|</span></h2>

				<p>
					As Big Tech billionaires rush to bulldoze through communities to build AI data centers, Microsoft claims to care about the climate, promises to “do things differently,” and says it will be a “good neighbor.”
				</p>

				<p class="callout">Microsoft is lying.</p>

				<p>
					The truth? Microsoft is sidelining communities and making deals with fossil fuel companies while its contracted data centers illegally run noisy gas generators – just like Elon Musk’s xAI.
				</p>

				<p class="callout">It’s time to demand better.</p>

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

	.doc-content p {
		margin-bottom: 0.75rem;
		font-size:1.1rem;
	}

	.doc-content .callout {
		font-size: 1.35rem;
		font-weight: 700;
		color: #1a1a1a;
		margin: 1.25rem 0;
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
