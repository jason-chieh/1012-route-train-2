<script >
export default {
    props:[
        "person"
    ]
}   

</script>

<template>
    <div class="bg">
        <h1>這個方形區塊是子網頁喔</h1>
        <h1>我是props的資料{{this.person}}</h1>
    </div>
</template>

<style lang="scss" scoped>
h1{
    margin-top: 100px;
}

</style>