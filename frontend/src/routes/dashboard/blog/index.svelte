<script lang="ts">
	import BlogCard from '$lib/dashboard/blog/BlogCard.svelte';
	import Header from '$lib/dashboard/PageHeader.svelte';
	import Badge from '$lib/global/Badge.svelte';
	import type { Layout } from '$lib/types/types';
	import type { Blog, Tag } from 'shared/prisma/generated/prisma-client-js';

	let currentLayout: Layout = 'column';
	let selectedTags: Array<string> = [];

	const tags = [
		{ id: 1, name: 'agcoin' },
		{ id: 2 , name: 'blockchain' },
		{ id: 3, name: 'ethrum' },
		{ id: 4, name: 'mining' },
		{ id: 5, name: 'investing' },
		{ id: 6, name: 'crypto' },
		{ id: 7, name: 'history' },
		{ id: 8, name: 'tutorials'},
	];

	const mockPost: Array<Blog & { tags: Tag[] }> = [
		{
			id: 1,
			title: 'How to Create Your Own Cryptocurrency?',
			difficulty: 'EASY',
			status: "PUBLISH",
			thumbnail: '/images/blog_img.png',
			body: 'The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It ',
			created_at: new Date("2016-03-20"),
			tags: [tags[0], tags[2]],
		},
		{
			id: 2,
			title: 'What is Shiba Inu (SHIBA)',
			difficulty: "HARD",
			status: "PUBLISH",
			thumbnail: '/images/blog_img2.png',
			body: 'The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It ',
			created_at: new Date("2021-09-05"),
			tags: [tags[1], tags[3]],
		},
		{
			id: 3,
			title: 'How to Create Your Own Cryptocurrency?',
			difficulty: 'EASY',
			status: 'PUBLISH',
			thumbnail: '/images/blog_img.png',
			body: 'The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It The Ethereum Name Service (ENS) is a naming service for wallet addresses, hashes, and other machine-readable identifiers. It turns difficult to read strings of data into easily readable addresses. It ',
			created_at: new Date("2017-12-25"),
			tags: [tags[7], tags[5]],
		}
	];

	const changeLayout = (layout: Layout) => {
		currentLayout = layout;
	};

	$: filteredPosts =
		selectedTags.length > 0
			? mockPost.filter((post) => post.tags.some((elem) => selectedTags.includes(elem.name)))
			: mockPost;
</script>

<div class="container">
	<Header
		title="Learn Crypto"
		desc="Follow what’s happening with real-time updates from around the world"
		large
	/>

	<div class="options">
		<!-- Filters -->
		<div class="filters">
			<!-- Tags -->
			<div class="tags">
				{#each tags as tag}
					<Badge value={tag.name} bind:selectedTags />
				{/each}
			</div>

			<!-- Diffiucluty -->
			<div class="difficulty">
				<Badge style="outlined" color="green" value="Easy" />
				<Badge style="outlined" color="yellow" value="Medium" />
				<Badge style="outlined" color="red" value="Advanced" />
			</div>
		</div>

		<div class="view">
			<img
				on:click={() => changeLayout('column')}
				src="/icons/layout-col.svg"
				alt="Column layout Icon"
			/>
			<img
				on:click={() => changeLayout('row')}
				src="/icons/layout-row.svg"
				alt="Column layout Icon"
			/>
			<h4 class:active={selectedTags.length > 0} on:click={() => (selectedTags = [])}>
				Clear Filters
			</h4>
		</div>
	</div>

	<div class="grid layout--{currentLayout}">
		{#each filteredPosts as post}
			<BlogCard data={post} layout={currentLayout} />
		{/each}
	</div>
</div>

<style lang="scss">
	.filters {
		display: flex;
		flex-direction: column;
		gap: 1em;

		.tags {
			column-gap: 10px;
			row-gap: 7px;
			display: flex;
			flex-wrap: wrap;
			max-width: 500px;
		}

		.difficulty {
			display: flex;
			flex-wrap: wrap;
			gap: 1rem;
		}
	}

	h4 {
		color: var(--c-gray-s3);
	}

	h4.active {
		color: var(--c-blue);
	}

	.options {
		display: flex;
		justify-content: space-between;
		gap: 1rem;

		.view {
			display: flex;
			gap: 1.5em;
		}

		img {
			width: 20px;
			height: 20px;
		}
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 3em;
		margin: 3em 0;
	}
	.layout--column {
		grid-template-columns: 1fr 1fr 1fr;
	}
	.layout--row {
		grid-template-columns: 1fr;
	}

	@media screen and (max-width: 1024px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}

	@media screen and (max-width: 768px) {
		.options {
			flex-direction: column;
		}
		.view {
			transform: translateX(5px);
		}
	}
</style>
