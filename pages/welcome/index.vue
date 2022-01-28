
<template>
	<div class="md:px-32 px-2 md:py-20 py-4">
		<div class="w-1/2 mx-auto">
			<h1 class="text-5xl mb-5 text-neutral-content">Hello 👋</h1>
			<p class="text-xl">Let's complete your profile before continuing..</p>
			<div class="profile-pic flex flex-col">
				<div v-if="!isEmpty(user) && user.avatar_url" class="avatar">
					<div class="rounded-full w-24 h-24 mr-10">
						<img :src="user.avatar_url" />
					</div>
				</div>
				<div v-else class="avatar">
					<div class="rounded-full w-24 h-24 mr-10"></div>
				</div>
			</div>
			<div class="flex flex-col w-full">
				<FormulateForm
					v-slot="{ isValid }"
					class="w-full text-neutral-focus"
					@submit="updateProfile()"
				>
					<div class="flex flex-col">
						<FormulateInput
							v-model="avatar"
							type="image"
							name="headshot"
							label="Select an image to upload"
							help="Select a png, jpg or gif to upload."
							validation="mime:image/jpeg,image/png,image/gif"
							input-class="input input-bordered border-dashed p-2 mb-5"
							help-class="text-sm text-neutral-content"
							upload-behavior="delayed"
						/>
						<button
							v-show="avatar"
							class="btn btn-secondary ml-2"
							@click="uploadAvatar"
						>
							Upload photo
						</button>
					</div>
					<div class="divider"></div>

					<div class="my-2">
						<FormulateInput
							v-model="userInfo.username"
							name="Username"
							type="text"
							label="Username"
							label-class="text-neutral-content"
							validation="required|min:3"
							input-class="input input-bordered"
							error-class="text-red-500 text-xs mb-1"
						/>
					</div>

					<div class="flex name mt-5">
						<FormulateInput
							v-model="userInfo.first_name"
							name="First Name"
							type="text"
							label="First Name"
							label-class="text-neutral-content"
							validation="required|min:3"
							input-class="input input-bordered"
							error-class="text-red-500 text-xs mb-1"
						/>
						<FormulateInput
							v-model="userInfo.last_name"
							name="Last Name"
							type="text"
							label="Last Name"
							label-class="text-neutral-content ml-5"
							validation="required|min:3"
							input-class="input  input-bordered ml-5"
							error-class="text-red-500 text-xs mb-1"
						/>
					</div>

					<div class="divider"></div>

					<FormulateInput
						type="submit"
						:label="isLoading ? 'Updating profile..' : 'Update'"
						:disabled="!isValid || isLoading"
						input-class="btn btn-block btn-secondary mt-5"
					/>
				</FormulateForm>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			userInfo: {
				first_name: '',
				last_name: '',
				bio: '',
				complete_address: '',
				username: '',
				resume_url: '',
				work_experience: '',
				skills: '',
				avatar_url: '',
			},
			avatar: '',
			loading: false,
			hasProfile: false,
		}
	},

	computed: {
		avatarUrl() {
			return this.avatar_url
		},
		user() {
			return this.$store.state.user.user
		},
		isLoading() {
			return this.$store.state.user.isLoading
		},
	},

	mounted() {
		this.userInfo = { ...this.user }
	},

	methods: {
		updateProfile() {
			this.$store.dispatch('user/updateUserProfile', {
				userInfo: this.userInfo,
			})
		},

		async uploadAvatar() {
			if (this.avatar) {
				const { data, error } = await this.$supabase.storage
					.from('profile')
					.upload(
						`public/${this.avatar.files[0].name}`,
						this.avatar.files[0].file
					)
				if (data) {
					const { publicURL } = this.$supabase.storage
						.from('avatars')
						.getPublicUrl(data.Key.substring(8))
					this.updateAvatar(publicURL)
					this.avatar = null
				} else {
					this.$toast.show(error.message)
					this.avatar = null
				}
			}
		},

		async updateAvatar(url) {
			await this.$supabase
				.from('profiles')
				.update([
					{
						avatar_url: url,
					},
				])
				.match({ id: this.$supabase.auth.user().id })
				.then(() => {
					this.$toast.show('Avatar updated')
				})
				.catch((err) => {
					this.$toast.show(err.message)
				})
		},

		isEmpty(obj) {
			for (const key in obj) {
				// eslint-disable-next-line no-prototype-builtins
				if (obj.hasOwnProperty(key)) return false
			}
			return true
		},
	},
}
</script>

<style scoped>
.formulate-file-add-input {
  @apply btn btn-primary btn-md;
}

.formulate-file-image-preview {
  width: 20% !important;
}
</style>
