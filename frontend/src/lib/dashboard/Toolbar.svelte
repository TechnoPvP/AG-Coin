<script>
	import { session } from '$app/stores';
	import { sidebarOpen } from '$lib/stores';
	import NotifcationsDropdown from './dropdown/NotifcationsDropdown.svelte';
	import ProfileDropdown from './dropdown/ProfileDropdown.svelte';

	export let user;
	let profileDropdown = false;
	let notifcationsDropdown = false;

	function closeSidebar() {
		$sidebarOpen = !$sidebarOpen;
	}
</script>

<section>
	<div class="tools">
		<div on:click={closeSidebar} class="hamburger"><span /> <span /> <span /></div>
		<img class="icon search" src="/icons/search.svg" alt="Profile Icon" />
	</div>

	<div class="profile">
		<div
			class="notifcations"
			on:mouseleave={() => (notifcationsDropdown = false)}
			on:mouseenter={() => (notifcationsDropdown = true)}
		>
			<img class="icon notifcations" src="/icons/notifcations.svg" alt="Profile Icon" />
			{#if notifcationsDropdown}
				<NotifcationsDropdown />
			{/if}
		</div>

		<div class="line" />
		
		<div
		class="user"
		on:mouseleave={() => (profileDropdown = false)}
		on:mouseenter={() => (profileDropdown = true)}
		>
		<img class="profile__icon" src={$session.user.avatar} alt="Profile Icon" />
		<span>{user}</span>
		<img class="profile__dropdown" src="/icons/down_arrow.svg" alt="Down arrow icon" />
		{#if profileDropdown}
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
	.profile {
		display: flex;
		align-items: center;
		gap: 1.3em;
		position: relative;

		&__icon {
			border-radius: 50%;
			width: 35px;
			height: 35px;
		}
	}
	.line {
		flex-grow: 1;
		height: 30px;
		width: 2px;
		background-color: var(--tran-s1);
	}
	.notifcations {
		position: relative;
	}
	.user {
		display: flex;
		gap: 1em;
		align-items: center;
		position: relative;

		&:hover {
			cursor: pointer;
		}
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
