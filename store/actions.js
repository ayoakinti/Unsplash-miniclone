import api from '@/api'

export default {
  async getPhotos ({ commit }, params) {
    const res = await api.get('/search/photos', {
      params
    })
    console.log(res.data, 'photos')
    commit('SET_PHOTOS', res.data)
  }
}
