<script lang="ts">
	import Checkbox from '$lib/global/Checkbox.svelte';

	import Icon from '$lib/global/Icon.svelte';
	import { date, name, commerce, vehicle } from 'faker';
	import Status from './Status.svelte';

	export let selectable = true;
	export let rowsPerPageOptions = [5, 10, 20, 40];

	/* Data */
	export let rows = [
		{ field: 'name', headerName: 'name' },
		{ field: 'price', headerName: 'price' },
		{ field: 'status', headerName: 'status' },
		{ field: 'createdDate', headerName: 'created date' },
		{ field: 'action', headerName: 'action' }
	];

	export let columns = [];

	for (let x of Array(12)) {
		columns.push({
			name: name.firstName(),
			price: commerce.price(),
			createdDate: date.month(),
			status: vehicle.color()
		});
	}

	let selected = [];
	let selectedData = [];
	let showUnselectIcon = false;

	function selectRow(event: Event) {
		const target = event.target as HTMLInputElement;
		const id = Number(target.dataset.id);

		showUnselectIcon = true;

		/* Remove row if it already exsits */
		if (selected.includes(id)) return (selected = selected.filter((row) => row != id));

		selected = [...selected, id];
		selectedData = [...selectedData, columns[id]];
	}

	function handleMainSelected(event) {
		const target = event.target as HTMLInputElement;

		showUnselectIcon = false;
		if (!target.checked) return (selected = []);

		selected = [...Array.from({ length: columns.length }, (v, i) => i)];
	}

	/* Pagnation */
	let rowsPerPage = 5;

	let max = columns.length;
	let page = 0;
	let start = 0;
	let end = rowsPerPage;

	function handleNext() {
		if (max == end) return;
		page++;
	}

	function handlePrevious() {
		if (start == 0) return;
		page--;
	}

	$: start = page * rowsPerPage;
	$: end = Math.min(start + rowsPerPage, max);
	$: filteredData = columns.slice(start, end);

	$: lastPage = Math.max(Math.ceil(max / rowsPerPage) - 1, 0);
	$: if (page > lastPage) {
		page = lastPage;
	}
</script>

<section>
	<table cellspacing={0}>
		<thead>
			<tr>
				{#if selectable}
					<th>
						<Checkbox
							on:change={handleMainSelected}
							checked={selected.length > 0}
							type={selected.length == max ? 'checkmark' : 'dash'}
							id="all"
						/>
					</th>
				{/if}
				{#each rows as row}
					<th>{row.headerName}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each filteredData as column, i}
				<tr class:selected={selected.includes(page > 0 ? i + rowsPerPage * page : i)}>
					{#if selectable}
						<td>
							<Checkbox
								on:change={selectRow}
								id={page > 0 ? i + rowsPerPage * page : i}
								checked={selected.includes(page > 0 ? i + rowsPerPage * page : i)}
							/>
						</td>
					{/if}

					<!-- TODO: Allow for dynamic data to be placed -->
					<td>{column.name}</td>
					<td>{column.price}</td>
					<td>{column.createdDate}</td>
					<td><Status status={column.status} /></td>
					<td>S P R</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<!-- TODO: Seperate Controls -->
	<div class="controls">
		<span>Rows per page: </span>
		<select bind:value={rowsPerPage}>
			{#each rowsPerPageOptions as rows}
				<option value={rows}>{rows}</option>
			{/each}
		</select>
		<span>{start} - {end} of {columns.length}</span>
		<button class="button button--previous" on:click={handlePrevious} class:disabled={start == 0}>
			<Icon icon="arrow" color={start == 0 ? 'var(--c-gray-s3)' : 'var(--c-gray-s1)'} />
		</button>
		<button class="button button--next" on:click={handleNext} class:disabled={max == end}>
			<Icon icon="arrow" color={max == end ? 'var(--c-gray-s3)' : 'var(--c-gray-s1)'} />
		</button>
	</div>
</section>

<style lang="scss">
	section {
		width: 100%;
	}
	table {
		width: 100%;
	}
	thead {
		th {
			text-transform: capitalize;
			padding: 0 1em;
			text-align: right;
		}
		th:not(:last-of-type) {
			text-align: left;
		}
	}
	tbody {
		td {
			padding: 1.5em 1em;
			border-bottom: 1px solid var(--tran-s1);
		}
		td:last-of-type {
			text-align: right;
		}
		tr {
			transition: background-color 0.1s linear;
		}
		tr:hover {
			background-color: var(--tran-s2);
		}
		tr.selected {
			background-color: rgb(23, 98, 255, 0.24);
		}
		tr.selected:hover {
			background-color: rgb(23, 98, 255, 0.3);
		}
	}
	.controls {
		display: flex;
		justify-content: end;
		align-items: center;
		gap: var(--pd-sm);
		width: 100%;
		height: 40px;
		padding: 2em 1em;

		select {
			background-color: transparent;
			color: white;
			outline: none;
			border: none;
		}
		select:focus {
			background-color: var(--c-black-s2);
			outline: none;
		}
	}

	.button {
		appearance: none;
		background-color: transparent;
		outline: none;
		border: none;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: background-color 0.25s linear;

		&--previous {
			transform: rotate(-180deg);
		}

		&:not(.disabled):hover {
			background-color: var(--tran-s2);
		}
	}
</style>
