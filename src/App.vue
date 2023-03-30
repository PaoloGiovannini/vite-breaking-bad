<script>
  import axios from 'axios';
  import{ store } from './store.js';
  import MyHeader from './components/MyHeader.vue';
  import MySearch from './components/MySearch.vue';
  import CardList from './components/CardList.vue';
  import Loading from './components/Loading.vue';
  export default{
    components:{
      MyHeader,
      MySearch,
      CardList,
      Loading
      
    },
    data(){
      return{
        store
      }
    },
    methods: {
      GetArchetype(){
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
        .then(response => {
          this.store.archetypeCard = response.data;
          this.store.loading = false;
        });
      },
      getCards() {
        let url = ''
        if(store.search.length > 0){
          url += `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${store.search}`
        }
        axios.get(url)
        .then(response => {
          this.store.cardsList = response.data.data;
          
        });
      }
    },
    created() {
      this.getCards();
      this.GetArchetype();
    }
  }
</script>

<template>
  <MyHeader/>
  <main>
    <MySearch @doChange="getCards"/>
    <CardList/>
  </main>
  <Loading/>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
