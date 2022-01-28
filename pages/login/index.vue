<template>
	<div>
		<div class="login-form">
			<div class="rounded bordered my-auto">
				<h1 class="text-3xl font-bold mb-2">Login</h1>
				<div class="form-group">
					<FormulateForm
						v-slot="{ isValid }"
						class="space-y-3"
						@submit="login()"
					>
						<FormulateInput
							v-model="email"
							name="email"
							type="text"
							label="Your email"
							label-class=""
							placeholder="Your email address here"
							validation="required|email"
							input-class="input input-primary input-bordered w-full"
							error-class="text-red-500 text-xs mb-1 mt-1"
						/>
						<div class="relative">
							<FormulateInput
								v-model="password"
								name="password"
								:type="!toggle ? 'password' : 'text'"
								label="Password"
								label-class=""
								input-class="relative input input-primary input-bordered w-full"
								error-class="text-red-500 text-xs mb-1 mt-1"
								placeholder="Password"
								validation="required"
								@submit.enter.prevent="login"
							>
							</FormulateInput>
							<div class="absolute inset-y-9 right-0 pr-3">
								<div class="flex items-center" @click="toggle = !toggle">
									<svg
										v-if="!toggle"
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6 mr-2"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
										/>
									</svg>
									<svg
										v-else
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6 mr-2"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
										/>
									</svg>
								</div>
							</div>
						</div>

						<FormulateInput
							type="submit"
							:label="isLoading ? 'Logging in' : 'Login'"
							:disabled="!isValid || isLoading"
							:input-class="
								isLoading
									? 'btn btn-block btn-secondary loading disabled'
									: 'btn btn-block btn-secondary'
							"
						/>
					</FormulateForm>
				</div>
				<div class="divider mt-10">Don't have an account yet?</div>
				<nuxt-link to="/register" class="btn btn-block btn-outline">
					Register</nuxt-link
				>
			</div>
		</div>
	</div>
</template>


<script>
export default {
	layout: 'auth',

	data() {
		return {
			email: '',
			password: '',
			toggle: false,
			value: 'password',
		}
	},

	computed: {
		isLoading() {
			return this.$store.state.auth.loading
		},
	},

	methods: {
		login() {
			this.$store.dispatch('auth/login', {
				email: this.email,
				password: this.password,
			})
		},
	},
}
</script>
