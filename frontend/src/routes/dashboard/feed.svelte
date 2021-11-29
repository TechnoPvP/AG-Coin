<script lang="ts">
	import PostCard from '$lib/dashboard/feed/PostCard.svelte';
	import PageHeader from '$lib/dashboard/PageHeader.svelte';
	import { postsData } from '$lib/mockData/feed';
</script>

<div class="container">
	<PageHeader title="Feed" spaced />
</div>

<div class="posts">
	{#each postsData as post}
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
