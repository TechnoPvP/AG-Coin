<script lang="ts">
	import TopBar from '$lib/auth/TopBar.svelte';
	import Button from '$lib/global/Button.svelte';
	import Input from '$lib/global/Input.svelte';
	import InputError from '$lib/global/InputError.svelte';
	import Loader from '$lib/dashboard/Loader.svelte';
	import { emailValidation, passwordValidation } from '$lib/validation/loginV';
	import { page, session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let querying, error;
	let email = $page.query.get('email'),
		password;

	async function handleFormSubmit(event) {
		querying = true;

		const response = await fetch('http://localhost:5000/api/auth/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			mode: 'cors',
			body: JSON.stringify({ email, password })
		});
		const result = await response.json();
		querying = false;
		if (response.ok) {
			goto(`${result.redirect}`);
		} else {
			/* TODO: Does svelte not update comp when value is the */
			error = null;
			error = result?.error;
		}
	}

	$: validate = {
		email: () => {
			return emailValidation.validate({ email }).error?.message;
		},
		password: () => {
			return passwordValidation.validate({ password }).error?.message;
		}
	};
	$: canSubmit = !Object.values(validate).every((val) => !val());
</script>

<TopBar type="login" />
<form on:submit|preventDefault={handleFormSubmit}>
	<header>
		<span>Weclome back, Adam</span>
		<h1>Sign In Below</h1>
	</header>
	{#key error}
		<InputError {error} />
	{/key}
	<Input
		type="email"
		name="email"
		placeholder="Email"
		label="Email"
		bind:value={email}
		validation={validate.email}
	/>
	<Input
		type="password"
		name="password"
		placeholder="password"
		label="Password"
		bind:value={password}
		validation={validate.password}
	/>

	<div class="submit">
		<Button type="button" size="stretch" disabled={canSubmit}>
			{#if querying}
				<Loader />
			{:else}
				Sign In
			{/if}
		</Button>
		<span>Forgot your password? <a href="/">Reset password</a></span>
	</div>
</form>

<style lang="scss">
	header {
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 0.4em;
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: auto auto;
		width: 500px;
		max-width: 100%;
		gap: 30px;
	}
	.submit {
		width: 100%;

		span {
			margin-top: 10px;
		}
	}
	span {
		display: block;
		text-align: center;
		color: var(--c-gray-s3);
	}
	a {
		color: var(--c-blue);
	}
</style>
