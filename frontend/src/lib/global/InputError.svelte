<script lang="ts">
	export let error = null;
	export let success = null;

	const removeError = () => {
		error = null;
	};
</script>

{#if error || success}
	<div class="wrap" class:error class:success>
		<span>{error || success}</span>
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
	.wrap {
		width: 100%;
		padding: var(--pd-sm);
		border-radius: var(--br-sm);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.error {
		background-color: #ff4369;
	}
	.success {
		background-color: rgb(30, 179, 0);
	}
	svg {
		width: 14px;
		height: 14px;
	}
</style>
