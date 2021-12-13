<script lang="ts">
	import PageHeader from '$lib/dashboard/PageHeader.svelte';
	import ContactCta from '$lib/dashboard/support/ContactCta.svelte';
	import Questions from '$lib/dashboard/support/Questions.svelte';

	let questions = [
		'How do i create AGCoin.com alert?',
		'How do i setup my AGCOIN Alerts?',
		'Your alert is 401',
		'Setup profile',
		'Everything you need to know about password recovery',
		'Transaction ID?'
	];
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
</script>

<div class="container">
	<PageHeader title="Support" />

	<header>
		<h2>How can we help you?</h2>
		<div class="line" />
	</header>

	<div class="questions">
		<Questions title="Getting Started" {questions} />
		<Questions title="Getting Started" questions={topQuestions} />
		<Questions title="Getting Started" {questions} />
	</div>

	<ContactCta />
</div>

<style lang="scss">
	.container {
		padding-top: var(--pd-lg);
		padding-bottom: var(--pd-lg);
	}
    .questions {
        display: flex;
        flex-wrap: wrap;
        column-gap: var(--pd-lg);
        row-gap: var(--pd-xl2);
        justify-content: space-between;
    }
    header {
        display: flex;
        flex-direction: column;
        gap: var(--pd-xs);
        margin-top: var(--pd-xl2);
        margin-bottom: var(--pd-xl);
        align-items: flex-start;
    }
	.line {
        height: 1px;
        width: 100%;
        background-color: var(--tran-s1);
	}
</style>
