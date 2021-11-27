<script>
	import TopBar from '$lib/auth/TopBar.svelte';
	import Button from '$lib/global/Button.svelte';
	import Input from '$lib/global/Input.svelte';
	import Logo from '$lib/global/Logo.svelte';
</script>

<TopBar type='login' />

<form>
	<header>
		<span>Weclome back, Adam</span>
		<h1>Sign In Below</h1>
	</header>

	<Input type="email" name="email" placeholder="Email" label="Email" />
	<Input type="password" name="password" placeholder="password" label="Password" />

	<div class="submit">
		<Button href="/login" size="stretch">Sign In</Button>
		<span>Forgot your password? <a href="Reset Password">Reset password</a></span>
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
