<script >
export default {
    data(){
        return{
            text:"我是被傳遞的訊息",
            name:"",
            age:""
        }
    },
    methods:{
        emitgo(){
            this.$emit("apple",this.text)
        }
    },
    components:{
        
    }

}   


</script>

<template>
<div class="bg">
    <h1>我是子層</h1>
    <p>{{this.text}}</p>
    <button @click="emitgo" type="button">按我傳送到父層</button>
      <!--      也可以用這格方法@click="$emit("apple",this.text)"        -->


</div>

</template>

<style lang="scss" scoped>
.bg{
    width: 400px;
    height: 400px;
    border: 1px  solid black;
}
</style>
