import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    adminMenus: [],
    user: {
      username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
    }
  },
  mutations: {
    initAdminMenu (state, menus) {
      state.adminMenus = menus
    },   
    login (state, user) {
      state.user = user
      user.password = "esoluoysuoiresuoyfi"
      // console.log(JSON.stringify(user));
      window.localStorage.setItem('user', JSON.stringify(user))
    },
    logout (state){
      state.user = []
      state.adminMenus = []
      window.localStorage.removeItem('user')
    }
  }
})
