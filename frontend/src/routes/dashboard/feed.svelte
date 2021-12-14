<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import host from '$lib/utils/host';

	export const load: Load = async ({ fetch, session }) => {
		const posts = await fetch(`${host}/feed`, {
			method: 'GET',
			headers: {
				accept: 'application/json'
			}
		}).then( res => res.json() );

		const comments = fetch(`${host}/comment`)
			.then( res => res.json() ) 

		if (posts.error) {
			return {
				error: posts.error
			};
		}

		return {
			props: { posts, comments }
		};
	};
</script>

<script lang="ts">
	import PostCard from '$lib/dashboard/feed/PostCard.svelte';
	import PageHeader from '$lib/dashboard/PageHeader.svelte';
	import type { FeedComment, User, Feed } from 'shared/prisma/generated/prisma-client-js';

	type FeedCommentWithUser = FeedComment & { user: Omit<User, 'password'> }
	type FeedWithUser = Feed & { user: Omit<User, 'password'> }
	export let posts: FeedWithUser[];
	export let comments: Promise<{ [postID: string]: FeedCommentWithUser[] }>
</script>

<div class="container">
	<PageHeader title="Feed" spaced />
</div>

<div class="posts">
	{#each posts as post}
		<PostCard data={post} {comments} />
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
