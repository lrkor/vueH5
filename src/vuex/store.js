import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
  peopleList:[],
  tree: [],
  patrolTitle:'标题'
};

const mutations={
  assignment(state,data){
    state.tree = data;
  },

  add(state,data){
    state.peopleList.push(data);
  },
  remove(state,data){
    let peopleList = state.peopleList;
    let tree = state.tree;
    peopleList.forEach((value,index)=>{
      if(value.id == data.id){
          peopleList.splice(index,1);
      }
    });
    if(data.click){
      recursiveTree(tree,data.id);
    }
  },
};

//递归树
function recursiveTree(data,id) {
  data.forEach((value,index)=>{
    if(value.peopleList){
      let peopleList = value.peopleList;
      peopleList.forEach((value,index)=>{
        if(value.id == id){
          value.checked = false
        }
      })
    }else {
      recursiveTree(value.list,id);
    }
  });
}


export default new Vuex.Store({
  state,
  mutations
})
