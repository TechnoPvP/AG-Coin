<script lang="ts">
	export let error;

	const removeError = () => {
		error = null;
	};
</script>

{#if error}
	<div class="error">
		<span>{error}</span>
		<svg
			width="19"
			height="19"
			viewBox="0 0 19 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			on:click={removeError}
		>
			<rect
				y="2.85938"
				width="3.65683"
				height="21.941"
				rx="1.82842"
				transform="rotate(-45 0 2.85938)"
				fill="white"
			/>
			<rect
				x="15.6055"
				width="3.65683"
				height="21.941"
				rx="1.82842"
				transform="rotate(45 15.6055 0)"
				fill="white"
			/>
		</svg>
	</div>
{/if}

<style lang="scss">
	.error {
		background-color: #ff4369;
		width: 100%;
		padding: var(--pd-sm);
		border-radius: var(--br-sm);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	svg {
		width: 14px;
		height: 14px;
	}
</style>
