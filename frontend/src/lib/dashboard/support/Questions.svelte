<script lang="ts">
	import Button from '$lib/global/Button.svelte';
	import { fade } from 'svelte/transition';
	import { slugify } from '$lib/utils/stringUtils';

	export let title;
	export let questions: Array<String> = [];
	export let button = true;
	let expanded = false;

	const expandQuestions = () => {
		expanded = !expanded;
	};
</script>

<div class="questions">
	<h4>{title}</h4>
	{#each expanded ? questions.slice(0, 15) : questions.slice(0, 6) as question}
		<a href="support/{slugify(question.toString())}">{question}</a>
	{/each}

	{#if questions.length > 6 && button}
		<Button type="button" size="regular" on:click={expandQuestions}>
			{expanded ? 'Close' : `View all ${questions.length} questions`}
		</Button>
	{/if}
</div>

<style lang="scss">
	.questions {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--pd-md);

		a {
			color: var(--c-blue);
		}
	}
</style>
