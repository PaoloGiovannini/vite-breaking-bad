<script>
  import MyHeader from './components/MyHeader.vue';
  import MySearch from './components/MySearch.vue'
  export default{
    components:{
      MyHeader,
      MySearch
      
    }
  }
</script>

<template>
  <MyHeader/>
  <main>
    <MySearch/>
  </main>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
