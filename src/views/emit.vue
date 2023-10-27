<script >
import emit2 from './emit2.vue';
export default {
    data(){
        return{
            text:"",
            
        }
    },
    methods:{
        emitobj(params){
            this.text = params
        }
    },
    components:{
        emit2
    }

}   


</script>

<template>

<div class="bg">
    <h1>我是父層</h1>
    <h1>{{this.text}}</h1>
    <div class="child">
        <emit2 @apple="emitobj" />
      
    </div>
</div>
</template>

<style lang="scss" scoped>

</style>
