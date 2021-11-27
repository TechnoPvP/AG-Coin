<script context="module" lang="ts">
	export async function load({ page, fetch }) {
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
	}
</script>

<script lang="ts">
	import NewsPopup from '$lib/dashboard/news/NewsPopup.svelte';
	import Post from '$lib/dashboard/news/Post.svelte';
	import Breadcrumbs from '$lib/global/Breadcrumbs.svelte';
	import type { PostData } from '$lib/interfaces/interfaces';
	import { overlay } from '$lib/stores';

	export let post;

	let popup = false;

	const openArticle = () => {
		$overlay = true;
		popup = !popup;
	};
	const mockPost: PostData = {
		date: 'Nov 21',
		time: '2:30',
		source: 'Ruters',
		title: 'METALS-London copper eases on dollar strength, economic worries',
		body: 'lorem ipsum to suao dwjaud walsod wuasi dwmsm andusi apwwoe as'
	};
	// console.log(post);
</script>

<header>
	<h1>Crypto News</h1>
	<h3>Follow what’s happening with real-time updates from around the world</h3>
	<Breadcrumbs />
</header>

<div class="post-wrap">
	<div class="post-grid">
		{#each post.data as data}
			<Post {data} on:click={openArticle} />
		{/each}
	</div>
</div>

{#if $overlay}
	<NewsPopup />
{/if}

<style>
	h1 {
		font-size: 50px;
		font-weight: var(--fw-black);
	}
	h3 {
		font-size: 24px;
	}
	header {
		text-align: center;
		max-width: 70ch;
		margin: 4em auto;
	}

	.post-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
		justify-content: center;
		margin: 0 auto;
		gap: 3em;
	}
	.post-wrap {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 1.5em;
	}
</style>
