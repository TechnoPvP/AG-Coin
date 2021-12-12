<script lang="ts">
	import { session } from '$app/stores';
	import Loader from '$lib/dashboard/Loader.svelte';

	import PageHeader from '$lib/dashboard/PageHeader.svelte';
	import Button from '$lib/global/Button.svelte';
	import Input from '$lib/global/Input.svelte';
	import InputError from '$lib/global/InputError.svelte';
	import host from '$lib/utils/host';
	import type { User } from 'shared/user';
	import { getContext } from 'svelte';

	const user: User = getContext('user');

	let query, error, success;

	let first_name = user.first_name;
	let last_name = user.last_name;
	let email = user.email;
	let phone = user?.phone;

	function updateContactInformation() {
		error = undefined;
		success = undefined;

		query = fetch(`${host}/user/${$session.user?.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify({ first_name, last_name, email })
		})
			.then((res) => {
				if (!res.ok) return error = 'Updating information failed... Please try again. '
				
				return res.json();
			})
			.then(() => {
				if (!error) success = 'Updated information successful. ';
			})
	}
</script>

<PageHeader
	title="Profile"
	desc="Neither your full name, your birth date nor other contact details, will be visible for other users."
	breadcrumps={false}
	spaced
/>

<form>
	<InputError {error} {success} />
	<div class="form-group">
		<h3>Personal</h3>
		<div class="input-group">
			<Input name="first_name" label="first name" bind:value={first_name} />
			<Input name="last_name" label="last name" bind:value={last_name} />
		</div>
	</div>

	<div class="form-group">
		<h3>Contact</h3>
		<Input name="Email" label="Email" bind:value={email} />
		<Input name="Phone Number" label="Phone Number" bind:value={phone} />
		<Button type="button" on:click={updateContactInformation}>
			{#await query}
				<Loader />
			{:then _}
				Change Contact Information
			{/await}
		</Button>
	</div>

	<div class="form-group">
		<h3>Password</h3>
		<Input name="Email" placeholder="Current Password" />
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
