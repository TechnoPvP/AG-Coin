<script lang="ts">
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	import host from '$lib/utils/host';
	import { onMount } from 'svelte';

/* TODO Not working */
	onMount(async () => {
		await fetch(`${host}/auth/logout`, {
			credentials: 'include'
		});
		$session.user = null;
		goto('/');
	});

	console.log('logging out');
</script>

<h1>Logging out....</h1>
