<script >
import {mapState,mapActions} from 'pinia'
import indexState from '../stores/indexState'
export default {
    data(){
        return{
            point:0,
            ntd:0
        }
    },
    methods:{
        addpoint(){
            this.point+=1
            this.getLocation()
        },
        add(){
            let date = new Date();
            console.log(date.toISOString().split('T')[0]);          
        },
        ...mapActions(indexState,["getLocation","setLocation"])
    },
    watch:{
        point(){
            this.ntd =this.point*10;
        }
    },
    computed:{
        jyp(){
            return this.ntd*4.63
        },
        ...mapState(indexState,["location","locationInfo"])
    },
    beforeCreate(){
        console.log("我是beforeCreate 生成前"+this.point)
    },
    created(){
        console.log("我是Create 生成後"+this.point)
    },
    beforeMount(){
        console.log("我是beforeMount 載入前"+this.point)
    },
    mounted(){
        console.log("我是mounted 載入後"+this.point)
    },
    beforeUpdate(){
        console.log("我是beforeUpdate 更新前"+this.point)
    },
    updated(){
        console.log("我是updated 更新後"+this.point)
    },
    unmounted(){
        console.log("unmounted"+this.point)
    },
    beforeUnmount(){
        console.log("beforeUnmount"+this.point)
    }
}

</script>

<template>
    <p>point:{{this.point}}</p>
    <p>ntd:{{this.ntd}}</p>
    <p>{{jyp}}</p>
    <p>{{location}}</p>
    <p>{{locationInfo}}</p>
    <button @click="addpoint" type="button">按我觸發條件</button>
    <button @click="add" type="button">dd</button>

</template>

<style lang="scss" scoped>
button{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: pink;
    
}
</style>
