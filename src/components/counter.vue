<template>
  <div>
    <input type="button" value="减少" @click="remove">
    <input type="button" value="增加" @click="add">
    <br>
    <input type="text" v-model="$store.state.count" >
  </div>
</template>

<script>
export default {
  data() {
    return {
      // count: 0
    };
  },
  methods: {
    add() {
      //this.$store.state.count ++ ;   不要这样用，不符合vuex的设计理念，应该委托给仓库管理员，提交操作数据的请求，顺便记录下来是谁提出的操作
      this.$store.commit('increment'); //请求把公共数据count增加1
    },
    remove() {
      this.$store.commit('minus' , { c : 1 , d : 2});
    }
  },
  computed:{
    fullname: {
      get(){},
      set(){}
    }
  }
};
</script>

<style lang="less" scoped>

</style>
