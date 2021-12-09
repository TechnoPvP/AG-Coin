<script>
	import { session } from '$app/stores';
	import { sidebarOpen } from '$lib/stores';
	import ProfileDropdown from './ProfileDropdown.svelte';

	export let user;
	let dropdownActive = true;

	function closeSidebar() {
		$sidebarOpen = !$sidebarOpen;
	}
</script>

<section>
	<div class="tools">
		<div on:click={closeSidebar} class="hamburger"><span /> <span /> <span /></div>
		<img class="icon search" src="/icons/search.svg" alt="Profile Icon" />
	</div>

	<div
		class="profile"
		on:mouseleave={() => (dropdownActive = false)}
		on:mouseenter={() => (dropdownActive = true)}
	>
		<img class="icon notifcations" src="/icons/notifcations.svg" alt="Profile Icon" />

		<div class="user">
			<img class="profile__icon" src={$session.user.avatar} alt="Profile Icon" />
			<span>{user}</span>
			<img class="profile__dropdown" src="/icons/down_arrow.svg" alt="Down arrow icon" />
			{#if dropdownActive}
				<ProfileDropdown />
			{/if}
		</div>
	</div>
</section>

<style lang="scss">
	section {
		width: 100%;
		background-color: var(--c-black-s2);
		border-bottom: 1px solid var(--tran-s1);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1em 2em;
	}
	.user {
		display: flex;
		gap: 1em;
		align-items: center;
		position: relative;
	}
	.user:hover {
		cursor: pointer;
	}
	.tools {
		display: flex;
		gap: 1.5em;
	}
	.hamburger {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 30px;
		height: 20px;

		span {
			display: block;
			width: 100%;
			min-height: 2px;
			background-color: var(--c-gray-s1);
		}
	}
	.profile {
		display: flex;
		align-items: center;
		gap: 1em;

		&__icon {
			border-radius: 50%;
			width: 35px;
			height: 35px;
		}
	}
	.icon {
		width: 20px;
		height: 20px;
	}

	@media screen and (max-width: 768px) {
		.profile {
			span {
				display: none;
			}
		}
	}
</style>
