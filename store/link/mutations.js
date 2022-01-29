export default {
  setLoading(state, loading) {
    state.loading = loading
  },
  setError(state, error) {
    state.error = error
    this.$toast.error(error.message)
  },
  setUserLinks(state, links) {
    state.userLinks = links
  },
  setSearchUserLinks(state, links) {
    state.searchUserLinks = links
  },
  setUserLink(state, link) {
    state.userLink = link
  },
  clearUserLinks(state) {
    state.userLinks = []
  },
  addLink(state, link) {
    state.links.push(link)
  },
  spliceLink(state, index) {
    state.userLinks.splice(index, 1)
  },
  setLink(state, link) {
    state.link = link
  },
}
