<template>
  <div>
    <h1>这是App组件</h1>
    <hr>
    <counter></counter>
    <hr>
    <amount></amount>
  </div>
</template>

<script>
import amount from './components/amount.vue';
import counter from './components/counter.vue';

export default {
  components : {
    amount : amount,
    counter : counter
  }
}
</script>

<style lang="less" scoped>

</style>
