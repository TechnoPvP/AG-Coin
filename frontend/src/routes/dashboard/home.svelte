<script lang="ts">
	import PricePreview from '$lib/dashboard/home/PricePreview.svelte';
	import { sidebarOpen } from '$lib/stores';
	import { onMount } from 'svelte';

	let data = [];
	let date = new Date();
	let iteration = 1;
	let value = 50 
	for (let x = 0; x < 100; x++) {
		if (x > 25) iteration++;
		if (x > 40) iteration -= 3;
		if (x > 60) iteration += 5;
		date.setDate(date.getDate() + iteration);
		data.push({ time: date.toISOString(), value });
	}
	onMount(async () => {
		const { createChart } = await import('lightweight-charts');
		const chatElem = document.querySelector('#chart') as HTMLElement;

		const chart = createChart(chatElem, {
			width: 800,
			height: 450,
			layout: {
				background: {
					color: 'rgb(32, 32, 32)'
				}
			},
			grid: {
				horzLines: {
					color: 'rgba(207, 207, 207, 0.043)'
				}
			}
		});
		const lineSeries = chart.addLineSeries();
		lineSeries.setData(data);

		setInterval(() => {
			date.setDate(date.getDate() + iteration);
			data.push({ time: date.toISOString(), value });
		}, 1000);
	});
</script>

<section class="container spaced">
	<div class="prices">
		<PricePreview price={100.124} name="silver" />
		<PricePreview price={100.124} name="silver" />
	</div>

	<div id="chart" />
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
