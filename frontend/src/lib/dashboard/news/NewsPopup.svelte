<script>
	import { sidebarOpen } from '$lib/stores';
</script>

<div class="popup" class:sidebar-open={$sidebarOpen}>
	<img class="popup__x" src="/icons/x.svg" alt="Exit Icon" />
	<h1 class="title">METALS-London copper eases on dollar strength, economic worries</h1>
	<div class="content">
		<p>
			- Steel futures prices in China jumped on Monday, with hot-rolled coils and construction rebar
			climbing more than 3% at market open to narrow the gap with spot prices, as traders cheered a
			marginally improved consumption of industrial metals. Apparent demand of five main steel
			products in China, including rebar, wire rod, hot-rolled coils and others, gained for two
		</p>
		<p>
			- Steel futures prices in China jumped on Monday, with hot-rolled coils and construction rebar
			climbing more than 3% at market open to narrow the gap with spot prices, as traders cheered a
			marginally improved consumption of industrial metals. Apparent demand of five main steel
			products in China, including rebar, wire rod, hot-rolled coils and others, gained for two
		</p>
		<p>
			- Steel futures prices in China jumped on Monday, with hot-rolled coils and construction rebar
			climbing more than 3% at market open to narrow the gap with spot prices, as traders cheered a
			marginally improved consumption of industrial metals. Apparent demand of five main steel
			products in China, including rebar, wire rod, hot-rolled coils and others, gained for two
		</p>
		<p>
			- Steel futures prices in China jumped on Monday, with hot-rolled coils and construction rebar
			climbing more than 3% at market open to narrow the gap with spot prices, as traders cheered a
			marginally improved consumption of industrial metals. Apparent demand of five main steel
			products in China, including rebar, wire rod, hot-rolled coils and others, gained for two
		</p>
	</div>
</div>

<style lang="scss">
	.popup {
		background-color: var(--c-black-s2);
		border-radius: var(--br-sm);
		max-height: 700px;
		padding: 3rem;
		overflow-y: auto;

		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 600px;
		z-index: 100;

		&__x {
			position: absolute;
			right: 20px;
			top: 20px;
		}
	}
	.sidebar-open {
		width: 550px;
		margin-left: 100px;
	}
	.content {
		padding-bottom: 1em;
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
	h1 {
		margin-bottom: 1em;
	}
	p {
		line-height: 2.3;
	}

	@media screen and (max-width: 768px) {
		.popup {
			width: auto;
			left: 0;
			right: 0;
			margin: 0;
			transform: translateY(-50%);
			padding: 1.5rem;
			padding-top: 3.5em;
		}
	}
</style>
