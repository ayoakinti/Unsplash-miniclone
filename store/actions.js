import api from '@/api'

export default {
  async getMountains ({ commit }) {
    const res = await api.get('/photos')
    console.log(res.data, 'photos')
    commit('SET_MOUNTAINS', res.data)
  }
}
