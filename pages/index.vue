<template>
  <div>
    <BaseHeroUser v-if="$supabase.auth.session()" :user="user || []" />
    <BaseHero v-else />

    <div class="grid place-items-center">
      <img
        src="./../assets/images/1.png"
        alt=""
        class="mt-14 rounded-t-2xl shadow-2xl"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',

  data() {
    return {
      user: [],
    }
  },

  computed: {
    userInfo() {
      return this.$store.state.user.user
    },
  },

  watch: {
    userInfo(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.user = newVal
      }
    },
  },

  created() {
    if (this.$supabase.auth.session()) {
      return new Promise((resolve, reject) => {
        this.$store.dispatch('user/getUserProfileById', {
          id: this.$supabase.auth.user().id,
        })
      })
    } else {
      //
    }
  },

  mounted() {
    this.getUser()
  },

  methods: {
    getUser() {
      this.user = this.userInfo
    },
  },
}
</script>
