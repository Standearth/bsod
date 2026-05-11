<script lang="ts">
	let {
		onSignIndividual,
		onSignOrganization
	}: {
		onSignIndividual: () => void;
		onSignOrganization: () => void;
	} = $props();
</script>

<div class="sign-on">
	<button class="sign-btn sign-btn--individual" onclick={onSignIndividual}>
		<span class="sign-btn-text">
			<strong>Sign as an Individual</strong>
			<small>Add your name to the letter</small>
		</span>
		<span class="sign-btn-arrow">→</span>
	</button>

	<button class="sign-btn sign-btn--organization" onclick={onSignOrganization}>
		<span class="sign-btn-text">
			<strong>Sign as an Organization</strong>
			<small>Endorse on behalf of your org</small>
		</span>
		<span class="sign-btn-arrow">→</span>
	</button>
</div>

<style>
	.sign-on {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.sign-btn {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.85rem 1rem;
		border: 2px solid transparent;
		border-radius: 4px;
		color: #fff;
		font-size: 0.9rem;
		text-align: left;
		transition: background-color 0.15s ease, transform 0.1s ease;
	}

	.sign-btn:hover {
		transform: translateY(-1px);
	}

	.sign-btn:active {
		transform: translateY(0);
	}

	.sign-btn--individual {
		background: var(--cta-primary, #0078d7);
		border-color: var(--cta-primary, #0078d7);
	}

	.sign-btn--individual:hover {
		background: var(--cta-primary-hover, #005a9e);
	}

	.sign-btn--organization {
		background: var(--cta-secondary, #107c10);
		border-color: var(--cta-secondary, #107c10);
	}

	.sign-btn--organization:hover {
		background: var(--cta-secondary-hover, #0b5e0b);
	}

	.sign-btn-text {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
	}

	.sign-btn-text strong {
		font-weight: 600;
		font-size: 0.95rem;
	}

	.sign-btn-text small {
		font-size: 0.75rem;
		opacity: 0.85;
	}

	.sign-btn-arrow {
		font-size: 1.25rem;
		flex-shrink: 0;
		margin-left: 0.75rem;
		opacity: 0.8;
		transition: transform 0.15s ease;
	}

	.sign-btn:hover .sign-btn-arrow {
		transform: translateX(3px);
		opacity: 1;
	}
</style>
