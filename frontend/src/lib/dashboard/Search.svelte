<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Questions from './support/Questions.svelte';
	import SearchPreview from './support/SearchPreview.svelte';
	import { supportData } from '$lib/mockData/support';
	import Fuse from 'fuse.js';

	export let value;
	let open = false;

	var options = {
		shouldSort: true,
		includeMatches: true,
		threshold: 0.4,
		// location: 0,
		// distance: 100,
		// maxPatternLength: 32,
		// minMatchCharLength: 1,
		keys: ['title']
	};
	const fuse = new Fuse(supportData, options);

	function setDropdownOpen(boolean: boolean) {
		open = boolean;
	}

	let topQuestions = [
		'How do i create AGCoin.com alert?',
		'How do i setup my AGCOIN Alerts?',
		'Your alert is 401',
		'Setup profile',
		'Everything you need to know about password recovery',
		'Everything you need to know about password recovery',
		'Everything you need to know about password recovery',
		'Everything you need to know about password recovery',
		'Everything you need to know about password recovery',
		'Transaction ID?'
	];

	$: filteredData = value ? fuse.search(value) : supportData;
	$: if (value) {
	}
</script>

<div class="search">
	<input
		on:blur={() => setDropdownOpen(false)}
		on:focus={() => setDropdownOpen(true)}
		autocomplete="off"
		type="text"
		name="search"
		placeholder="How can we help you?"
		bind:value
	/>
</div>

{#if open}
	<div class="dropdown" transition:fly={{ y: -20 }}>
		{#if value?.length > 1 && filteredData.length == 0}
			<div class="empty">
				<img src="/icons/404_icon.svg" alt="404 icon person looking lost" />
				<h1>We're sorry, we can't come up with anything</h1>
				<p>
					The page you’re looking for doesn’t exsist. Please check your spelling, and try again.
				</p>
			</div>
		{:else}
			<div class="questions">
				{#if !value || value?.length < 2}
					{#each supportData as question}
						<SearchPreview title={question.title} desc={question.content} category="AGCoin" />
					{/each}
				{:else}
					{#each filteredData as question}
						<SearchPreview
							title={question['item']?.title
								.toLowerCase()
								.replace(value.toLowerCase(), `<mark>${value.toLowerCase()}</mark>`)}
							desc={question['item']?.content}
							category="AGCoin"
						/>
					{/each}
				{/if}
			</div>
		{/if}

		<div class="top-questions">
			<div class="line" />
			<Questions button={false} title="Top User Questions" questions={topQuestions} />
		</div>
	</div>
{/if}

<style lang="scss">
	.dropdown {
        display: grid;
        gap: 1rem;
        grid-template-columns: 1fr auto;
		position: absolute;
		height: 60%;
		left: 0;
		right: 0;
		margin: 0 1.5em;
		background-color: var(--c-black-s2);
		padding: var(--pd-lg);
	}
	.questions {
		display: flex;
		flex-direction: column;
		gap: var(--pd-md);
        overflow-y: auto;
	}
	.top-questions {
		display: flex;
		justify-content: end;
		padding: 0 var(--pd-lg);
	}
	.empty {
		display: flex;
		align-items: center;
		flex-direction: column;
		text-align: center;
		gap: var(--pd-md);

		img {
			max-width: 220px;
		}
		p {
			color: var(--c-gray-s2);
		}
	}

	.line {
		height: 100%;
		width: 1px;
		margin: 0 var(--pd-lg);
		background-color: var(--tran-s1);
	}
	input {
		padding: 20px 27px;
		width: 100%;
		appearance: none;
		border: none;
		background-color: var(--tran-s2);
		font-size: var(--fs-h4);
		font-weight: 600;
		border-radius: var(--br-sm);
		color: var(--c-gray-s1);

		&:focus {
			border: none;
			outline: none;
		}
		&::placeholder {
			color: var(--tran-s1);
		}
	}

    @media screen and (max-width: 1024px) {
        .dropdown {
            grid-template-columns: 1fr;

            .top-questions {
                display: none;
            }
        }
    }
</style>
