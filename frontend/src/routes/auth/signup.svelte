<script>
	import { goto } from '$app/navigation';
	import PassStrength from '$lib/auth/PassStrength.svelte';
	import TopBar from '$lib/auth/TopBar.svelte';
	import Loader from '$lib/dashboard/Loader.svelte';
	import Button from '$lib/global/Button.svelte';
	import Input from '$lib/global/Input.svelte';
	import InputError from '$lib/global/InputError.svelte';

	let first_name, last_name, email, password;
	let querying, error;

	async function signupRequest() {
		// querying = true;
		console.log( "clicked" );
		const response = await fetch('http://localhost:5000/api/auth/register', {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			mode: 'cors',
			method: 'POST',
			body: JSON.stringify({ first_name, last_name, email, password })
		});
		const result = await response.json();

		if (response.ok) {
			goto(`login?email=${email}`);
		} else {
			error = result?.error;
		}
	}
	function handleSubmit() {
		querying = signupRequest();
	}
</script>

<TopBar type="signup" />
<form on:submit|preventDefault={handleSubmit}>
	<header>
		<span>Create an account to contiue</span>
		<h1>Getting Started</h1>
	</header>
	<InputError {error} />
	<div class="grouped">
		<Input name="first_name" placeholder="Full name" label="First name" bind:value={first_name} />
		<Input name="last_name" placeholder="Full name" label="Last name" bind:value={last_name} />
	</div>
	<Input type="email" name="email" placeholder="Email" label="Email address" bind:value={email} />
	<Input
		type="password"
		name="password"
		placeholder="Password"
		label="Password"
		bind:value={password}
	/>

	<PassStrength pass={password} />

	<div class="submit">
		<Button type="submit" size="stretch">
			{#await querying}
				<Loader />
			{:then result}
				Create Account
			{/await}
		</Button>
	</div>
</form>

<style lang="scss">
	header {
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 0.4em;
	}
	.grouped {
		display: flex;
		justify-content: space-between;
		gap: var(--pd-md);
		width: 100%;
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
		display: flex;
		gap: 10px;
		color: var(--c-red);
		
		:global(svg) {
			width: 17px;
			height: 17px;
		}
	}
</style>
