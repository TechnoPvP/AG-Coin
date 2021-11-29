<script lang="ts">
	export let value;
	export let minRows = 1;
	export let maxRows = 10;
	export let focused = false;

	let textAreaElement: HTMLTextAreaElement;

	$: minHeight = `${1 + minRows * 1.2}em`;
	$: maxHeight = maxRows ? `${1 + maxRows * 1.2}em` : `auto`;

	$: if (focused && textAreaElement) {
		textAreaElement.focus();
	}
	/* Better Approch: https://stephanwagner.me/auto-resizing-textarea-with-vanilla-javascript */
</script>

<div class="wrap">
	<pre
		aria-hidden="true"
		style="min-height: {minHeight}; max-height: {maxHeight}">{value + '\n'}</pre>

	<textarea name="comment" placeholder="Add to the discussion" bind:value bind:this={textAreaElement} />
</div>

<style lang="scss">
	.wrap {
		position: relative;
		width: 100%;
	}
	textarea {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		appearance: none;
		background-color: var(--tran-s2);
		border: none;
		padding: var(--pd-sm);
		color: var(--c-gray-s1);
		font-size: 16px;
		resize: none;
		overflow: hidden;
	}
	pre {
		visibility: hidden;
	}
	textarea:focus {
		border: none;
		outline: none;
	}
</style>
