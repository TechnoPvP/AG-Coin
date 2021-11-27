<script lang="ts">
	type Size = 'small' | 'large';
	type Color = 'white' | 'black';

	const COLORS = {
		black: 'black',
		white: 'white',
		twhite: '#fefefcab',
		tblack: 'linear-gradient(90deg, #040506 1.7%, #1c1d2a9a 101.56%)'
	};

	export let size: Size = 'small';
	export let trans = false;
	export let color: keyof typeof COLORS;
	export let href;
</script>

<a
	{href}
	style="--color: {COLORS[trans ? `t${color}` : color]}; 
	color: {color == 'white' ? '#1D1E2C' : 'white'}"
	class="size--{size}"
>
	<slot />
</a>

<style lang="scss">
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px 16px;
		background: var(--color);
		border-radius: var(--br-sm);
		color: var(--c-black-s1);
		font-weight: bold;
	}
	.size {
		&--small {
			padding: 7px 20px;
		}
		&--large {
			padding: 20px 30px;
			min-width: 210px;
		}
	}
</style>
