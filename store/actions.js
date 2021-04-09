import api from '@/api'

export default {
  async getPhotos ({ commit }, params) {
    commit('CLEAR_PHOTOS')
    const res = await api.get('/search/photos', {
      params
    })
    commit('SET_PHOTOS', res.data)
  },
  toggleSearchProgressBar ({ commit }, params) {
    if (params.reset) {
      commit('RESET_SEARCH_BAR', 'reset')
    } else {
      commit('RESET_SEARCH_BAR')
    }
  }
}
