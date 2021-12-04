<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ session }) => {
		if (session.user) {
			return {
				status: 300,
				redirect: '/dashboard/home',
				headers: {
					london: '/dashboard/home'
				}
			};
		}

		return {};
	};
</script>

<script lang="ts">
	import ImageSlider from '$lib/auth/ImageSlider.svelte';
	import type { SliderContent } from '$lib/interfaces/interfaces';
	
	export let location;
	console.log(location)

	const content: Array<SliderContent> = [
		{
			imgSrc: '/images/token_shadow.png',
			title: 'Silver price alert #1',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, velit quos in explicabo id blanditiis est voluptas optio quisquam itaque.'
		},
		{
			imgSrc: '/images/dashboard_preview.png',
			title: 'THE NEW NEW PRICE alert #2',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, velit quos in explicabo id blanditiis est voluptas optio quisquam itaque.'
		},
		{
			imgSrc: '/images/token_shadow.png',
			title: 'The thid and final big shot #3',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, velit quos in explicabo id blanditiis est voluptas optio quisquam itaque.'
		}
	];
</script>

<div class="grid">
	<div class="left-side">
		<ImageSlider {content} />
	</div>
	<div class="right-side">
		<slot />
	</div>
</div>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: 50% 50%;
		height: 100%;
		justify-content: center;
		position: relative;
		.left-side,
		.right-side {
			padding: 27px 57px;
			position: relative;
		}

		.left-side {
			background: var(--g-gray);
		}
		.right-side {
			display: flex;
			flex-direction: column;
		}
		@media only screen and (max-width: 768px) {
			.right-side {
				padding: 27px 30px;
			}
		}
		@media only screen and (max-width: 375px) {
			.right-side {
				padding: 27px 20px;
			}
		}
	}

	@media only screen and (max-width: 1000px) {
		.grid {
			grid-template-columns: 100%;
		}
		.left-side {
			display: none;
		}
	}
</style>
