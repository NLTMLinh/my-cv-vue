import Vue from 'Vue'
import Vuex from 'vuex'
import moduleMenu from './modules/menu'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      menu: moduleMenu,
    },
  })
}
export default createStore
