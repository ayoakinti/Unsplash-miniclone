export default {
  CLEAR_PHOTOS (state) {
    state.photos = []
  },
  SET_PHOTOS (state, payload) {
    state.photos = payload.results
  },
  RESET_SEARCH_BAR (state, payload) {
    if (payload === 'reset') {
      state.resetSearchBar = true
    } else {
      state.resetSearchBar = false
    }
  }
}
