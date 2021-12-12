<script lang="ts">
	import Icon from '$lib/global/Icon.svelte';

	let rowsPerPage;

	export let maxSize;
	export let rowsPerPageOptions: number[];
	export let page = 0;

	export let start = 0;
	export let end = rowsPerPage;

	function handleNext() {
		if (maxSize == end) return;
		page++;
	}

	function handlePrevious() {
		if (start == 0) return;
		page--;
	}

	$: start = page * rowsPerPage;
	$: end = Math.min(start + rowsPerPage, maxSize);

	$: lastPage = Math.max(Math.ceil(maxSize / rowsPerPage) - 1, 0);
	$: if (page > lastPage) {
		page = lastPage;
	}
</script>

<div class="controls">
	<span>Rows per page: </span>
	<select bind:value={rowsPerPage}>
		{#each rowsPerPageOptions as rows}
			<option value={rows}>{rows}</option>
		{/each}
	</select>
	<span>{start} - {end} of {maxSize}</span>
	<button class="button button--previous" on:click={handlePrevious} class:disabled={start == 0}>
		<Icon icon="arrow" color={start == 0 ? 'var(--c-gray-s3)' : 'var(--c-gray-s1)'} />
	</button>
	<button class="button button--next" on:click={handleNext} class:disabled={maxSize == end}>
		<Icon icon="arrow" color={maxSize == end ? 'var(--c-gray-s3)' : 'var(--c-gray-s1)'} />
	</button>
</div>

<style lang="scss">
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
