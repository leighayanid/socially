export default {
  async updateUserProfile({ commit }, { userInfo }) {
    commit('setLoading', true)
    try {
      const { data, error } = await this.$supabase
        .from('profiles')
        .update([
          {
            ...userInfo,
          },
        ])
        .match({ id: this.$supabase.auth.user().id })
        .single()
      if (data) {
        commit('setMessage', 'Profile updated')
        commit('setUser', data)
      } else {
        commit('setError', error)
      }
    } catch (error) {
      commit('setError', error)
      commit('setLoading', false)
    }
  },

  async uploadAvatar({ commit }, avatar) {
    commit('setLoading', true)
    try {
      const { data, error } = await this.$supabase
        .from('avatars')
        .upload(`public/${avatar.name}`, avatar.file)
      if (data) {
        const { publicURL } = this.$supabase.storage
          .from('avatars')
          .getPublicUrl(data.Key.substring(8))
        this.updateAvatar(publicURL)
        commit('setAvatar', publicURL)
      } else {
        commit('setError', error)
        commit('setAvatar', null)
      }
    } catch (error) {
      commit('setError', error)
      commit('setLoading', false)
    }
  },

  async getUserProfileByUsername({ commit }, { username }) {
    commit('setLoading', true)
    try {
      const { data, error } = await this.$supabase
        .from('profiles')
        .select('id, username, avatar_url, first_name, last_name')
        .match({ username })
        .single()
      if (data) {
        commit('setUser', data)
      } else {
        commit('setError', error)
      }
    } catch (error) {
      commit('setError', error)
      commit('setLoading', false)
    }
  },

  async getUserProfileById({ commit }, { id }) {
    commit('setLoading', true)
    try {
      const { data, error } = await this.$supabase
        .from('profiles')
        .select('id, username, avatar_url, first_name, last_name')
        .match({ id })
        .single()
      if (data) {
        commit('setUser', data)
      } else {
        commit('setError', error)
      }
    } catch (error) {
      commit('setError', error)
      commit('setLoading', false)
    }
  },
}
