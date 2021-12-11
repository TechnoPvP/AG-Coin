<script lang="ts">
	export let pass: string;
	let progress = 0;
	let strength;

	let strongCheck = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
	let mediumCheck = /(?=.*\d)(?=.*[a-z])(?=.{5,})/;
	function checkPassStrength(pass: string) {
		if (!pass) return (progress = 0);

		if (strongCheck.test(pass)) {
			progress = 6;
		} else if (mediumCheck.test(pass)) {
			progress = 4;
		} else if (pass.length > 3) {
			progress = 2;
		} else {
			progress = 1;
		}
	}
	const COLORS = {
		weak: 'var(--c-red)',
		okay: 'var(--c-orange)',
		good: 'var(--c-green)'
	};

	$: checkPassStrength(pass);
	$: {
		if (progress < 3) {
			strength = 'weak';
		}
		if (progress > 2) {
			strength = 'okay';
		}
		if (progress > 4) {
			strength = 'good';
		}
	}
</script>

<div class="wrap">
	<span>Password Strength</span>
	<div class="bars">
		{#each Array(6) as _, i}
			<div
				class="bar"
				style={progress > 0 && i < progress ? `background-color: ${COLORS[strength]}` : ''}
			/>
		{/each}
	</div>
</div>

<style lang="scss">
	.wrap {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 0.6em;
	}
	.bars {
		display: flex;
		justify-content: space-between;
		gap: 0.5rem;
	}
	.bar {
		width: 100%;
		height: 11px;
		border-radius: var(--br-md);
		background-color: var(--tran-s2);
	}
	.active {
		background-color: var(--c-green);
	}
</style>
