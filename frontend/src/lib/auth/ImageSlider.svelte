<script lang="ts">
	import type { SliderContent } from '$lib/interfaces/interfaces';
	import { onDestroy, onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	export let content: Array<SliderContent>;
	let currentSlide = 0;
	let interval;
	function changeSlide(slide) {
		if (slide > content.length - 1) return (currentSlide = 0);
		if (slide < 0) return (currentSlide = content.length - 1);

		currentSlide = slide;
	}

	const slideControls = {
		next: () => {
			changeSlide(currentSlide + 1);
		},
		previous: () => {
			changeSlide(currentSlide - 1);
		},
		pause: () => {
			clearInterval(interval);
		},
		play: () => {
			interval = setInterval(() => {
				slideControls.next();
			}, 5000);
		}
	};

	onMount(() => {
		slideControls.play();
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<section on:mouseleave={() => slideControls.play()} on:mouseenter={() => slideControls.pause()}>
	{#key currentSlide}
	<div transition:fade={{ duration: 350 }} class="content">
			<img src={content[currentSlide].imgSrc} alt="Silver coin with AGC logo" />
			<h1 class=".title">{content[currentSlide].title}</h1>
			<p>{content[currentSlide].desc}</p>
		</div>
	{/key}

	<div class="controls">
		{#each Array(content.length) as _, i}
			<div
				data-slide={i}
				class:circle--active={i == currentSlide}
				class="circle"
				on:click={() => changeSlide(i)}
			/>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
        justify-content: center;
		align-items: center;
		text-align: center;
		color: var(--c-black-s2);
		height: 100%;
        position: relative;
	}
	.content {
        position: absolute;
		width: 100%;
		max-width: 500px;
		margin-top: -15%;
	}
	img {
		width: 100%;
		display: block;
	}

	.controls {
		display: flex;
		justify-content: center;
		justify-items: center;
		gap: 0.7em;
        margin-top: auto;

		.circle {
			background-color: var(--tran-s2);
			border-radius: 50%;
			width: 15px;
			height: 15px;

			transition: width 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
			&--active {
				background-color: var(--c-blue);
				width: 40px;
				border-radius: 10px;
			}
		}
	}
</style>
