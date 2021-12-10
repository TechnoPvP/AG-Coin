<script lang="ts">
	import { goto } from '$app/navigation';

	import { session } from '$app/stores';
	import host from '$lib/utils/host';
	import { fade, fly } from 'svelte/transition';

	async function logout() {
		await fetch(`${host}/auth/logout`, {
			credentials: 'include'
		});

		goto('/');
		$session.user = null;
		location.reload()
	}
</script>

<div class="dropdown" in:fly={{ y: -20 }} out:fade={{ duration: 100 }}>
	<div class="dropdown__section profile">
		<div class="profile-icon">
			<img src="/icons/profile.svg" alt="Profile icon" />
		</div>
		<h4>{$session.user.first_name}</h4>
	</div>

	<div class="line" />

	<a href="/dashboard/settings/" class="dropdown__section">
		<img src="/icons/profile.svg" alt="Settings icon" />
		<span>Settings</span>
	</a>

	<a href="/dashbord/alerts" class="dropdown__section">
		<img src="/icons/alerts.svg" alt="Settings icon" />
		<span>Alerts</span>
	</a>

	<a href="/dashbord/notifications" class="dropdown__section">
		<img src="/icons/news.svg" alt="Settings icon" />
		<span>Notifications</span>
	</a>

	<div class="line" />

	<div on:click={logout} class="dropdown__section">
		<img src="/icons/time.svg" alt="Settings icon" />
		<span>Logout</span>
	</div>
</div>

<style lang="scss">
	.dropdown {
		background-color: var(--c-black-s2);
		position: absolute;
		top: 100%;
		right: 0;
		border-radius: var(--br-sm);
		display: flex;
		flex-direction: column;
		min-width: 180px;
		z-index: 100;

		&__section {
			display: flex;
			align-items: center;
			gap: var(--pd-sm);
			padding: 1.2em 1.5em;
			transition: color 0.15s linear;

			img {
				width: 17px;
				height: 17px;
			}

			&.profile {
				padding: 1.2em 0.8em;
				position: relative;
			}
		}

		&__section:hover {
			color: var(--c-blue);
		}

		h4 {
			white-space: nowrap;
		}

		span {
			font-weight: bold;
		}
	}
	.line {
		width: 100%;
		left: 0;
		right: 0;
		height: 1px;
		background-color: var(--tran-s1);
	}
	.profile-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		padding: 0.5em;
		background-color: var(--tran-s2);
		border-radius: 50%;

		img {
			max-width: 15px;
			max-height: 15px;
		}
	}
</style>
