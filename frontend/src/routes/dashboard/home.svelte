<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch, page }) => {
		const url = `http://localhost:5000/api/auth/login`;
		const result = await fetch(url, { method: 'POST' });

		if (result.ok) {
			return {
				props: {
					post: await result.json()
				}
			};
		}
	};
</script>

<script>

	import Button from '$lib/global/Button.svelte';
	import { sidebarOpen } from '$lib/stores';

	function sidebarClose() {
		$sidebarOpen = !$sidebarOpen;
		console.log($sidebarOpen);
	}
</script>

<Button type="button" on:click={sidebarClose}>Change</Button>
