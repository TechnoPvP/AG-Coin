<script>
	import AccountBio from '$lib/dashboard/settings/AccountBio.svelte';
	import SettingNav from '$lib/dashboard/settings/SettingNav.svelte';
</script>

<div class="container">
	<AccountBio
		src="/images/profile_adam.jpg"
		name="Adam Ghowiba"
		lastVisit="5 hours"
		joined="1 year"
	/>

	<SettingNav />

	<slot />
</div>
