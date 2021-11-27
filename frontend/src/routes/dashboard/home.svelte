<script>
	import Button from '$lib/global/Button.svelte';
	import { sidebarOpen } from '$lib/stores';

	function sidebarClose() {
		$sidebarOpen = !$sidebarOpen;
		console.log($sidebarOpen);
	}
</script>

<Button type="button" on:click={sidebarClose}>Change</Button>
