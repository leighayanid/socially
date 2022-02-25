<template>
  <div>
    <lazy-base-nav :authenticated="authenticated" />
    <div>
      <Nuxt keep-alive class="bg-white" />
    </div>
    <lazy-footer />
  </div>
</template>

<script>
export default {
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
