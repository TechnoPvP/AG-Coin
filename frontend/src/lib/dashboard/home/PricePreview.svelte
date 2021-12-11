<script lang="ts">
	import { afterUpdate, beforeUpdate } from 'svelte';

	type ChangeType = 'positive' | 'negative' | 'none';

	export let price;
	export let name;

	let change: ChangeType = 'positive';
    let previousPrice = price;

    
	$: {
        if (previousPrice < price) {
            change = 'negative';
		}
        
		if (previousPrice > price) {
            change = 'positive';
		}
        
		if (previousPrice == price) {
            change = 'none';
		}

        previousPrice = price;
	}
</script>

<div class="wrap">
	<div class="top">
		<div class="chart" />

		<div class="data">
			<span class="name">{name} price</span>
			<h2>{price}</h2>
			<span>Current {name} price <span class="type--{change}">9% </span></span>
		</div>

		<div class="change-circle" />
	</div>

	<div class="bottom">
		<a href="/dashboard/home">See All Activity</a>
	</div>
</div>

<style lang="scss">
	.wrap {
		background-color: var(--c-black-s2);
		width: 100%;

		.top {
			display: flex;
			justify-content: space-between;
			gap: var(--pd-lg);
			border-radius: var(--br-sm);
			position: relative;
		}

		.bottom {
			grid-column: 1/-1;
			border-top: 1px solid var(--tran-s2);
			width: 100%;
		}

		.bottom,
		.top {
			padding: var(--pd-md) var(--pd-lg);
		}
	}

	.data {
		margin-right: auto;
		align-self: center;
		.name {
			text-transform: capitalize;
		}

		span {
			font-size: 12px;
		}
	}

	.chart {
		width: 100px;
		height: 100px;
		border: 1px solid lightgray;
	}
	.change-circle {
		width: 45px;
		height: 45px;
		background-color: var(--tran-s2);
		border-radius: 50%;
	}
	.type {
		&--positive {
			color: green;
		}
		&--negative {
			color: red;
		}
		&--none {
			color: white;
		}
	}
</style>
