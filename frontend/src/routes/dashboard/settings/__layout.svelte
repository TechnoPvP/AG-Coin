<script lang="ts">
import { session } from '$app/stores';

	import AccountBio from '$lib/dashboard/settings/AccountBio.svelte';
	import SettingNav from '$lib/dashboard/settings/SettingNav.svelte';

	// const options = ['Profile', 'Notifications', 'Security'];
	const options: { [key: string]: string } = {
		profile: '/dashboard/settings',
		notifications: '/dashboard/settings/notifications',
		security: "/dashboard/settings/security"
	}
</script>

<div class="container">
	<AccountBio
		src="/images/profile_adam.jpg"
		name='{$session.user.first_name} {$session.user.last_name}'
		lastVisit="5 hours"
		joined="1 year"
	/>

	<SettingNav {options} />

	<slot />
</div>
