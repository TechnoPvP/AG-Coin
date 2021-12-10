<script>
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	import ProfilePopup from '$lib/dashboard/settings/ProfilePopup.svelte';
	import Skelton from '$lib/dashboard/Skelton.svelte';
	import Button from '$lib/global/Button.svelte';
	import { sidebarOpen } from '$lib/stores';
	import host from '$lib/utils/host';

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
