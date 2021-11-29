<script lang="ts">
	import PageHeader from '$lib/dashboard/PageHeader.svelte';
	import Input from '$lib/global/Input.svelte';
</script>

<PageHeader
	title="Profile"
	desc="Neither your full name, your birth date nor other contact details, will be visible for other users."
	breadcrumps={false}
	spaced
/>

<form>
	<div class="form-group">
		<h3>Personal</h3>
		<div class="input-group">
			<Input name="first_name" label="first name" />
			<Input name="last_name" label="last name" />
		</div>
	</div>

	<div class="form-group">
		<h3>Contact</h3>
		<Input name="Email" label="Email" />
		<Input name="Phone Number" label="Phone Number" />
	</div>

	<div class="form-group">
        <h3>Contact</h3>
		<Input name="Email" placeholder="New Password" />
		<Input name="Phone Number" placeholder="New Password" />
	</div>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: var(--pd-xl);
        max-width: 600px;
	}
	.form-group {
		display: flex;
		flex-direction: column;
		gap: var(--pd-lg);
	}
	.input-group {
		display: flex;
		gap: var(--pd-lg);
	}
    h3 {
        margin-bottom: -20px;
    }
</style>
