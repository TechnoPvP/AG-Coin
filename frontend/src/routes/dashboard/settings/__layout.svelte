<script context="module" lang="ts">
	import type { Load, LoadInput } from '@sveltejs/kit';
	import host from '$lib/utils/host';
	import type { User } from 'shared/prisma/generated/prisma-client-js';
	type LoadI = LoadInput<Record<string, string>, Record<string, string>, { user?: Omit<User, 'password'> }>;
	
	export const load: Load<LoadI> = async ({ fetch, session }) => {
		const response = await fetch(`${host}/user/${session.user?.id}`);
		
		if (response.ok) {
			return {
				props: {
					user: await response.json()
				}
			};
		}
		
		return {
			error: JSON.stringify(await response.json())
		};
	};

</script>

<script lang="ts">
	import { session } from '$app/stores';
	import AccountBio from '$lib/dashboard/settings/AccountBio.svelte';
	import SettingNav from '$lib/dashboard/settings/SettingNav.svelte';
	import { setContext } from 'svelte';
	
	export let user: User;
	
	setContext('user', user);
	
	const options: { [key: string]: string } = {
		profile: '/dashboard/settings',
		notifications: '/dashboard/settings/notifications',
		security: '/dashboard/settings/security'
	};
</script>

<div class="container">
	<AccountBio
		src={user?.avatar}
		name="{$session.user?.first_name} {$session.user?.last_name}"
		lastVisit="5 hours"
		joined="1 year"
	/>

	<!-- <ProfilePopup /> -->

	<SettingNav {options} />

	<slot />
</div>
