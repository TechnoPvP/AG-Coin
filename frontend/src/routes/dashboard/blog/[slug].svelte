<script context="module">
	export async function load({ fetch, page }) {
		const url = `http://localhost:5000/blog/${page.params.slug}`;
		const result = await fetch(url);

		if (result.ok) {
			return {
				props: {
					post: await result.json()
				}
			};
		}
	}
</script>

<script lang="ts">
	export let post;
</script>

<div class="div">
	{@html post.body}
</div>
