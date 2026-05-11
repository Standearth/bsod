<script lang="ts">
	// Placeholder endorsing organizations
	const endorsers: string[] = [
		'Stand.earth',
		'Greenpeace',
		'Sierra Club',
		'350.org',
		'Rainforest Action Network',
		'Friends of the Earth',
		'Oil Change International',
		'Climate Action Network',
		'Indigenous Environmental Network',
		'Sunrise Movement'
	];
</script>

<div class="endorsers">
	<h3 class="endorsers-heading">Endorsing Organizations</h3>

	<ul class="endorsers-list">
		{#each endorsers as org}
			<li class="endorser">{org}</li>
		{/each}
	</ul>

	<p class="endorsers-more">
		+ {50 - endorsers.length} more organizations
	</p>
</div>

<style>
	.endorsers {
		border: 1px solid #ddd;
		border-radius: 4px;
		padding: 1rem;
		background: #fafafa;
	}

	.endorsers-heading {
		font-size: 0.85rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: #444;
		margin-bottom: 0.6rem;
	}

	.endorsers-list {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
	}

	.endorser {
		background: #fff;
		border: 1px solid #ddd;
		border-radius: 3px;
		padding: 0.25rem 0.55rem;
		font-size: 0.72rem;
		color: #444;
		white-space: nowrap;
	}

	.endorsers-more {
		margin-top: 0.5rem;
		font-size: 0.72rem;
		color: #888;
		font-style: italic;
	}
</style>
