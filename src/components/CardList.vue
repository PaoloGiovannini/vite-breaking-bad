<script>
import { store } from '../store.js'
import Card from './Card.vue'
export default{
    name: 'CardList',
    data(){
        return{
            store
        }
    },
    components:{
        Card
    }
}
</script>

<template>
    <div class="container">
        <div class="container-s">
            <div class="result">Hai trovato ...</div>
            <div class="list d-flex">
                <div class="card"  v-for="(card, index) in store.cardsList" :key="index">
                    <Card  
                    :image="card.card_images[0].image_url"
                    :name="card.name"
                    :archetype="card.archetype"
                />                  
                </div>
            </div>
        </div>
        
    </div>
</template>

<style scoped lang="scss">
    .container{
        background-color: white;
        padding:  20px 0px;
        max-width: 1170px;
        margin: auto;
        .container-s{
            max-width: 1000px;
            margin: auto;
            .result{
                background-color: #212529;
                padding: 20px 0px;
                color: white;
            }
            .card{
                width: calc(100% / 5 - 10px);
                margin: 10px 5px;
                
            }
        }
    }
</style>
