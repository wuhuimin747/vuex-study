import Vue from 'vue';
import App from './App.vue';

//导入vuex
import Vuex from 'vuex';
Vue.use(Vuex)


//创建一个vuex的数据仓储对象
var store = new Vuex.Store({
  state : {
    count : 0,  //可以想象成vue实例中的data， 从组件中访问store中的数据 this.$store.state.xxx
  },
  mutations : {  //可以想象成vue实例中的methods,就像一个仓库管理员
    increment(state){ //state是默认的第一个参数，指的是仓库数据state
      state.count ++ ;
    },
    minus(state , o){  //mutations里面的函数，参数列表最多穿两个参数，一个是state  , 另一个随意
      state.count -= (o.c + o.d) ;
    }
  },
  getters : {  //getters 只负责对外提供数据  ， 想修改数据请去找mutations
    //getters类似于过滤器filter的地方在于，读不改变元数据，知识对数据做最后一层包装
    //类似于computed的地方在于，都会监听
    currCount : function(state){
      return '当前数量是：' + state.count
    }
  }
})




//跟vm实例
var vm = new Vue({
  el : '#app',
  render : function(createTemplates){
    return createTemplates(App);
  },
  store : store //把store仓库挂载到vm实力上，就类似于挂载router对象一样
})