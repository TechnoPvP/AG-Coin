<script>
	export let href = '/';
	export let title;
	export let desc ;
    export let active;
</script>

<a {href} class="item" class:active>
    <div class="status-circle" class:active></div>

	<img src="/images/profile_adam.jpg" alt="Notifcation icon" />

	<div class="content">
		<h4>{title}</h4>
		<span>{desc}</span>
	</div>
</a>

<style lang="scss">
	.item {
		display: flex;
        align-items: center;
		gap: var(--pd-md);
		padding: 1.2em 1.5em;
        transition: background-color 0.15s ease-out;

        &:hover {
            opacity: 0.80;
        }

	}
    .status-circle {
        width: 5px;
        height: 5px;
        background-color: var(--c-gray-s2);
        border-radius: 50%;
        
        &.active {
            background-color: var(--c-blue);
        }
    }
    .active {
        background-color: var(--tran-s2);
    }
    span {
        color: var(--c-gray-s2);
    }

	img {
		width: 45px;
		height: 45px;
		border-radius: 50%;
	}
</style>
