<script lang="ts">
	import Breadcrumbs from '$lib/global/Breadcrumbs.svelte';
	export let title;
	export let desc = null;
	export let large = false;
	export let spaced = false;
</script>

<header class:large={!large} class:spaced>
	<h1>{title}</h1>
	{#if desc}
		<h3>{desc}</h3>
	{/if}
	<Breadcrumbs />
</header>

<style lang="scss">
	.large {
		text-align: left;
		max-width: 30ch;
		margin: 0;

		h1 {
			font-size: var(--fs-h1);
		}
		h3 {
			font-size: var(--fs-body);
			color: var(--c-gray-s1);
		}
	}
	header {
		text-align: center;
		max-width: 70ch;
		margin: 4em auto;

		&.spaced {
			padding-top: var(--pd-lg);
			padding-bottom: var(--pd-lg);
		}

		h1 {
			font-size: 50px;
			font-weight: var(--fw-black);
		}
		h3 {
			font-weight: 400;
		}
	}
</style>
