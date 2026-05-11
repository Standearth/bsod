<script lang="ts">
	import '$lib/styles/global.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Microsoft, Your Climate Plan Ran Into a Problem</title>
	<meta name="description" content="An open letter to Microsoft demanding accountability on climate commitments." />
</svelte:head>

{@render children()}
