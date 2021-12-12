<script lang="ts">
	type Status = 'active' | 'triggered' | 'paused';

	export let status;
</script>

<div class="status">
	{status}
</div>

<style lang="scss">
    .status {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        min-width: 80px;
        padding: 4px 8px;
        background-color: var(--c-red);
        text-transform: capitalize;
        border-radius: 50px;
    }

</style>
