<script>
	import Button from '$lib/global/Button.svelte';
	// import Quill from 'quill';
	import { onMount } from 'svelte';
	// let quill = null;
	// let content = '';
	// let toolbarOptions = [
	// 	[{ header: [1, 2, 3, false] }],

	// 	['bold', 'italic', 'underline', 'blockquote', { align: [] }],

	// 	[{ list: 'ordered' }, { list: 'bullet' }],

	// 	['image']
	// ];
	// function updatePreview() {
	// 	content = quill.root.innerHTML;
	// 	console.log(content);
	// }
	// onMount(async () => {
	// 	const Quill = (await import('quill'))?.default;
	// 	quill = new Quill('#editor', {
	// 		theme: 'snow',
	// 		placeholder: 'Type your content here....',
	// 		modules: {
	// 			toolbar: toolbarOptions
	// 		}
	// 	});
	// });
</script>

<svelte:head>
	<link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
</svelte:head>

<form class="container">
	<div class="toolbar">
		<h4>Pin to top for 1 day</h4>
		<!-- <Button type="button" on:click={updatePreview}>Upload Cover Image</Button> -->
	</div>

	<div class="heading">
		<input class="title" type="text" placeholder="Enter your blog title..." />
		<input class="tags" type="text" placeholder="Enter up to 2 tags...." />
	</div>

	<div class="quill-wrap">
		<div id="editor" style="color: white" />
	</div>

	<div class="result">
		<!-- {@html content} -->
	</div>
</form>

<style lang="scss">
	.quill-wrap {
		margin-top: 2em;
	}
    :global(#editor p) {
        padding-bottom: 12px;
    }
    :global(#editor h1, #editor h2, #editor h3, #editor h4, #editor h5) {
        padding-bottom: 15px;
    }
	:global(.ql-snow) {
		border: none !important;
	}
	:global(.ql-blank:before) {
		color: var(--c-gray-s3) !important;
	}
	:global(.ql-toolbar.ql-snow .ql-picker-label) {
		border: none;
	}
	:global(.ql-snow .ql-picker) {
		color: var(--c-gray-s1);
	}
	:global(.ql-toolbar) {
		background-color: rgb(0, 0, 0);
	}
    :global(.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options) {
        color: var(--c-black-s1);
    }
	.result {
		:global(.ql-size-huge) {
			font-size: 50px;
		}
	}
	.toolbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 4rem;
		margin-bottom: 2rem;
	}
	.heading {
		display: flex;
		flex-direction: column;

		gap: 1rem;
	}
	input {
		appearance: none;
		background-color: transparent;
		border: none;
		color: white;
	}
	input:focus {
		outline: none;
		border: none;
	}
	input::placeholder {
		color: var(--c-gray-s3);
	}
</style>
