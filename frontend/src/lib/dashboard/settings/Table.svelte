<script>
	export let headers = ['profile', 'email', 'browser', 'sms'];
	export let items = [
		'When someone follows you',
		'When someone follows you',
		'When someone follows you',
		'When someone follows you',
		'When someone follows you',
		'When someone follows you'
	];
</script>

<table class="table" cellspacing={0}>
	<thead>
		<tr>
			{#each headers as header}
				<th>{header}</th>
			{/each}
		</tr>
	</thead>

	<tbody>
		{#each items as item}
			<tr>
				<td>{item}</td>
				{#each Array(headers.length - 1) as _}
					<td><input type="checkbox" name="" /></td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style lang="scss">
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
			text-transform: capitalize;
		}
	}
</style>
