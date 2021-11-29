<script>
	import PageHeader from '$lib/dashboard/PageHeader.svelte';
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

	<table class="table" cellspacing={0}>
		<thead>
			<tr>
				<th>Profile</th>
				<th>Email</th>
				<th>Browser</th>
				<th>SMS</th>
			</tr>
		</thead>

		<tbody>
			{#each Array(5) as _}
				<tr>
					<td>When someone follows you</td>
					<td><input type="checkbox" name="" /></td>
					<td><input type="checkbox" name="" /></td>
					<td><input type="checkbox" name="" /></td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<div class="card">
	<h3>Email Prefrences</h3>

	<table class="table" cellspacing={0}>
		<thead>
			<tr>
				<th>Select which emails you want to receive</th>
				<th />
			</tr>
		</thead>

		<tbody>
			{#each Array(5) as _}
				<tr>
					<td>When someone follows you</td>
					<td><input type="checkbox" name="" /></td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="scss">
	input {
		width: 15px;
		height: 15px;
	}
	.table {
		width: 100%;

		th {
			padding: 0;
			text-align: left;
			border-bottom: 1px solid var(--tran-s1);
		}
		th:not(:first-of-type) {
			text-align: center;
		}

		tr td:not(:first-of-type) {
			text-align: center;
		}
		td {
			padding: var(--pd-sm) 0;
			color: var(--c-gray-s2);
		}
		th {
			padding: var(--pd-xs) 0;
			color: var(--c-gray-s1);
		}
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
