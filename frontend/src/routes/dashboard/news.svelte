<script context="module" lang="ts">
	// Commented out due to rate limiting
	/* 	export async function load({ page, fetch }) {
		const url =
			'https://cryptonews-api.com/api/v1/category?section=general&items=10&token=shihyfpjdyzk5ixpwcq0m67x43ruypyewdqva28l';
		const result = await fetch(url);
		if (result.ok) {
			return {
				props: {
					post: await result.json()
				}
			};
		}

		return {
			status: result.status,
			error: `Could not load ${url}`
		};
	} */
</script>

<script lang="ts">
	import Header from '$lib/dashboard/PageHeader.svelte';
	import NewsPopup from '$lib/dashboard/news/NewsPopup.svelte';
	import Post from '$lib/dashboard/news/Post.svelte';
	import { overlay } from '$lib/stores';

	export let post;

	let popup = false;

	const openArticle = () => {
		$overlay = true;
		popup = !popup;
	};
	const mockPost = {
		date: 'Nov 21',
		time: '2:30',
		source: 'Ruters',
		title: 'METALS-London copper eases on dollar strength, economic worries',
		body: 'lorem ipsum to suao dwjaud walsod wuasi dwmsm andusi apwwoe as'
	};
	// console.log(post);
</script>

<Header
	title="Crypto News"
	desc="Follow what’s happening with real-time updates from around the world"
	large
/>

<div class="container">
	<div class="post-grid">
		<!-- {#each post.data as data}
			<Post {data} on:click={openArticle} />
		{/each} -->
		{#each Array(10) as data}
			<Post data={mockPost} on:click={openArticle} />
		{/each}
	</div>
</div>

{#if $overlay}
	<NewsPopup />
{/if}

<style>
	.post-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
		justify-content: center;
		margin: 0 auto;
		gap: 3em;
	}
</style>
