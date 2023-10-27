<script >
export default {
    data(){
        return{
            arr:[1,2,3,4,5,6],            
            arr2:[
                {
                name:"jason",
                age:18,
                address:"tainan"
                },
                {
                name:"tom",
                age:128,
                address:"taipei"
                },
                {
                name:"cindy",
                age:25,
                address:"taichung"
                }
            ]
        }
    }
}

</script>

<template>
    <!-- arr -->
    <h1 style="color: red;">vfor arr</h1>
    <p v-for="item in arr">{{item}}</p>
    <!-- arr2 -->
    <h1 style="color: red;">vfor arr2</h1>
    <ol v-for="x in arr2">
        <ol>{{x.name}}</ol>
        <ol>{{x.address}}</ol>
        <ol>{{x.age}}</ol>
    </ol>


</template>

<style lang="scss" scoped>
</style>
