<script>
	import PassStrength from '$lib/auth/PassStrength.svelte';
	import TopBar from '$lib/auth/TopBar.svelte';
	import Button from '$lib/global/Button.svelte';
	import Input from '$lib/global/Input.svelte';

	let value;

</script>

<TopBar type="signup" />

<form>
	<header>
		<span>Create an account to contiue</span>
		<h1>Getting Started</h1>
	</header>

	<Input name="name" placeholder="Full name" label="Full name" />
	<Input type="email"name="email" placeholder="Email" label="Email address" />
	<Input type="password" name="password" placeholder="Password" label="Password" bind:value={value} />

	<PassStrength pass={value} />

	<div class="submit">
		<Button href="/login" size="stretch">Sign In</Button>
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
