<script lang="ts">
	import type { Difficulty } from 'shared/blog';
	type Style = 'filled' | 'outlined';

	const COLORS = {
		easy: 'rgba(2, 192, 118, 0.5)',
		medium: 'rgba(240, 185, 11, 0.5)',
		hard: 'rgba(217, 48, 78, 0.5)'
	};

	export let selectable;
	export let selected = false;
	export let difficulty: Difficulty;
	export let selectedTags: Difficulty[] = ['easy', 'hard', 'medium'];

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
		<img src="/icons/{selected ? 'checkmark' : 'x'}.svg" alt="Checkmark" />
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

		img {
			width: 11px;
			height: 11px;
			transform: rotate(45deg);
		}
	}
	.selected {
		color: var(--c-white);
		background-color: var(--color);

		img {
			transform: rotate(0deg);
		}
	}
	span {
		font-size: 12px;
	}
</style>
