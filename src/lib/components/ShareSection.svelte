<script lang="ts">
	import { trackSocialShare } from '$lib/analytics';
	import threadsIcon from '$lib/assets/threads.webp';

	const shareUrl = 'https://microsoftlies.com';
	const shareText = 'Microsoft, your climate plan ran into a problem. Read the open letter:';

	const socials: Array<{
		name: string;
		color: string;
		href: string;
		svg?: string;
		img?: string;
	}> = [
		{
			name: 'Facebook',
			color: '#1877F2',
			svg: '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>',
			href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
		},
		{
			name: 'Bluesky',
			color: '#0085FF',
			svg: '<path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.596 6.449.77 2.819 3.516 3.745 6.07 3.478a9.1 9.1 0 01-.398.058c-3.66.516-6.611 2.434-2.07 6.247 4.968 3.5 7.114-.88 8.105-3.994.165-.518.244-.79.262-.579.018-.211.097.061.262.579.991 3.114 3.137 7.494 8.105 3.994 4.541-3.813 1.59-5.731-2.07-6.247a9.1 9.1 0 01-.398-.058c2.554.267 5.3-.659 6.07-3.478C24.752 9.418 25.13 4.458 25.13 3.768c0-.688-.139-1.86-.902-2.203-.659-.299-1.664-.621-4.3 1.24C17.176 4.747 14.217 8.686 13.13 10.8h-1.13z" transform="scale(0.96) translate(0.5, 0)"/>',
			href: `https://bsky.app/intent/compose?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`
		},
		{
			name: 'Threads',
			color: '#000000',
			img: threadsIcon,
			href: `https://www.threads.net/intent/post?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`
		},
		{
			name: 'LinkedIn',
			color: '#0A66C2',
			svg: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
			href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
		},
		{
			name: 'Email',
			color: '#EA4335',
			svg: '<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>',
			href: `mailto:?subject=${encodeURIComponent('Open Letter to Microsoft')}&body=${encodeURIComponent(shareText + ' ' + shareUrl)}`
		}
	];
</script>

<div class="share">
	<h3 class="share-heading">SHARE THIS CALL TO ACTION</h3>

	<div class="share-buttons">
		{#each socials as social}
			<a
				class="share-btn"
				href={social.href}
				target="_blank"
				rel="noopener noreferrer"
				title="Share on {social.name}"
				aria-label="Share on {social.name}"
				style="background-color: {social.color}"
				onclick={() => trackSocialShare(social.name)}
			>
				{#if social.img}
					<img class="share-icon-img" src={social.img} alt={social.name} />
				{:else}
					<svg class="share-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						{@html social.svg}
					</svg>
				{/if}
			</a>
		{/each}
	</div>
</div>

<style>
	.share {
		border: 1px solid #ddd;
		border-radius: 4px;
		padding: 1rem;
		background: #fafafa;
	}

	.share-heading {
		font-size: 0.85rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: #444;
		margin-bottom: 0.75rem;
	}

	.share-buttons {
		display: flex;
		gap: 0.6rem;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	.share-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		color: #fff;
		transition: transform 0.15s ease, opacity 0.15s ease;
	}

	.share-btn:hover {
		transform: scale(1.1);
		opacity: 0.9;
	}

	.share-icon {
		width: 1.15rem;
		height: 1.15rem;
	}

	.share-icon-img {
		width: 1.15rem;
		height: 1.15rem;
		object-fit: contain;
		filter: brightness(0) invert(1);
	}
</style>
