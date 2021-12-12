<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import NotifcationItem from './NotifcationItem.svelte';

	type ViewType = 'unread' | 'arichived';

	let selectedView: ViewType = 'unread';

	const changeStatus = (status: ViewType) => {
		selectedView = status;
	};
</script>

<div class="dropdown" in:fly={{ y: -20 }} out:fade={{ duration: 100 }}>
	<header>
		<h4>Notifcations</h4>
		<span>You have 4 unread notifcations</span>
	</header>

	<div class="buttons-wrap">
		<div
			class="status"
			on:click={() => changeStatus('unread')}
			class:active={selectedView == 'unread'}
		>
			<span>Unread (2)</span>
		</div>
		<div
			class="status"
			on:click={() => changeStatus('arichived')}
			class:active={selectedView == 'arichived'}
		>
			<span>Arichived</span>
		</div>
	</div>

	<div class="notifcations">
		{#each Array(2) as _}
			<NotifcationItem title="SLV has hit 1.512." desc="Silver has hit yor price alert." active />
			<hr class="line">
		{/each}

		{#each Array(3) as _}
			<NotifcationItem
				title="SLV has hit 1.512."
				desc="Silver has hit yor price alert."
				active={false}
			/>
			<hr class="line">
		{/each}
	</div>

	<footer>
		<a href="/dashboard/notifcations"> Show all notifications</a>
	</footer>
</div>

<style lang="scss">
	.dropdown {
		background-color: var(--c-black-s2);
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		border-radius: var(--br-sm);
		display: flex;
		flex-direction: column;
		min-width: 400px;
		max-height: 450px;

		z-index: 100;

		.notifcations {
			overflow-y: auto;
		}

		header {
			top: 0;
			flex-direction: column;
			justify-content: start;
			background-color: var(--c-black-s2);
			border-bottom: 1px solid var(--tran-s1);
		}
		footer {
			display: flex;
			justify-content: center;
		}
	}
	.buttons-wrap {
		display: flex;
		justify-content: space-between;

		.status {
			display: flex;
			justify-content: center;
			width: 100%;
			padding: 1em 1.5em;

			&.active {
				border-bottom: 1px solid var(--c-blue);
			}
		}
		.status:hover {
			cursor: pointer;
		}
	}
	header,
	footer {
		padding: 1em 1.5em;
	}
	a {
		color: var(--c-blue);
	}
	.line {
		color: var(--tran-s1);
		margin: 0;
		padding: 0;
	}

	@media screen and (max-width: 425px) {
		.dropdown {
			min-width: unset;
			width: 320px;
			left: -100%;
		}
	}
</style>
