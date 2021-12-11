<script lang="ts">
	import DataTable from '$lib/dashboard/DataTable.svelte';
	import PricePreview from '$lib/dashboard/home/PricePreview.svelte';
	import { sidebarOpen } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(async () => {
		// const { createChart } = await import('lightweight-charts');
		// const chatElem = document.querySelector('#chart') as HTMLElement;

		// const chart = createChart(chatElem, {
		// 	width: 800,
		// 	height: 450,
		// 	layout: {
		// 		background: {
		// 			color: 'rgb(32, 32, 32)'
		// 		}
		// 	},
		// 	grid: {
		// 		horzLines: {
		// 			color: 'rgba(207, 207, 207, 0.043)'
		// 		}
		// 	}
		// });
		// const lineSeries = chart.addLineSeries();
	});
</script>

<section class="container spaced">
	<div class="prices">
		<PricePreview price={100.124} name="silver" />
		<PricePreview price={100.124} name="silver" />
	</div>

	<DataTable />
</section>

<style lang="scss">
	.prices {
		display: flex;
		gap: 1.5rem;
		width: 100%;
	}
	.container {
		padding-top: var(--pd-lg);
		padding-bottom: var(--pd-lg);
	}
</style>
