<script>
	export let name;
	export let lastVisit;
	export let joined;
	export let src;
</script>

<section>
	<img class="profile-img" {src} alt="Your Profile Icon" />

	<div class="bio">
		<h1>{name}</h1>

		<div class="stats">
			<span> <img src="/icons/time.svg" alt="Time icon" /> Last visit {lastVisit} ago</span>
			<span> <img src="/icons/calendar.svg" alt="Time icon" />Joined {joined} year ago</span>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		gap: var(--pd-lg);
        margin: var(--pd-xl) 0;

		.profile-img {
			max-width: 100px;
			border-radius: 50%;
		}

		.bio {
			display: flex;
			justify-content: space-around;
			flex-direction: column;
		}
	}
	.stats {
		display: flex;
		justify-content: space-between;
		gap: var(--pd-xl2);

		span {
			display: flex;
			align-items: center;
			gap: var(--pd-sm);
		}

		img {
			height: 15px;
			width: 15px;
		}
		span {
			color: var(--c-gray-s2);
		}
	}
</style>
