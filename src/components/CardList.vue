<script>
export default{
    name: 'CardList'
}
</script>

<template>
    <div class="container">
        <div class="container-s">
            <div class="result">Hai trovato ...</div>
            <div class="list d-flex">
                <div class="card"></div>
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
        }
    }
</style>
