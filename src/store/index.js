import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    me: {}
  },
  mutations: {
    updateMe(state, me) {
      state.me = me;
    },
    updateMeAttr(state, option) {
      state.me.photoURL = option.photoURL;
    }
  },
  getters: {
    getMe: state => {
      return state.me;
    }
  }
});

export default store;
