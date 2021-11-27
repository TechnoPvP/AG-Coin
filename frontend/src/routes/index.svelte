<script>
	import HomeButton from '$lib/home/HomeButton.svelte';
	import Navbar from '$lib/home/Navbar.svelte';
</script>

<section>
	<div class="container">
		<Navbar />
	</div>

	<img src="/images/globe.png" alt="Globe" />

	<div class="header">
		<h1>Accept Crypto Globally, Be Limitless.</h1>
		<p>Enjoy borderless payments with AG Coin. Our Solution is user friendly, fast and secrure.</p>
		<div class="buttons">
			<HomeButton trans color="white" href="/auth/signup" size="large">Get Started</HomeButton>
			<HomeButton trans color="black" href="/" size="large">Contact Us</HomeButton>
		</div>
	</div>

</section>

<style lang="scss">
	section {
		position: relative;
		width: 100%;
		height: 100%;
		background: linear-gradient(85.28deg, #1b1c2c 4.09%, #000000 98%);
		overflow: hidden;
	}
	.container {
		max-width: 1140px;
		margin: 0 auto;
		padding: 0 2rem;
	}
	.header {
		position: absolute;
		text-align: center;
		top: 45%;
		left: 50%;
		width: 90%;
		transform: translate(-50%, -50%);

		.buttons {
			display: flex;
			gap: 2rem;
			justify-content: center;
		}

		h1 {
			font-size: 60px;
			background: rgb(73, 73, 73);
			background: linear-gradient(
				180deg,
				rgb(17, 18, 32) 0%,
				rgba(236, 236, 236, 1) 35%,
				rgba(150, 150, 150, 1) 100%
			);
			background-size: 100%;
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			-moz-text-fill-color: transparent;
			line-height: 1.5em;
			max-width: 20ch;
			margin: 0 auto;
		}
		p {
			max-width: 50ch;
			margin: 0 auto;
			margin-bottom: 1.5rem;
		}
	}
	img {
		display: block;
		opacity: 0.1;
		position: absolute;
		max-width: 1000px;
		bottom: -40px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 0;
	}
</style>
