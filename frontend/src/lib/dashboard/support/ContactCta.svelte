<script>
	import Button from '$lib/global/Button.svelte';
</script>

<header>
	<div class="line" />
	<h2>Didn't find what you're looking for?</h2>
	<p>Please reach out to us, we will be glad to answer any of questions.</p>
	<Button href="/dashboard/contact" size="large">Contact Us</Button>
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: column;
		margin-bottom: var(--pd-xl);
		align-items: flex-start;
        margin-top: var(--pd-xl);
        gap: var(--pd-sm);

		p {
			color: var(--c-gray-s2);
		}
		.line {
			height: 1px;
			width: 100%;
			background-color: var(--tran-s1);
		}
	}
</style>
