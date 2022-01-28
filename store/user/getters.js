export default {
  user: (state) => state.user,
  first_name: (state) => state.user.first_name,
  last_name: (state) => state.user.last_name,
  username: (state) => state.user.username,
  avatar: (state) => state.avatar,
  message: (state) => state.message,
  error: (state) => state.error,
  loading: (state) => state.loading,
}
