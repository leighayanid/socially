
<template>
	<div class="md:px-32 px-2 md:py-20 py-4">
		<div class="w-1/2 mx-auto">
			<h1 class="text-2xl mb-5">Update Profile Photo</h1>
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

					<FormulateInput
						type="submit"
						:label="isLoading ? 'Updating profile..' : 'Update'"
						:disabled="!isValid || isLoading"
						input-class="btn btn-block btn-primary mt-5"
					/>
				</FormulateForm>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	middleware: 'isAuth',

	// asyncData({ store, $supabase }) {
	// 	return store.dispatch('user/getUserProfile', {
	// 		id: $supabase.auth.session().user.id,
	// 	})
	// },

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
				id: this.user.id,
				userInfo: this.userInfo,
			})
		},

		async uploadAvatar() {
			if (this.avatar) {
				const { data, error } = await this.$supabase.storage
					.from('avatars')
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
				.match({ id: this.$store.state.auth.userId })
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
</style>
