import storage from '../../utils/storage'

const userStore = {
  namespaced: true,
  state: () => {
    return {
      username: 'haoren',
      age: 23
    }
  },
  mutations: {
    changeUserName: (state, params) => {
      storage.setItem('username', params)
      state.username = params
    }
  },
  getters: {
    birthday: (state) => {
      return new Date().getFullYear() - state.age
    }
  },
  actions: {

  }
}
export default userStore
