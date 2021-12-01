<script>
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	import Button from '$lib/global/Button.svelte';
	import { sidebarOpen } from '$lib/stores';
	import host from '$lib/utils/host';

	function sidebarClose() {
		$sidebarOpen = !$sidebarOpen;
		console.log($sidebarOpen);
	}

	async function signout() {
		await fetch(`${host}/auth/logout`, {
			credentials: "include",
		})

		$session.user = null
		goto("/")
	}
</script>

<Button type="button" on:click={sidebarClose}>Change</Button>
<Button color="red" type="button" on:click={signout}>Signout</Button>
