<script lang="ts">
	let { title = 'Untitled', icon = '' }: {
		title?: string;
		icon?: string;
	} = $props();
</script>

<div class="titlebar">
	<div class="titlebar-left">
		{#if icon}
			<span class="titlebar-icon">{icon}</span>
		{/if}
		<span class="titlebar-title">{title}</span>
	</div>
	<div class="titlebar-buttons">
		<button class="win-btn minimize" aria-label="Minimize">─</button>
		<button class="win-btn maximize" aria-label="Maximize">☐</button>
		<button class="win-btn close" aria-label="Close">✕</button>
	</div>
</div>

<style>
	.titlebar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: var(--word-ribbon-bg, #2b579a);
		color: #fff;
		padding: 0.35rem 0.5rem;
		font-size: 0.8rem;
		user-select: none;
	}

	.titlebar-left {
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}

	.titlebar-icon {
		font-size: 1rem;
	}

	.titlebar-title {
		font-weight: 400;
		opacity: 0.95;
	}

	.titlebar-buttons {
		display: flex;
		gap: 0;
	}

	.win-btn {
		background: none;
		border: none;
		color: #fff;
		width: 2rem;
		height: 1.6rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.75rem;
		line-height: 1;
	}

	.win-btn:hover {
		background: rgba(255, 255, 255, 0.15);
	}

	.win-btn.close:hover {
		background: #e81123;
	}
</style>
