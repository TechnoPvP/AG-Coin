<script lang="ts">
	import TopBar from '$lib/auth/TopBar.svelte';
	import AlertIcon from '$lib/global/Alert-Icon.svelte';
	import Button from '$lib/global/Button.svelte';
	import Input from '$lib/global/Input.svelte';
	import InputError from '$lib/global/InputError.svelte';
	import Loader from '$lib/dashboard/Loader.svelte';
	import { emailValidation, passwordValidation } from '$lib/validation/loginV';
	import { page, session } from '$app/stores';
	import { goto } from '$app/navigation';

	let querying, error;
	let email = $page.query.get('email');
	let password;

	async function handleFormSubmit(event) {
		error = '';
		querying = true;

		const response = await fetch('http://localhost:5000/api/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password }),
			credentials: 'include'
		})
			.then((result) => result.json())
			.catch(() => undefined);

		querying = false;
		if (!response) return (error = 'Unexpected error, please try again later.');
		if (response.error) return (error = response.error);

		console.log(response);

		$session.user = response;
		goto(`/dashboard/home`);
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

	.error {
		width: 100%;
		color: var(--c-red);
		display: flex;
		font-weight: 500;
		gap: 10px;

		:global(svg) {
			width: 17px;
			height: 17px;
		}
	}
</style>
