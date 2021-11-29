<script>
	import Action from './Action.svelte';

	export let data = {
		user: 'Zsolt Dudinszky',
		time: '6h',
		content: 'Love to see the work youre doing! Keep it up.',
		replies: '4'
	};
</script>

<div class="comment">
	<img class="img-sm" src="/images/profile_icon.png" alt="Person profile" />

	<div class="data">
		<div class="data__heading">
			<h4>{data.user}</h4>
			<div class="circle" />
			<span>{data.time}</span>
		</div>

		<p>{data.content}</p>
	</div>

	<!-- Comment Actions -->
	<div class="comment__actions">
		<Action src="/icons/heart.svg" name="like" --size="15px" />
		<Action src="/icons/comment.svg" name="140" --size="15px" />
	</div>
</div>

<style lang="scss">
	.comment {
		display: grid;
		grid-template-columns: auto 1fr;
		column-gap: var(--pd-md);
		row-gap: var(--pd-sm);

		.circle {
			height: 5px;
			width: 5px;
			background-color: var(--c-gray-s2);
			border-radius: 50%;
		}
		.data {
			border: 1px solid var(--c-gray-s2);
			padding: var(--pd-sm);
			border-radius: var(--br-sm);
		}
		.data__heading {
			display: flex;
			align-items: center;
			gap: var(--pd-sm);
		}

		.data__heading {
			display: flex;
			margin-bottom: var(--pd-sm);
		}

		&__actions {
			display: flex;
			gap: var(--pd-md);
			grid-column: 2/-1;
		}
		p {
			color: var(--c-gray-s2);
		}
		h4 {
			text-transform: capitalize;
		}
	}

	/* Global Styles */
	.img-sm {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		object-fit: cover;
	}
</style>
