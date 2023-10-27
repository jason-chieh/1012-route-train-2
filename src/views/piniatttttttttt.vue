<script >
import {mapState,mapActions} from 'pinia'
import pintest from '../stores/pintest'

export default{
    data(){
        return{
        }
    },
    methods:{
    
    },
    computed:{
        ...mapState(pintest,['a']),
    },
    mounted(){
        this.date1 = new Date();
        this.date2 = this.date1.toISOString().split('T')[0];
        console.log(this.date2)
    }
}

</script>

<template>
    <h1>你好我是測試</h1>
    <h1>{{}}</h1>
    <button @click="aa" type="button">dd</button>
</template>

<style lang="scss" scoped>

</style>
