<script lang="ts">
	import Badge from '$lib/global/Badge.svelte';
	import type { Blog } from 'shared/prisma/generated/prisma-client-js';
	import type { Layout } from '$lib/types/types';
	import { DateTime } from "ts-luxon"

	export let data: Blog;
	export let layout: Layout;
	$: displayDate = DateTime.fromISO( data.created_at.toISOString() ).toFormat("LLL d")
	
	const getReadingTime = (words: string, avg = 225) => {
		const time = Math.round(words.split(' ').length / avg);
		return time || 1;
	};
</script>

<div class="card" class:row={layout == 'row'}>
	<img class="heading-img" src={data.thumbnail} alt={data.thumbnail} />

	<div class="content">
		<h4>{data.title}</h4>
		{#if layout == 'row'}
			<p>
				{data.body.slice(0, 150)}...
			</p>
		{/if}
		<div class="info">
			<Badge color="green" style="outlined" value="Advanced" />
			<span>{displayDate}</span>
			<div>
				<img class="time" src="/icons/time.svg" alt="Time icon" />{getReadingTime(data.body)}m
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.card {
		height: 340px;
		display: flex;
		flex-direction: column;
		border-radius: var(--br-md);
		background-color: var(--c-black-s2);

		.content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 100%;
			padding: 1em;
		}
		.time {
			margin-right: 5px;
		}
		.heading-img {
			width: 100%;
			min-height: 167px;
			max-height: 167px;
			display: block;
			object-fit: cover;
			border-radius: var(--br-md) var(--br-md) 0 0;
		}
	}

	/* Styles When Card Is Row */
	.row {
		flex-direction: row;
		height: auto;
		gap: 1em;

		.content {
			gap: 1.5em;
		}
		.heading-img {
			border-radius: var(--br-md) 0 0 var(--br-md);
			width: 200px;
			min-height: 100%;
		}
	}

	.info {
		display: flex;
		justify-content: space-between;
		align-items: center;

		span {
			margin-left: auto;
			margin-right: 1em;
		}
	}
	@media screen and (max-width: 1024px) {
		.card {
			height: auto;

			.content {
				gap: 2rem;
			}
		}
	}

	/* Override Row Styles On >Tablet */
	@media screen and (max-width: 768px) {
		.row {
			flex-direction: column;
			gap: 0em;

			.content {
				gap: 1.5em;
			}
			.heading-img {
				width: 100%;
				min-height: unset;
				border-radius: var(--br-md) 0 0 var(--br-md);
			}
		}
	}
</style>
