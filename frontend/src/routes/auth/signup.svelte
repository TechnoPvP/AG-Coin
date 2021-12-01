<script>
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	import PassStrength from '$lib/auth/PassStrength.svelte';
	import TopBar from '$lib/auth/TopBar.svelte';
	import AlertIcon from '$lib/global/Alert-Icon.svelte';
	import Button from '$lib/global/Button.svelte';
	import Input from '$lib/global/Input.svelte';
	import host from '$lib/utils/host';
	import { Register } from "$lib/utils/validation"

	const inputs = {
		full_name: "",
		first_name: "",
		last_name: "",
		email: "",
		password: "",
	}

	let error = ""
	$: inputs.first_name = inputs.full_name.split(" ")[0] ?? ""
	$: inputs.last_name = inputs.full_name.split(" ")[1] ?? ""

	$: {
		const result = Register.validate( {
			first_name: inputs.first_name,
			last_name: inputs.last_name,
			email: inputs.email,
			password: inputs.password,
		} )

		if (result.error) {
			error = result.error.message
		} else {
			error = ""
		}
	}

	const onSubmit = async () => {
		let body = {
			first_name: inputs.first_name,
			last_name: inputs.last_name,
			email: inputs.email,
			password: inputs.password,
		}

		const response = await fetch(`${host}/auth/register/`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify( body )
		}).then( res => res.json() )
		  .catch( () => undefined )

		if ( !response ) return error = "Unexpected error, Please try again later."
		if ( response.error ) return error = response.error

		$session.user = response
		goto("/dashboard/home")
	}
</script>

<TopBar type="signup" />

<form on:submit|preventDefault={ onSubmit }>
	<header>
		<span>Create an account to contiue</span>
		<h1>Getting Started</h1>
	</header>

	<Input name="name" placeholder="Full name" label="Full name" bind:value={inputs.full_name} />
	<Input type="email"name="email" placeholder="Email" label="Email address" bind:value={inputs.email} />
	<Input type="password" name="password" placeholder="Password" label="Password" bind:value={inputs.password} />

	{#if error.length > 0}
		<div class="error">
			<AlertIcon />
			<p>{error}</p>
		</div>
	{/if}

	<PassStrength pass={inputs.password} />

	<div class="submit">
		<Button type="button" size="stretch">Sign In</Button>
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
		display: flex;
		gap: 10px;
		color: var(--c-red);
		
		:global(svg) {
			width: 17px;
			height: 17px;
		}
	}
</style>
