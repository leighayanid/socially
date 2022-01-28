export default {
  setLoading(state, loading) {
    state.loading = loading
  },
  setError(state, error) {
    state.error = error
    this.$toast.error(error)
  },
  setUser(state, user) {
    state.user = user
  },
  setUserId(state, userId) {
    state.userId = userId
  },
}
