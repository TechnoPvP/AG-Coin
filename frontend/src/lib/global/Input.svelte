<script lang="ts">
	type Type = 'text' | 'textarea' | 'email' | 'password';
	type Size = 'small' | 'regular' | 'stretch';

	export let name;
	export let type: Type = 'text';
	export let placeholder = null;
	export let value = null;
	export let size = 'regular';
	export let label = null;

	let errorMessage;
	export let validation: Function = null;

	const handleValidation = () => {
		if (!validation) return;

		errorMessage = validation();
	};
	$: if (value) errorMessage = false;
</script>

<div>
	<!-- Input Label -->
	{#if label}
		<label for={name}>{label}</label>
	{/if}

	<!-- Input Types -->
	{#if type == 'text'}
		<input type="text" {name} {placeholder} bind:value />
	{/if}

	{#if type == 'email'}
		<input
			type="email"
			{name}
			{placeholder}
			bind:value
			on:blur={handleValidation}
		/>
		{#if errorMessage}
			<span>{errorMessage}</span>
		{/if}
	{/if}

	{#if type == 'password'}
		<input type="password" {name} {placeholder} bind:value on:blur={handleValidation} />
		{#if errorMessage}
			<span>{errorMessage}</span>
		{/if}
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
	span {
		color: var(--c-red);
	}
	div {
		display: flex;
		flex-direction: column;
		gap: 0.3em;
		width: 100%;
	}
	label {
		color: var(--c-gray-s2);
		text-transform: capitalize;
	}
	input::placeholder {
		text-transform: capitalize;
		color: var(--tran-s1);
	}
</style>
