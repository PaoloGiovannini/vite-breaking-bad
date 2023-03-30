<script>
import { store } from '../store.js';
export default{
    name: 'MySearch',
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <div class="search">
        <select @change="$emit('doChange')" v-model="store.search">
            <option value="" disabled selected>Select your option</option>
            <option v-for="archetype in store.archetypeCard" :value = archetype.archetype_name>{{ archetype.archetype_name }}</option>
            
        </select>
    </div>
    
</template>

<style scoped lang="scss">
    .search{
        max-width: 1170px;
        margin: auto;
        margin-bottom: 25px;
        & select{
            margin-left: 15px;
            padding-right: 40px;
            border: 8px solid white;
            border-radius: 4px;
        }
    }
</style>
