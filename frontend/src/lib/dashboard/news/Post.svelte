<script lang="ts">
	import type { PostData } from '$lib/interfaces/interfaces';
	import { overlay } from '$lib/stores';
	import { onMount } from 'svelte';
	import {parseDate} from '$lib/utils/dateUtils';

	export let data;
	let date = parseDate(data.date);
	/* Fri, 26 Nov 2021 21:06:25 -0500 */
	/* 
    {data: Array(50)}
	data: Array(50)
	0:
	date: "Fri, 26 Nov 2021 21:06:25 -0500"
	image_url: "https://crypto.snapi.dev/images/v1/w/6/anthonyscaramucci-83815.jpg"
	news_url: "https://cryptopotato.com/anthony-scaramucci-november-26-black-friday-cryptocurrency-markets/"
	sentiment: "Neutral"
	source_name: "CryptoPotato"
	text: "Anthony Scaramucci believes that the fundamentals behind the cryptocurrency industry are enough to be bullish during panic episodes,."
	title: "Anthony Scaramucci: Cryptocurrency Markets Had Their Black Friday On November 26"
	topics: []
	type: "Article"
    */
</script>

<article on:click>
	<div class="data">
		<span>{date[0]}</span>
		<div class="circle" />
		<span>{date[1]}</span>
		<div class="circle" />
		<span>{data.source_name}</span>
	</div>
	<h2>{data.title}</h2>
</article>

<style lang="scss">
	article {
		display: flex;
		flex-direction: column;
		border-radius: var(--br-md);
		padding: 15px;

		transition: background-color 0.15s ease-in;
	}
	article:hover {
		background-color: var(--tran-s2);
		cursor: pointer;
	}
	.data {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		color: var(--c-gray-s2);
	}
	span {
		position: relative;
		display: inline-block;
	}
	h2 {
		color: var(--c-gray-s1);
		font-size: 16px;
		line-height: 1.6;
	}
	.circle {
		width: 5px;
		height: 5px;
		background-color: var(--c-gray-s2);
		border-radius: 50%;
	}
</style>
