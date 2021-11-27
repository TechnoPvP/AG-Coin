<script>
	export let title;
</script>

<div>
    <h4>{title}</h4>
    <div class="items">
        <slot />
    </div>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
    .items {
        gap: 0.5em;
		color: var(--c-gray-s2)
    }
	h4 {
		text-transform: uppercase;
		font-size: 10px;
		font-weight: var(--fw-regular);
		color: var(--c-gray-s3);
		margin-left: 1.5em;
	}
</style>
