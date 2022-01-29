<template>
	<div>
		<div class="navbar shadow-lg md:px-32 py-8 sticky top-0 z-50">
			<div class="flex-1 mx-2">
				<BaseLogo />
			</div>
			<div class="flex-none md:space-x-3 space-x-2">
				<template v-if="!$supabase.auth.user()">
					<div class="md:block">
						<nuxt-link
							to="/register"
							class="btn btn-outline btn-sm rounded-full"
							>Create a free account</nuxt-link
						>
					</div>

					<nuxt-link
						to="/login"
						class="btn btn-secondary btn-sm text-neutral-content rounded-full"
						>Login</nuxt-link
					>
				</template>
				<template v-if="$supabase.auth.user()">
					<div class="flex items-center">
						<nuxt-link
							to="/u/new"
							class="btn btn-secondary text-content btn-sm rounded-full mr-3"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 mr-2"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							New Content
						</nuxt-link>
						<nuxt-link
							to="/u/profile"
							class="btn btn-primary btn-sm rounded-full"
						>
							Profile
						</nuxt-link>
					</div>

					<button class="md:mr-10 btn btn-ghost" @click="signOut">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
							/>
						</svg>
					</button>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		authenticated: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		email() {
			return this.$supabase.auth.user().email
		},
		user() {
			if (this.$store.state.user.user) {
				return this.$store.state.user.user
			} else {
				return {}
			}
		},
		avatarUrl() {
			return this.$store.state.user.user.avatar_url
		},
	},

	methods: {
		signOut() {
			this.$store.dispatch('auth/logout')
			localStorage.clear()
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

