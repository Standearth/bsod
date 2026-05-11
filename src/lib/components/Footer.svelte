<script lang="ts">
	import logo from '$lib/assets/logo_25a.webp';
</script>

<footer class="footer">
	<div class="footer-content">
		<div class="footer-logo">
			<a href="https://stand.earth"><img src={logo} alt="Stand.earth logo" class="logo" /></a>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: #1a1a1a;
		color: #999;
		padding: 2rem;
	}

	.footer-content {
		max-width: 1280px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.footer-logo {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 48px;
		width: auto;
	}

	.footer-copy {
		font-size: 0.75rem;
		color: #666;
	}
</style>
