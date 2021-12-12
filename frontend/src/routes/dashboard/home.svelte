<script>
	import { sidebarOpen } from '$lib/stores';

	function sidebarClose() {
		$sidebarOpen = !$sidebarOpen;
		console.log($sidebarOpen);
	}
</script>

<div class="wrap">
</div>

<style lang="scss">
	.wrap {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
</style>
