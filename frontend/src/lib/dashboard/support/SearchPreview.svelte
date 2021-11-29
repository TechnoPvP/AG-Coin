<script lang="ts">
	import Badge from '$lib/global/Badge.svelte';

	export let category;
	export let title;
	export let desc;
</script>

<a class="wrap" href="/">
	<span>{category}</span>
	<h3>{@html title}</h3>
	<p>
		{#if desc?.length > 150}
			{desc.slice(0, 150)}...
		{:else}
			{desc}
		{/if}
	</p>
</a>

<style lang="scss">
	.wrap {
		display: flex;
		gap: var(--pd-xxs);
		flex-direction: column;
		padding: var(--pd-md);
		border-radius: var(--br-md);
		transition: background-color 0.25s linear, transform 0.2s linear;

		span {
			color: var(--c-blue);
		}
		p {
			color: var(--c-gray-s1);
		}

		&:hover {
			background-color: var(--tran-s2);
			transform: translateY(-2px);
		}
	}
    :global(mark) {
        background-color: rgba(255, 251, 0, 0.884);
    }
</style>
