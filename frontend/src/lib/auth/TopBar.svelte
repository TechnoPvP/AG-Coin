<script lang="ts">
	import Button from '$lib/global/Button.svelte';

	type Type = 'login' | 'signup';
	export let type: Type;

	let oppositeType = type == 'login' ? 'signup' : 'login';
</script>

<nav>
	<div class="btn-wrap">
		<span>{type == 'login' ? "Don't have" : 'Already have'} an account?</span>
		<Button color="blue" style="outlined" size="regular" href="/auth/{oppositeType}"
			>{type == 'login' ? 'Create One' : 'Log In'}
		</Button>
	</div>
</nav>

<style>
	nav {
		display: flex;
		justify-content: right;
		align-items: center;
	}
	span {
		display: block;
		color: var(--c-gray-s3);
	}
	.btn-wrap {
		display: flex;
		gap: 1rem;
		align-items: center;
	}
</style>
