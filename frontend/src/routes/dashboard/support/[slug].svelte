<script lang="ts">
	import PageHeader from '$lib/dashboard/PageHeader.svelte';
	import Search from '$lib/dashboard/Search.svelte';
	import ContactCta from '$lib/dashboard/support/ContactCta.svelte';
	let value;
</script>

<div class="container">
	<PageHeader title="Support" spaced />

	<Search bind:value />

	<div class="content">
		<h1 class="title">Issue with alert on a spread symbol</h1>
		<p>
			In a spread chart, the real-time bars are built on tick data, whereas historical bars are
			built based on minute data. The reason for this difference is that the tick data of price
			movements within a bar is not included in historical bars. This is the peculiarity of the way
			spread charts are computed. The sequence of price movements intra-bar plays a crucial part in
			building spread bars in real-time. An alert server processes data received in real-time,
			whereas your chart server can partially compute historical data as well. As a result, the bars
			<br /> <br />
			built on both servers can mismatch. Thus, when opening a chart, you may see a range of bars that
			are different from that used by an alert. An alert will then fire and you may perceive it as incorrect.
			At the moment, there is no solution to this behavior, therefore, we strongly advise not to set
			alerts on spread charts.
		</p>
	</div>

	<!-- TODO: Fix Alignment here -->
	<ContactCta />
</div>

<style lang="scss">
	.container {
		padding-top: var(--pd-lg);
		padding-bottom: var(--pd-lg);
		position: relative;
	}
	.content {
		margin: var(--pd-xl) 0;
		max-width: 50ch;
		margin-left: auto;
		margin-right: auto;

		h1 {
			margin-bottom: var(--pd-lg);
		}
		p {
			color: var(--c-gray-s1);
		}
	}
</style>
