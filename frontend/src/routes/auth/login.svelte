<script lang="ts">
	import TopBar from '$lib/auth/TopBar.svelte';
	import AlertIcon from '$lib/global/Alert-Icon.svelte';
	import Button from '$lib/global/Button.svelte';
	import Input from '$lib/global/Input.svelte';
	import { session } from "$app/stores"
	import { goto } from '$app/navigation';

	const inputs = {
		email: "",
		password: ""
	}

	let error = ""
	const onSubmit = async () => {
		const result = await fetch("http://localhost:5000/api/auth/login",{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify( inputs ),
			credentials: 'include',
		}).then( res => res.json() )
		  .catch( () => undefined )

		if (!result) return error = "Unexpected error, Please try again later."
		if (result.error) return error = result.error

		$session.user = result
		goto("/dashboard/home")
	}
</script>

<TopBar type='login' />

<form on:submit|preventDefault={onSubmit}>
	<header>
		<span>Weclome back, Adam</span>
		<h1>Sign In Below</h1>
	</header>

	<Input type="email" name="email" placeholder="Email" label="Email" bind:value={ inputs.email } />
	<Input type="password" name="password" placeholder="password" label="Password" bind:value={ inputs.password } />

	{#if error.length > 0}
		<div class="error">
			<AlertIcon />
			<p>{error}</p>
		</div>
	{/if}

	<div class="submit">
		<Button type="button" size="stretch">Sign In</Button>
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
