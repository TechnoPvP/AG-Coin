<script>
	import PageHeader from '$lib/dashboard/PageHeader.svelte';
	import Table from '$lib/dashboard/settings/Table.svelte';

	const notficationData = {
		headers: ['profile', 'email', 'browser', 'sms'],
		items: [
			'When someone follows you',
			'When someone follows you',
			'When someone follows you',
			'When someone follows you',
			'When someone follows you',
			'When someone follows you'
		]
	};

	const emailData = {
		headers: ['Select which emails you want to receive', ''],
		items: [
			'When someone follows you',
			'When someone follows you',
			'When someone follows you',
			'When someone follows you',
			'When someone follows you',
			'When someone follows you'
		]
	};
</script>

<PageHeader
	title="Notifications"
	desc="Neither your full name, your birth date nor other contact details, will be visible for other users."
	breadcrumps={false}
	spaced
/>

<div class="card">
	<h3>Alerts</h3>

	<div class="options">
		{#each Array(5) as _}
			<div class="option">
				<span>Turn on notifcation sound</span>
				<input type="checkbox" name="sound" />
			</div>
		{/each}
	</div>

	<Table headers={notficationData.headers} items={notficationData.items} />
</div>

<div class="card">
	<h3>Email Prefrences</h3>
	<Table headers={emailData.headers} items={emailData.items} />
</div>

<style lang="scss">
	input {
		width: 15px;
		height: 15px;
	}
	.option {
		display: flex;
		align-items: center;
		justify-content: space-between;

		span {
			color: var(--c-gray-s2);
		}
	}
	.options {
		display: flex;
		flex-direction: column;
		gap: var(--pd-md);
		margin-bottom: var(--pd-sm);
	}
	.card {
		max-width: 800px;
		background-color: var(--c-black-s2);
		padding: var(--pd-md);
		border-radius: var(--br-md);
		display: flex;
		flex-direction: column;
		gap: var(--pd-md);

		&:not(:last-of-type) {
			margin-bottom: var(--pd-xl);
		}
	}
</style>
