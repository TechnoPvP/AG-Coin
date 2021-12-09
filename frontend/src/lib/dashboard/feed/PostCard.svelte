<script lang="ts">
	import { session } from '$app/stores';

	import Button from '$lib/global/Button.svelte';
	import Textarea from '$lib/global/Textarea.svelte';
	import host from '$lib/utils/host';
import { AvatarLink } from '$lib/utils/stringUtils';
	import Action from './Action.svelte';
	import Comment from './Comment.svelte';

	export let data;
	let value;
	let commentFocused;

	const addComment = () => {
		if (!value) return;

		fetch(`${host}/comment/${data._id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify({
				content: value
			})
		})
			.then((res) => res.json())
			.then((response) => {
				console.log(response);
				data.comments = [
					...data.comments,
					{
						content: value,
						user: {
							first_name: $session.user.first_name,
							last_name: $session.user.last_name,
							avatar: $session.user.avatar
						}
					}
				];
				value = '';
			})
			.catch((err) => console.log(err));
	};

	const handlePostLike = () => {
		console.log(`Liked post ${data.id}`);
		data.liked = !data.liked;
	};

	const handleCommentAction = () => {
		commentFocused = true;
	};

	const handlePostShare = () => {
		console.log(`Sharing post ${data.id}...`);
	};
</script>

<div class="card">
	<header>
		<img src={AvatarLink + data.user.avatar} alt="Person profile" />
		<div class="profile-info">
			<h4>{`${data.user.first_name}  ${data.user.last_name}`}</h4>
			<span>{data.role}</span>
		</div>
		<span>{data.date}</span>
	</header>

	<div class="body">
		<p>{data.caption}</p>
		{#if data.postSrc}
			<img src={data.postSrc} alt="Post" />
		{/if}
		<div class="line" />
	</div>

	<div class="actions">
		<Action on:click={handlePostLike} src="/icons/heart.svg" name="like" liked={data?.liked} />
		<Action src="/icons/comment.svg" name="140" on:click={handleCommentAction} />
		<Action on:click={handlePostShare} src="/icons/share.svg" name="share" />
	</div>

	<div class="comments-wrap">
		<div class="add-comment">
			<img class="img-sm" src={AvatarLink + data.user.avatar} alt="Person profile" />
			<Textarea bind:value focused={commentFocused} />
			{#if value}
				<Button type="button" size="small" on:click={addComment}>Submit</Button>
			{/if}
		</div>

		{#if data?.comments?.length > 0}
			{#each data.comments as comment}
				<Comment data={comment} />
			{/each}
		{/if}
	</div>
</div>

<style lang="scss">
	.card {
		background-color: var(--c-black-s2);
		width: min-content;
		border-radius: var(--br-md);
		padding: var(--pd-md);
		width: 600px;
	}
	header {
		display: flex;
		align-items: center;
		gap: var(--pd-md);
		img {
			width: 48px;
			height: 48px;
			border-radius: 50%;
		}
		span {
			color: var(--c-gray-s3);
			margin-left: auto;
		}
	}

	.body {
		display: flex;
		flex-direction: column;
		gap: var(--pd-md);
		margin: var(--pd-md) 0;

		p {
			font-size: 16px;
		}

		img {
			max-height: 200px;
			object-fit: cover;
		}

		.line {
			width: 100%;
			height: 1px;
			background-color: var(--tran-s1);
		}
	}

	.actions {
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: var(--pd-lg);
	}

	.add-comment {
		display: flex;
		margin-top: var(--pd-md);
		gap: var(--pd-md);
	}
	.comments-wrap {
		display: flex;
		flex-direction: column;
		gap: var(--pd-lg);
	}

	/* Global Styles */
	.img-sm {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		object-fit: cover;
	}
</style>
