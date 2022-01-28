export default {
  async login({ commit }, { email, password }) {
    commit('setLoading', true)
    try {
      const { user, error } = await this.$supabase.auth.signIn({
        email,
        password,
      })
      if (user) {
        this.$toast.success('You are now logged in.')
        this.$router.push('/u/profile')
        commit('setUser', user)
        commit('setUserId', user.id)
      } else {
        commit('setError', error.message)
        commit('setLoading', false)
      }
    } catch (error) {
      commit('setError', error.message)
      throw error
    } finally {
      commit('setLoading', false)
    }
  },

  async signUp({ commit }, { email, password}) {
    commit('setLoading', true)
    try {
      const { user, error } = await this.$supabase.auth.signUp({
        email,
        password,
      })
      if (user) {
        this.$router.push('/welcome')
        this.$toast.success('You are now registered.')
        commit('setUser', user)
        commit('setUserId', user.id)
      } else {
        commit('setError', error.message)
      }
    } catch (error) {
      commit('setError', error.message)
      throw error
    } finally {
      commit('setLoading', false)
    }
  },

  async logout({ commit }) {
    commit('setLoading', true)
    try {
      await this.$supabase.auth.signOut()
    } catch (error) {
      commit('setError', error.message)
      throw error
    } finally {
      commit('setLoading', false)
      this.$router.go()
      localStorage.removeItem('vuex')
    }
  },

  async resetPassword({ commit }, { password }) {
    commit('setLoading', true)
    try {
      const { data, error } = await this.$supabase.auth.api.updateUser(
        this.$supabase.auth.session().access_token,
        {
          password,
        }
      )
      if (data) {
        this.$toast.show('Password updated')
      } else {
        commit('setError', error)
      }
    } finally {
      commit('setLoading', false)
    }
  },

  async updateEmail({ commit }, { email }) {
    commit('setLoading', true)
    try {
      const { user, error } = await this.$supabase.auth.update({
        email,
      })
      if (user) {
        this.$toast.show('Email updated')
      } else {
        commit('setError', error)
      }
    } finally {
      commit('setLoading', false)
    }
  },
}
