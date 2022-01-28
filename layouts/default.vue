<template>
	<div>
		<BaseNav :authenticated="authenticated" />
		<div>
			<Nuxt class="bg-white" />
		</div>
		<Footer />
	</div>
</template>

<script>
import Footer from '@/components/base/Footer.vue'

export default {
	components: {
		Footer,
	},

	data() {
		return {
			authenticated: false,
			authListener: null,
		}
	},

	mounted() {
		const { authListener } = this.$supabase.auth.onAuthStateChange(() => {
			const user = this.$supabase.auth.user()
			if (user) {
				this.authenticated = true
			} else {
				this.authenticated = false
			}
		})
		this.authListener = authListener
	},

	beforeUnMount() {
		this.authListener?.unsubscribe()
	},
}
</script>
