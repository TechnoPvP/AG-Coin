<script lang="ts">
	import type { Difficulty } from 'shared/blog';
	import Icon from '@iconify/svelte';
	type Style = 'filled' | 'outlined';

	const COLORS = {
		easy: 'rgba(2, 192, 118, 0.5)',
		medium: 'rgba(240, 185, 11, 0.5)',
		hard: 'rgba(217, 48, 78, 0.5)'
	};

	export let selectable;
	export let selected = false;
	export let difficulty: Difficulty;
	export let selectedTags: Difficulty[] = ['easy', 'hard'];

	function selectBadge() {
		if (!selectable) return;

		if (!selected) {
			selectedTags = [...selectedTags, difficulty];
			return;
		}

		selectedTags = selectedTags.filter((val) => val !== difficulty);
	}

	$: selected = selectedTags.includes(difficulty);
</script>

<div class="badge" style="--color:{COLORS[difficulty]}" class:selected on:click={selectBadge}>
	<span>{difficulty}</span>
	{#if selectable}
		<Icon
			icon={selected ? 'mdi:check' : 'mdi:window-close'}
			color="inherit"
			width="15px"
			height="15px"
			style={selected ? null : 'transform: rotate(45deg)'}
		/>
	{/if}
</div>

<style lang="scss">
	.badge {
		display: inline-flex;
		gap: 1em;
		justify-content: space-between;
		align-items: center;
		border-radius: 20px;
		padding: 4px 15px;
		min-height: 27px;
		text-transform: capitalize;
		background-color: transparent;
		color: var(--c-gray-s1);
		border: 1px solid var(--color);

		transition: background-color 0.15s ease-out;
	}
	.selected {
		color: var(--c-white);
		background-color: var(--color);
	}
	span {
		font-size: 12px;
	}
</style>
