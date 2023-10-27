<script >
export default{
    data(){
        return{
            title:"cool",
            text:""
        }
    },
    methods:{
        print(){
            vontitle.innerText=this.title
        },
        printback(){
            vontitle.innerText="v-on"
        },
        btn(){
            vontitle.innerText=this.text
        }
    }
    
}

</script>

<template>
    <h1 id= "vontitle" style="color: red;">v-on</h1>
    <button type="button" v-on:click="print()">v-on</button>
    <button type="button" @click="printback()">back von-第二種簡寫</button>


    <input type="text" name="" id="" v-model="text">
    <button type="button" @click="btn()">輸入文字吧寶貝</button>
    
</template>

<style lang="scss" scoped>

</style>
