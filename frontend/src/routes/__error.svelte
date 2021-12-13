<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').ErrorLoad} */

	export function load({ error, status }) {
		return {
			props: {
				status,
				error
			}
		};
	}
</script>

<script lang="ts">
	import Button from '$lib/global/Button.svelte';

	export let error;
	export let status;

	const statusMessage = {
		404: {
			icon: '/icons/404_icon.svg',
			title: "404: This isn't the page you're looking for",
			desc: 'The page you’re looking for doesn’t exsist. Please check your spelling, and try again.'
		},
		401: {
			icon: '/icons/401_icon.svg',
			title: '401: Authorzation required',
			desc: 'You don’t have access to the page you’re trying to reach.'
		},
		fallback: {
			icon: '/icons/401_icon.svg',
			title: `${status}: ${error.name} has occurred`,
			desc: `An error has occoured. Please return back to the dashboard.`
		}
	};
	const statusData = statusMessage[status] ?? statusMessage['fallback'];
</script>

<div class="center">
	<img src={statusData.icon} alt="PErson looking confused" />
	<header>
		<h1>{statusData.title}</h1>
		<p>{statusData.desc}</p>
	</header>
	<Button href="/auth/login" size="large">Dashboard</Button>
</div>

<style>
	.center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
		gap: 1rem;
		padding: 3rem 1.5rem;
	}
	header {
		/* display: flex; */
		display: block;
		flex-direction: column;
		gap: 1.2rem;
		max-width: 80ch;
		text-align: center;
		align-items: center;
	}
	h1 {
		font-size: 50px;
	}
	p {
		color: var(--c-gray-s2);
	}
	img {
		display: block;
		/* max-width: 400px; */
		width: 100%;
		max-width: 300px;
	}

	@media screen and (max-width: 768px) {
		img {
			max-width: 240px;
		}
        h1 {
            font-size: 35px;
        }
	}
</style>
