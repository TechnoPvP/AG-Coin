<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = ({ session }) => {
		if (!session.user) return {
			status: 401,
			error: "401 UnAuthorized"
		}

		return {}
	}
</script>

<script>
	import Toolbar from '$lib/dashboard/Toolbar.svelte';
	import Sidebar from '$lib/sidebar/Sidebar.svelte';
	import { overlay, sidebarOpen } from '$lib/stores';
</script>

<section>
	<div class="sidebar" class:close={!$sidebarOpen}>
		<Sidebar />
	</div>
	
	<div class="content">
		<Toolbar user="Adam Ghowiba" />
		<slot />
		{#if $overlay}
			<div class="overlay" on:click={() => ($overlay = !$overlay)} />
		{/if}
	</div>
</section>

<style>
	section {
		height: 100%;
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: flex-start;
	}
	.content {
		width: 100%;
		height: 100%;
		position: relative;
	}
	.sidebar {
		height: 100%;
		width: 200px;

		transition: width 0.2s linear;
	}
	.close {
		width: 0px;
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(46, 46, 46, 0.486);
		backdrop-filter: blur(4px);
	}

	@media screen and (max-width: 768px) {
		section {
			grid-template-columns: 1fr;
		}
		.sidebar {
			display: none;
		}
	}
</style>
