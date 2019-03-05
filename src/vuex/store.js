import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


const state={
  peopleList:[],
};

const mutations={
  add(state,name){
    state.peopleList.push(name);
  },
  remove(state,name){
    let index = state.peopleList.indexOf(name);
    state.peopleList.splice(index,1);
  }
};


export default new Vuex.Store({
  state,
  mutations
})
