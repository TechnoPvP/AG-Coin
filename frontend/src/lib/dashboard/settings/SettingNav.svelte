<script lang="ts">
	export let options: { [key: string]: string };
	let active = 'Profile';

	let underlineElement: HTMLElement;
	let lineElement: HTMLElement;

	const moveUnderline = (element: HTMLElement) => {
		const elementRect = element.getBoundingClientRect();
		const lineRect = lineElement.getBoundingClientRect();

		underlineElement.style.width = `${elementRect.width}px`;
		underlineElement.style.left = `${elementRect.left - lineRect.left}px`;
	};

	const getActiveElement = (active: string): HTMLElement => {
		const activeElem = document.getElementById(`option--${active.toLowerCase()}`);
		if (!activeElem) return;

		return activeElem;
	};

	const handleClickEvent = (event) => {
		active = event.target.innerText;

		moveUnderline(event.target);
	};
	const handleMouseLeave = () => {
		if (!getActiveElement(active)) return;
		moveUnderline(getActiveElement(active));
	};
	const handleHoverEvent = (event) => {
		moveUnderline(event.target);
	};
</script>

<nav>
	<div class="options" on:mouseleave={handleMouseLeave}>
		{#each Object.entries(options) as [key, href]}
			<a
				id="option--{key}"
				{href}
				class:active={key == active.toLowerCase()}
				on:click={handleClickEvent}
				on:mouseenter={handleHoverEvent}
			>
				{key}
			</a>
		{/each}
	</div>
	<div class="line" bind:this={lineElement}>
		<div class="underline" bind:this={underlineElement} />
	</div>
</nav>

<style lang="scss">
	nav {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		gap: var(--pd-xs);
	}
	.options {
		display: flex;
		gap: var(--pd-xl);
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

	a {
		color: var(--c-gray-s3);
		font-weight: 600;
		font-size: var(--fs-h4);
		transition: color 0.25s linear;
		text-transform: capitalize;

		&:hover {
			cursor: pointer;
		}
	}
	.active {
		color: white;
	}
</style>
