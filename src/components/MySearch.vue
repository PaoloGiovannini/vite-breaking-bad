<script>
export default{
    name: 'MySearch'
}
</script>

<template>
    <div class="search">
        <select name="" id="">
            <option value="Alien">Alien</option>
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
