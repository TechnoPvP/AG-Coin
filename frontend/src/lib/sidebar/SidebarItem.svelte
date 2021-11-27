<script lang="ts">
	import Icon from '$lib/global/Icon.svelte';
	import type { Icons } from '$lib/interfaces/types';

	export let icon: Icons;
	export let active = false;
	export let href;
</script>

<a class="wrap" {href}>
	<!-- <img {src} alt="{src} icon"> -->
	<div class="icon">
		<Icon {icon} {active} />
	</div>
	<span class:active><slot /></span>
</a>

<style>
	.wrap {
		display: flex;
		align-items: center;
		gap: 1em;
		padding: 0.8em 9px;
		padding-left: 1.5em;
		border-radius: var(--br-md);
		width: 100%;
		cursor: pointer;
		transition: background-color 0.25s linear;
	}
	div:hover {
		background-color: var(--tran-s2);
	}
	.active {
		color: var(--c-blue);
	}
	span {
		font-size: inherit;
		color: inherit;
	}
	.icon {
		width: 14px;
		height: 14px;
	}
</style>
