<script>
import {RouterLink} from "vue-router"
import {mapState,mapActions} from 'pinia'
import indexState from '../stores/indexState'

export default {
        data(){
        return{
            getN:""
            }
        },
        methods:{
            
            get(){
                this.getN = JSON.parse(localStorage.getItem("num"))
            },
            change(){
                this.setLocation(2)
                this.getLocation
            },
            ...mapActions(indexState,["getLocation","setLocation"])
        }, 
        components:{
            RouterLink
        },
        computed:{
            ...mapState(indexState,["location","locationInfo"])
        }
}   
</script>

<template>
<div class="header">
    
    <RouterLink class="RouterLink" :class="{'cass':this.location==1}" to="/">home 回主畫面</RouterLink><br>
    <RouterLink class="RouterLink" :class="{'cass':this.location==2}"  to="/TrainView" >TrainView 訓練畫面</RouterLink><br>
    <RouterLink class="RouterLink" to="/vfor"  >vfor 遍歷資料</RouterLink><br>
    <RouterLink class="RouterLink" to="/von">von 按鈕觸發</RouterLink>
    <RouterLink class="RouterLink" to="/trainDesign">刻板設計</RouterLink><br>
    <RouterLink class="RouterLink" to="/trainDesign2">刻板設計2</RouterLink>
    <RouterLink class="RouterLink" to="/guessnumber">猜數字</RouterLink>
    <RouterLink class="RouterLink" to="/cakeView">蛋糕寶貝</RouterLink>
    <RouterLink class="RouterLink" to="/vbind">v-bind 綁定Class名稱</RouterLink>
    <RouterLink class="RouterLink" to="/pinterest">pinterest</RouterLink>
    <RouterLink class="RouterLink" to="/v-if-v-show">v-if-v-show 創建欄位跟隱藏</RouterLink>
    <RouterLink class="RouterLink" to="/RouterPush">RouterPush另外一個轉換網頁</RouterLink>
    <RouterLink class="RouterLink" to="/props">props父子層傳資料</RouterLink>
    <RouterLink class="RouterLink" to="/props2">props父層跟父層</RouterLink>
    <RouterLink class="RouterLink" to="/1018train">1018train</RouterLink>
    <RouterLink class="RouterLink" to="/emit">emit</RouterLink>
    <RouterLink class="RouterLink" to="/emit2">emit2</RouterLink>
    <RouterLink class="RouterLink" to="/provideAndInject">provideAndInject</RouterLink>
    <RouterLink class="RouterLink" to="/watchcompute">watchcompute</RouterLink>
    <RouterLink class="RouterLink" to="/piniaTest">piniaTest</RouterLink>
    <RouterLink class="RouterLink" to="/piniatttttttttt">piniatttttttttt</RouterLink>
    <p>{{this.getN}}</p>
    <button type="button" @click="get">按我</button>
    <p>{{this.locationInfo}}</p>
    <button @click="change" type="button"> 按我顯示業千</button>
</div>
</template>

<style lang="scss" scoped>
.header{
    width: 100%;
    background-color: gray;

    display: flex;
    flex-wrap: wrap;
    .RouterLink{
        text-decoration: none;
        background-color: rgb(144, 144, 244);
        border-radius: 20px;
        border: 2px solid black;
        font-size: 14pt;
        width: 230px;
        height: 60px;
        font-weight: bold;
        color: black;
        &:hover{
            background-color: rgb(126, 98, 47);
        }
    }
    .cass{
        background-color: rgb(126, 98, 47);
    }
}


</style>
