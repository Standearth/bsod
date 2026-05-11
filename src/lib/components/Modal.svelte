<script lang="ts">
	let { open = $bindable(false), title = '', iframeSrc = '', wide = false }: {
		open: boolean;
		title?: string;
		iframeSrc?: string;
		wide?: boolean;
	} = $props();

	function close() {
		open = false;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') close();
	}
</script>

<!-- Preload iframe off-screen so it's ready when modal opens -->
{#if iframeSrc}
	<div class="preload">
		<iframe {title} src={iframeSrc} tabindex="-1"></iframe>
	</div>
{/if}

{#if open}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="overlay" onclick={close} onkeydown={handleKeydown}>
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="modal" class:modal--wide={wide} onclick={(e) => e.stopPropagation()} onkeydown={(e) => e.stopPropagation()}>
			<div class="modal-titlebar">
				<span class="modal-title">{title}</span>
				<button class="modal-close" onclick={close} aria-label="Close modal">✕</button>
			</div>
			<div class="modal-body">
				{#if iframeSrc}
					<iframe {title} src={iframeSrc} frameborder="0" allowfullscreen></iframe>
				{:else}
					<p>Form coming soon.</p>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	/* Hidden preload container — loads iframe in background */
	.preload {
		position: absolute;
		width: 0;
		height: 0;
		overflow: hidden;
		pointer-events: none;
		opacity: 0;
	}

	.preload iframe {
		width: 640px;
		height: 480px;
		border: none;
	}

	.overlay {
		position: fixed;
		inset: 0;
		z-index: 1000;
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}

	.modal {
		background: #fff;
		border-radius: 0;
		width: 100%;
		max-width: 640px;
		max-height: 90vh;
		display: flex;
		flex-direction: column;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
		border: 2px solid var(--win-border-dark, #808080);
	}

	.modal--wide {
		max-width: 860px;
	}

	.modal-titlebar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: var(--word-ribbon-bg, #2b579a);
		color: #fff;
		padding: 0.5rem 0.75rem;
		font-size: 0.85rem;
	}

	.modal-title {
		font-weight: 600;
	}

	.modal-close {
		background: none;
		border: none;
		color: #fff;
		font-size: 1.1rem;
		line-height: 1;
		padding: 0.15rem 0.4rem;
		border-radius: 2px;
	}

	.modal-close:hover {
		background: #e81123;
	}

	.modal-body {
		flex: 1;
		overflow: auto;
	}

	.modal-body iframe {
		width: 100%;
		height: 70vh;
		border: none;
	}

	.modal-body p {
		padding: 3rem;
		text-align: center;
		color: #666;
	}
</style>
