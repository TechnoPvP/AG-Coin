<script lang="ts">
	import Breadcrumbs from '$lib/global/Breadcrumbs.svelte';
	export let title;
	export let desc = null;
	export let large = false;
	export let spaced = false;
	export let breadcrumps = true;
</script>

<header class:large class:spaced>
	<h1>{title}</h1>
	{#if desc}
		<p>{desc}</p>
	{/if}
	{#if breadcrumps}
		<Breadcrumbs />
	{/if}
</header>

<style lang="scss">
	header {
		text-align: left;
		max-width: 30ch;
		margin: 0;

		&.spaced {
			padding-top: var(--pd-lg);
			padding-bottom: var(--pd-lg);
		}

		h1 {
			font-size: var(--fs-h1);
		}
		p {
			font-size: var(--fs-body);
			font-weight: 300;
			color: var(--c-gray-s3);
		}
	}
	.large {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		max-width: 70ch;
		margin: 4em auto;

		h1 {
			font-size: 50px;
			font-weight: var(--fw-bold);
		}
		p {
			font-weight: 300;
			font-size: var(--fs-body);
		}
	}
</style>
