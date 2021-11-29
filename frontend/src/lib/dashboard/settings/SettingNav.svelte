<script lang="ts">
	import { onMount } from 'svelte';

	export let options = ['Profile', 'Notifcations', 'Secuirty', 'Data'];

	let underlineElement: HTMLElement;
	let lineElement: HTMLElement;
	let active = 'Profile';

	const moveUnderline = (element: HTMLElement) => {
		const elementRect = element.getBoundingClientRect();
		const lineRect = lineElement.getBoundingClientRect();
		const elemStyle = getComputedStyle(element);
        const paddingOffset = parseFloat(elemStyle.paddingRight) + parseFloat(elemStyle.paddingLeft);

		underlineElement.style.width = `${
			elementRect.width - paddingOffset
		}px`;
		underlineElement.style.left = `${(elementRect.left - lineRect.left) + paddingOffset/2}px`;
	};

	const getActiveElement = (active: string): HTMLElement => {
		const activeElem = document.getElementById(`option--${active.toLowerCase()}`);
		if (!activeElem) return;

		return activeElem;
	};

	const returnUnderline = () => {
		if (!getActiveElement(active)) return;
		moveUnderline(getActiveElement(active));
	};

	const handleClickEvent = (event) => {
		active = event.target.innerText;

		moveUnderline(event.target);
	};
	const handleHoverEvent = (event) => {
		moveUnderline(event.target);
	};
</script>

<nav>
	<div class="options">
		{#each options as navItem}
			<h4
				id="option--{navItem.toString().toLowerCase()}"
				href="/"
				class:active={navItem.toLowerCase() == active.toLowerCase()}
				on:click={handleClickEvent}
				on:mouseenter={handleHoverEvent}
				on:mouseleave={returnUnderline}
			>
				{navItem}
			</h4>
		{/each}
	</div>
	<div class="line" bind:this={lineElement}>
		<div class="underline" bind:this={underlineElement} />
	</div>
</nav>

<style lang="scss">
	nav {
		display: flex;
		flex-direction: column;
		gap: var(--pd-xs);
	}
	.options {
		display: flex;
		// gap: var(--pd-xl);
	}
	.line {
		width: 100%;
		height: 1px;
		background-color: var(--tran-s1);
		position: relative;

		.underline {
			height: 100%;
			width: 50px;
			position: absolute;
			background-color: var(--c-blue);
			left: 0;

			transition: transform 0.25s linear, left 0.25s linear, width 0.25s linear;
		}
	}

	h4 {
		color: var(--c-gray-s3);
		font-weight: 600;
		font-size: var(--fs-h4);
		transition: color 0.25s linear;

		&:hover {
			cursor: pointer;
		}
	}
	h4:not(:first-of-type) {
		padding: 0 25px;
	}
	h4:first-child {
		padding-right: 12.5px;
	}
	.active {
		color: white;
	}
</style>
