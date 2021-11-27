<script>
	import Button from '$lib/global/Button.svelte';
import HomeButton from './HomeButton.svelte';
</script>

<nav>
	<div class="logo">
    <img src="/icons/logo.svg" alt="AGCoin Logo" />
		<h2>AGCoin</h2>
	</div>

	<div class="items">
		<h5>Developer</h5>
		<h5>Product</h5>
		<h5>Pricing</h5>
	</div>
    
	<div class="buttons">
        <HomeButton color="white" size="small" href="/auth/login">Sign In</HomeButton>
	</div>
</nav>

<style lang="scss">
	nav {
		display: flex;
		justify-content: space-between;
        align-items: center;
        padding: 2em 0;

		.items {
			display: flex;
			gap: 1em;
		}

		.logo {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}

		h2 {
			font-weight: 400;
			position: relative;
			top: 4px;
		}
		h5 {
			font-weight: 400;
			font-size: 14px;
		}
	}
	img {
		width: 40px;
	}
</style>
