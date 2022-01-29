import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'socially',
    paths: ['link.link', 'link.userLink', 'link.userLinks'],
  })(store)
}
