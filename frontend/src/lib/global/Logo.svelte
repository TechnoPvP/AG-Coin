<script>
	export let labled = false;
</script>

<div>
	<img src="/icons/logo.svg" alt="AGCoin Logo" />
	<!-- <div class="block"></div> -->
	{#if labled}
		<h4>AGCoin</h4>
	{/if}
</div>

<style lang="scss">
	div {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	img {
		width: 40px;
		height: 40px;
	}
</style>
