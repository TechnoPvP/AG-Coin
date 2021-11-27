<script lang="ts">
	import { text } from 'svelte/internal';

	type Type = 'text' | 'textarea' | 'email' | 'password';
	type Size = 'small' | 'regular' | 'stretch';

	export let name;
	export let type: Type = 'text';
	export let placeholder = null;
	export let value = null;
	export let size = 'regular';
	export let label = null;
</script>

<div>
	{#if label}
		<label for={name}>{label}</label>
	{/if}

	{#if type == 'text'}
		<input type="text" {name} {placeholder} bind:value />
	{/if}

	{#if type == 'email'}
		<input type="email" {name} {placeholder} bind:value />
	{/if}

	{#if type == 'password'}
		<input type="password" {name} {placeholder} bind:value />
	{/if}

	{#if type == 'textarea'}
		<textarea />
	{/if}
</div>

<style lang="scss">
	input {
		background-color: var(--tran-s2);
		border: none;
		font-size: var(--fs-body);
		padding: 15px 17px;
		color: var(--c-gray-s1);
		outline: none;
		appearance: none;
	}
	div {
		display: flex;
		flex-direction: column;
		gap: 0.3em;
		width: 100%;
	}
	label {
		color: var(--c-gray-s1);
	}
	input::placeholder {
		text-transform: capitalize;
		color: var(--tran-s1);
	}
</style>
