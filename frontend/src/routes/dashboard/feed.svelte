<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import host from '$lib/utils/host';

	export const load: Load = async ({ fetch, session }) => {
		const response = await fetch(`${host}/feed`, {
			method: 'GET',
			headers: {
				accept: 'application/json'
			}
		});

		if (response.ok) {
			return {
				props: {
					posts: await response.json()
				}
			};
		}

		return {
			error: response.status.toString()
		};
	};

</script>

<script lang="ts">
	import PostCard from '$lib/dashboard/feed/PostCard.svelte';
	import PageHeader from '$lib/dashboard/PageHeader.svelte';
	import type { FeedPost } from 'shared/feed';

	export let posts: FeedPost[];

	console.log(posts);
</script>

<div class="container">
	<PageHeader title="Feed" spaced />
</div>

<div class="posts">
	{#each posts as post}
		<PostCard data={post} />
	{/each}
</div>

<style lang="scss">
	.posts {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: var(--pd-lg);
	}
</style>
