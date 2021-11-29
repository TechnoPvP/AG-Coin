<script lang="ts">
	import PageHeader from '$lib/dashboard/PageHeader.svelte';
	import Input from '$lib/global/Input.svelte';

	interface Form {
		title: string;
		items: Array<Array<string> | Object | string>;
	}

	let f: Array<Form> = [
		{
			title: 'Personal',
			items: [['first_name', 'last_name'], { birthday: 'calendar' }]
		},
		{
			title: 'Contact',
			items: [{ email: 'email' }, { phone: 'phone' }]
		},
		{
			title: 'Password',
			items: [
				{
					current_password: {
						type: 'password',
						label: false
					}
				},
				{
					new_password: {
						type: 'password',
						label: false
					}
				}
			]
		}
	];

	function parse(val: string | Object) {
		const result = val instanceof Object ? Object.keys(val)[0].toString() : val;

		if (val instanceof Object && val[result] instanceof Object) {
			return {
				name: result.replace('_', ' '),
				type: val[result].type,
				label: val[result].label ?? null
			};
		}

		return result.replace('_', ' ');
	}
</script>

<PageHeader
	title="Profile"
	desc="Neither your full name, your birth date nor other contact details, will be visible for other users."
	breadcrumps={false}
	spaced
/>

<form>
	{#each f as group}
		<h1>{group.title}</h1>

		{#each group.items as item}
			{#if Array.isArray(item)}
				<div class="group">
					{#each item as input}
						<Input name="adam" label={parse(input)} placeholder={parse(input)} />
					{/each}
				</div>
			{:else}
				<Input
					name="adam"
					label={parse(item)?.label ?? parse(item)}
					placeholder={parse(item)?.name ?? parse(item)}
				/>
			{/if}
		{/each}
	{/each}
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.group {
		display: flex;
		gap: 1em;
	}
</style>
