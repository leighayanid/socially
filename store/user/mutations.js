export default {
  setUser(state, user) {
    state.user = user
  },
  setAvatar(state) {
    state.avatar = state.user.avatar_url
  },
  setMessage(state, message) {
    state.message = message
    this.$toast.show(message)
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  setError(state, error) {
    state.error = error
  },
  setUserId(state, userId) {
    state.user_id = userId
  },
}
