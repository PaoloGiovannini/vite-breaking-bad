<script>
export default{
    name: 'Card',
    props: {
        image: String,
        name: String,
        archetype: String
    }
}
</script>

<template>
    <div>
        <img :src="image" :alt="name">
        <div class="info">
            <h3>{{ name }}</h3>
            <span>{{ archetype }}</span>
        </div>
        
    </div>  
</template>

<style scoped lang="scss">
    img{
        width: 100%;
        display: block;
    }

    .info{
        background-color: #d48f38;
        height: 100px;
        padding: 15px 0px;
        text-align: center;
        & h3{
            color: white;
        }
    }
</style>
