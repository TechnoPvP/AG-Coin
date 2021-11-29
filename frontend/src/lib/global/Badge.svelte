<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	// export let name;
	type Style = 'filled' | 'outlined';

	const COLORS = {
		yellow: 'var(--c-yellow)',
		red: 'var(--c-red)',
		green: 'var(--c-green)',
		black: 'var(--c-black-s2)'
	};

	export let selected = false;
	export let style: Style = 'filled';
	export let color: keyof typeof COLORS = 'black';
	export let value;
    export let selectedTags = [];
    
	function selectBadge() {
        if (!selected) {
            selectedTags = [...selectedTags, value]
            return;
        }
        selectedTags = selectedTags.filter((val) => val !== value);
	}
    
    $: selected = selectedTags.includes(value)
</script>

<div
	class="badge style--{style}"
	style="--color:{COLORS[color]}"
	class:selected
	on:click={selectBadge}
>
	<span>{value}</span>
	<img src="/icons/{selected ? 'checkmark' : 'x'}.svg" alt="Checkmark" />
</div>

<style lang="scss">
	.badge {
		display: inline-flex;
		gap: 1em;
		justify-content: space-between;
		align-items: center;
		border-radius: 20px;
		background-color: var(--color);
		padding: 4px 15px;
		min-height: 27px;
		color: var(--c-gray-s3);
        text-transform: capitalize;

        img {
            width: 11px;
            height: 11px;
            transform: rotate(45deg);
        }
	}
	.selected {
		color: var(--c-white);

        img {
            transform: rotate(0deg);
        }
	}
	.style {
		&--outlined {
			background-color: transparent;
			border: 1px solid var(--color);
		}
	}
	span {
		font-size: 12px;
	}
</style>
