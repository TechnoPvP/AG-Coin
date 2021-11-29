<script lang="ts">
	import PageHeader from '$lib/dashboard/PageHeader.svelte';
	import Button from '$lib/global/Button.svelte';
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
		<Button type="button">Change Password</Button>
	</div>
</form>

<div class="line" />

<div class="delete-acc">
	<h3>Delete Account</h3>
	<p>This will permentaly delete your account, and all alerts you have set.</p>
	<h4>This cannot be undone. Please consider this carefully.</h4>
	<Button type="button" color="red">Delete Account</Button>
</div>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
		gap: var(--pd-xl);
		max-width: 600px;
		h3 {
			margin-bottom: -20px;
		}
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
	.line {
		width: 100%;
		height: 1px;
		background-color: var(--tran-s1);
		margin: var(--pd-xl) 0;
	}
	.delete-acc {
		display: flex;
		flex-direction: column;
		gap: var(--pd-sm);
		h3 {
			color: var(--c-red);
		}
		p {
			color: var(--c-gray-s1);
		}
	}
</style>
