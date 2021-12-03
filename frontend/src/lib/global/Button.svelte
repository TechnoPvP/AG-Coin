<script lang="ts">
	type Size = 'small' | 'regular' | 'large' | 'stretch';
	type Style = 'filled' | 'outlined' | 'none';
	type Type = 'button' | 'link';

	const COLORS = {
		blue: 'var(--c-blue)',
		red: 'var(--c-red)'
	};

	export let size: Size = 'regular';
	export let style: Style = 'filled';
	export let type: Type = 'link';
	export let color: keyof typeof COLORS = 'blue';
	export let href: null | string = null;
	export let disabled = false;
</script>

{#if type === 'link'}
	<a on:click class="style--{style} size--{size}" style="--color:{COLORS[color]} " {href}>
		<slot />
	</a>
{/if}

{#if type == 'button'}
	<button on:click class="style--{style} size--{size}" style="--color:{COLORS[color]}" {disabled}>
		<slot />
	</button>
{/if}

<style lang="scss">
	a,
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px 16px;
		background-color: var(--color);
		border-radius: var(--br-sm);
		color: white;
		white-space: nowrap;
		min-height: 37px;
	}
	button:disabled {
		opacity: 0.5;
	}
	button {
		appearance: none;
		border: none;
		outline: none;
	}
	.style {
		&--outlined {
			border: 1px solid var(--color);
			background-color: transparent;
		}
		&--none {
			background-color: transparent;
			border: none;
		}
	}
	.size {
		&--small {
			padding: 7px 5px;
		}
		&--regular {
			padding: 10px 16px;
			width: max-content;
		}
		&--large {
			padding: 10px 40px;
		}
		&--stretch {
			padding: 10px 16px;
			width: 100%;
		}
	}
</style>
