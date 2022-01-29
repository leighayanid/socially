<template>
	<div>
		<div class="login-form">
			<div class="bordered rounded-box">
				<h1 class="text-3xl font-bold mb-2">Sign up</h1>
				<p class="text-lg text-gray-900 mb-5">
					Create your account. It's free. Forever.
				</p>
				<div class="form-group">
					<FormulateForm
						v-slot="{ isValid }"
						class="space-y-2"
						@submit="register"
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
							error-class="text-red-500 text-xs mb-1"
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
						<div class="relative">
							<FormulateInput
								v-model="confirmPassword"
								name="password_confirm"
								:type="!toggle ? 'password' : 'text'"
								label="Confirm Password"
								label-class=""
								input-class="relative input input-primary input-bordered w-full"
								error-class="text-red-500 text-xs mb-1 mt-1"
								placeholder="Confirm password"
								validation="required|confirm"
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
							label="Sign Up"
							:input-class="
								isLoading
									? 'btn btn-block btn-secondary rounded-full loading'
									: 'btn btn-block btn-secondary rounded-full'
							"
							:disabled="!isValid || isLoading"
						/>
					</FormulateForm>
				</div>
				<div class="divider">or</div>
				<nuxt-link to="/login" class="btn btn-block btn-outline rounded-full"
					>Login</nuxt-link
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
			confirmPassword: '',
			toggle: false,
		}
	},

	computed: {
		isLoading() {
			return this.$store.state.auth.loading
		},
	},

	created() {
		if (this.$store.state.auth.user) {
			this.$router.push('/')
		}
	},

	methods: {
		register() {
			this.$store.dispatch('auth/signUp', {
				email: this.email,
				password: this.password,
			})
		},
	},
}
</script>
