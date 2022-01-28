export default {
  async createNewLink({ commit }, { linkInfo }) {
    commit('setLoading', true)
    try {
      const { data, error } = await this.$supabase.from('links').insert([
        {
          user_id: this.$supabase.auth.user().id,
          ...linkInfo,
        },
      ])
      if (data) {
        commit('addLink', data)
        this.$toast.success('Link added..')
      } else {
        commit('setError', error)
      }
    } catch (error) {
      commit('setError', error.message)
      throw error
    } finally {
      commit('setLoading', false)
    }
  },

  async fetchUserLinks({ commit }, { username }) {
    commit('setLoading', true)
    try {
      const { data, error } = await this.$supabase
        .from('links')
        .select(`*, profiles!inner(username)`)
        .eq('profiles.username', username)
      if (data) {
        commit('setUserLinks', data)
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

  async fetchUserLinksById({ commit }, { id }) {
    commit('setLoading', true)
    try {
      const { data, error } = await this.$supabase
        .from('links')
        .select()
        .match({ user_id: id })
      if (data) {
        commit('setUserLinks', data)
      } else {
        commit('setError', error)
      }
    } catch (error) {
      commit('setError', error.message)
      throw error
    } finally {
      commit('setLoading', false)
    }
  },

  async fetchUserLink({ commit }, { linkId }) {
    commit('setLoading', true)
    try {
      const { data, error } = await this.$supabase
        .from('links')
        .select(`*, links!user_id(*)`)
        .match({
          id: linkId,
        })
        .single()
      if (data) {
        commit('setUserLink', data)
      } else {
        commit('setError', error)
      }
    } catch (error) {
      commit('setError', error.message)
      throw error
    } finally {
      commit('setLoading', false)
    }
  },

  async updateUserLink({ commit }, { linkInfo }) {
    commit('setLoading', true)
    try {
      const { data, error } = await this.$supabase.from('links').update([
        {
          id: linkInfo.id,
          ...linkInfo,
        },
      ])
      if (data) {
        this.$toast.success('Link updated successfully')
        commit('setLink', data)
      } else {
        commit('setError', error)
      }
    } catch (error) {
      commit('setError', error.message)
      throw error
    } finally {
      commit('setLoading', false)
    }
  },

  async deleteLink({ commit }, { id, index }) {
    commit('setLoading', true)
    try {
      const { data, error } = await this.$supabase
        .from('links')
        .delete()
        .match({
          id,
        })
      if (data) {
        this.$toast.success('Link deleted successfully')
        commit('spliceLink', index)
      } else {
        commit('setError', error)
      }
    } catch (error) {
      commit('setError', error.message)
      throw error
    } finally {
      commit('setLoading', false)
    }
  },
}
