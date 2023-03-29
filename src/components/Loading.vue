<template>
    <div class="loading" v-if="store.loading">
        <h1>Le carte si stanno generando</h1>
        <img src="../assets/iconmonstr-circle-5.svg" alt="caricamento">
    </div>
</template>

<script>
    import { store } from '../store.js';
    export default {
        name: 'Loading',
        data() {
            return {
                store
            }
        }
    }
</script>


<style lang="scss" scoped>
    .loading {
        background-color: white;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        & img{
            margin-left: 30px;
            width: 100px;
            animation: rotate 5s linear infinite;
        }
    }

    @keyframes rotate{
    from{ transform: rotate(-360deg); }
    to{ transform: rotate(360deg); }
}
</style>