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
  setUserLink(state, link) {
    state.userLink = link
  },
  addLink(state, link) {
    state.links.push(link)
  },
  spliceLink(state, index) {
    state.userLinks.splice(index, 1)
  },
  setAllJobs(state, jobs) {
    state.allJobs = jobs
  },
  setLink(state, link) {
    state.link = link
  },
}
