import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
  peopleList:[],
  tree: [
    {
      id: 1,
      name: '分组1',
      list: [
        {
          id: '1',
          name: '子分组1',
          peopleList: [
            {
              id: 11111,
              name: '刘刘刘刘',
              checked: false,
            },
            {
              id: 33333,
              name: 'e',
              checked: false,
            },
            {
              id: 44444,
              name: 'w',
              checked: false,
            }
          ],
        }
      ],
    },
    {
      id: 2,
      name: '分组2',
      peopleList: [
        {
          id: '4',
          name: 'q',
          checked: false
        },
        {
          id: '5',
          name: 'w',
          checked: false
        },
        {
          id: '6',
          name: 'e',
          checked: false
        },
      ],
    },
    {
      id: 3,
      name: '分组3',
      peopleList: [
        {
          id: '7',
          name: '1',
          checked: false
        },
        {
          id: '8',
          name: '2',
          checked: false
        },
        {
          id: '9',
          name: '3',
          checked: false
        },
      ],
    }
  ],
};

const mutations={
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
