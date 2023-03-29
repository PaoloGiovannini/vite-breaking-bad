<script>
  import axios from 'axios';
  import{ store } from './store.js';
  import MyHeader from './components/MyHeader.vue';
  import MySearch from './components/MySearch.vue';
  import CardList from './components/CardList.vue'
  export default{
    components:{
      MyHeader,
      MySearch,
      CardList
      
    },
    data(){
      return{
        store
      }
    },
    methods: {
      getCards() {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes')
        .then(response => {
          this.store.cardsList = response.data.data;
        });
      }
    },
    created() {
      this.getCards();
    }
  }
</script>

<template>
  <MyHeader/>
  <main>
    <MySearch/>
    <CardList/>
  </main>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
