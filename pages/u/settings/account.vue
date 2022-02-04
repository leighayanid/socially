
<template>
	<div class="md:px-32 px-2 md:py-20 py-4">
		<div class="w-1/2 mx-auto">
			<h1 class="text-2xl mb-5">Hello, {{ user.first_name }} 👋</h1>
			<div class="profile-pic flex flex-col">
				<div v-if="!isEmpty(user) && user.avatar_url" class="avatar">
					<div class="rounded-full w-24 h-24 mr-10 mb-5">
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
					class="w-full"
					@submit="updateProfile()"
				>
					<div class="space-y-3">
						<FormulateInput
							v-model="userInfo.username"
							name="Username"
							type="text"
							label="Username"
							label-class=""
							validation="required|min:3"
							input-class="input input-bordered w-full"
							error-class="text-red-500 text-xs mb-1"
						/>

						<FormulateInput
							v-model="userInfo.first_name"
							name="First Name"
							type="text"
							label="First Name"
							label-class=""
							validation="required|min:3"
							input-class="input input-bordered w-full"
							error-class="text-red-500 text-xs mb-1"
						/>
						<FormulateInput
							v-model="userInfo.last_name"
							name="Last Name"
							type="text"
							label="Last Name"
							label-class=""
							validation="required|min:3"
							input-class="input input-bordered w-full"
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
	middleware: ['isAuth'],
	data() {
		return {
			userInfo: {
				first_name: '',
				last_name: '',
				username: '',
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
