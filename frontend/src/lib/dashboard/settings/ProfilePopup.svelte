<script lang="ts">
	import { session } from '$app/stores';

	import host from '$lib/utils/host';
import { valid } from 'joi';

	let fileFormElement: HTMLFormElement;
	let fileName;
	let fileWarning;

	const allowedImageTypes = ['image/png', 'image/jpeg', 'image/webp'];

	function handleFileChange(event: Event) {
		const target = event.target as HTMLFormElement;
		if (target.files.length < 1) return;

		const { name, size, type } = target.files[0] as File;
		fileWarning = null;

		/* Convert Bytes To KB */
		if (size / 1000 > 350) {
			fileWarning = 'File must be less than 16 MB';
			return;
		}

		if (!allowedImageTypes.includes(type)) {
			fileWarning = 'Only images are allowed to be used';
			return;
		}

		handleFileUpload(fileFormElement);
	}

	function handleFileUpload(target: HTMLFormElement) {
		if (target?.files?.length <= 0) return;

		const formData = new FormData(target);
		fetch(`${host}/user/avatar`, {
			method: 'POST',
			body: formData,
			credentials: 'include'
		})
			.then((response) => response.json())
			.then((result) => ($session.user.avatar = result.avatar))
			.catch((err) => console.log(err));
	}

	function deleteUserAvatar() {
		fetch(`${host}/user/avatar`, {
			method: 'POST',
			credentials: 'include'
		})
			.then((response) => response.json())
			.then((result) => ($session.user.avatar = result.avatar))
			.catch((err) => console.log(err));
	}
</script>

<form
	class="popup"
	on:submit|preventDefault
	on:change={handleFileChange}
	bind:this={fileFormElement}
>
	<div class="avatar">
		<h3>Change Profile Photo</h3>
		<label for="avatar">
			<img src={$session.user.avatar} alt="Profile" />
		</label>
		<span class:red={fileWarning} class:gray={fileName && !fileWarning}>
			{fileWarning ?? fileName ?? 'No file currently selected'}
		</span>
	</div>

	<div class="buttons">
		<button class="blue">
			Upload Photo
			<input type="file" name="avatar" id="avatar" accept="image/png, image/jpeg" />
		</button>
		<button class="red" on:click={deleteUserAvatar}>Remove Current Photo</button>
		<!-- <button class="red" on:click={submitFile}>Remove Current Photo</button> -->
		<button class="gray" type="button">Cancel</button>
	</div>
</form>

<style lang="scss">
	.popup {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		width: 300px;
		background-color: var(--c-black-s2);
		border-radius: var(--br-md);
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		z-index: 100;
	}
	.buttons {
		display: flex;
		flex-direction: column;

		#avatar {
			opacity: 0;
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			width: 100%;
			height: 100%;
		}

		button {
			position: relative;
			appearance: none;
			background-color: transparent;
			border: none;
			border-top: 1px solid var(--tran-s1);
			padding: 0.7em 0;
		}
	}
	.avatar {
		display: flex;
		padding: 1.5em;
		gap: 2em;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		img {
			width: 110px;
			height: 110px;
			border-radius: 50%;
		}
	}
	span {
		color: var(--c-gray-s3);
		font-weight: 300;
	}
	.blue {
		color: var(--c-blue);
	}
	.gray {
		color: var(--c-gray-s1);
	}
	.red {
		color: var(--c-red);
	}
</style>
