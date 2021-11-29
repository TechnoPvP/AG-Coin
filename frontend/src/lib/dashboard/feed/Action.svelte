<script lang="ts">
	import HeartIcon from './HeartIcon.svelte';


	export let src;
	export let name;
	export let liked = false;
</script>

<div class="action" on:click>
	{#if name == 'like'}
		<HeartIcon active={liked} />
	{:else}
		<img {src} alt="Action icon" />
	{/if}
	<span>{name}</span>
</div>

<style lang="scss">
	.action {
		display: flex;
		align-items: center;
		gap: var(--pd-sm);

		img {
			width: var(--size, 22px);
			height: var(--size, 22px);
		}

		&:hover {
			cursor: pointer;
		}
		span {
			text-transform: capitalize;
		}
	}
</style>
