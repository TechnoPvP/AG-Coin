<script lang="ts">
	import Icon from '@iconify/svelte';

	type Type = 'checkmark' | 'dash';

	export let id = null;
	export let checked = false;
	export let type: Type = 'checkmark';
</script>

<div class="checkbox">
	<span>
		{#if checked}
			{#if type == 'checkmark'}
				<Icon icon="mdi:check" color="white" width="16px" height="16px" vAlign  />
			{:else}
				<div class="dash" />
			{/if}
		{/if}
	</span>
	<input type="checkbox" data-id={id} bind:checked on:change />
</div>

<style lang="scss">
	.checkbox {
        display: inline-flex;
		position: relative;
		justify-content: center;
		align-items: center;
        border-radius: var(--br-sm);
	}
	input {
        display: inline-flex;
		padding: 9px;
        width: 10px;
        margin: 0;
		appearance: none;
		border-radius: inherit;
		background-color: white;

		&:checked {
			background-color: var(--c-blue);
		}
	}
	span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		pointer-events: none;
	}
	.dash {
        width: 8px;
		height: 2px;
		background-color: white;
	}
</style>
