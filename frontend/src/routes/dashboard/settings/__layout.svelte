<script>
	import AccountBio from '$lib/dashboard/settings/AccountBio.svelte';
	import SettingNav from '$lib/dashboard/settings/SettingNav.svelte';

	const options = ['Profile', 'Notifications', 'Security', 'Data'];
</script>

<div class="container">
	<AccountBio
		src="/images/profile_adam.jpg"
		name="Adam Ghowiba"
		lastVisit="5 hours"
		joined="1 year"
	/>

	<SettingNav {options} />

	<slot />
</div>
