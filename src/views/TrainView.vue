<script >
import blockArea from "./blockArea.vue"
import {mapState,mapActions} from 'pinia'
import indexState from '../stores/indexState'
export default {
    data(){
        return{
            // v-text!!!!
            title:"你好啊",
            address:"台北市",
            info:{
                name:"jason",
                age:18
            },

            // v-model!!!
            sametext:".....",
            number:20,
            selection:".....",
            lazyText:".....",
            modelNumber:"你好啊123",
            modeltrim:"    su3cl3     ",
            checkText:[],
            radioText:""
        }
    },
    methods:{
        ...mapActions(indexState,["getLocation","setLocation"])
    },
    components:{
        blockArea
    },
    mounted(){
        this.setLocation(2)
    }
}
</script>

<template>
    <!-- v-text 文字設定-->
<h1 style="color: red;">v-text</h1>
<p>{{this.title}}</p>
<p v-text="address"></p>
<p v-text="info"></p>
<blockArea v-text="address"/>

<br />
    <!-- v-model 同步綁定 -->
    <h1 style="color: red;">v-model</h1>

    <input type="text" v-model="sametext">
    <h1>{{sametext}}</h1>

    <input type="number" v-model="number">
    <h1>{{number}}</h1>

    <select name="" id="" v-model="selection">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
    <h1 v-text="selection"></h1>

    <!-- v-model  lazy、number、trim   延遲綁定 -->
    <h1 style="color: red;">v-model.lazy</h1>
    <input type="text" v-model.lazy="lazyText">
    <p>{{this.lazyText}}</p>
    <!-- v-model  number  改變資料型態字串轉數字 -->
    <h1 style="color: red;">v-model.number</h1>
    <input type="number" v-model.number="modelNumber">
    <p>{{this.modelNumber}}</p>
    <!-- v-model  trim   去掉頭尾空格 -->
    <h1 style="color: red;">v-model.trim</h1>
    <input type="text" v-model.trim="modeltrim">
    <p>{{this.modeltrim}}</p>

    <!-- v-model  checkbox   -->
    <h1 style="color: red;">checkbox</h1>
    <label for="">早餐</label>
    <input type="checkbox" v-model="checkText"  value="egg">
    <label for="">中餐</label>
    <input type="checkbox" v-model="checkText"  value="pork">
    <label for="">晚餐</label>
    <input type="checkbox" v-model="checkText"  value="chicken">
    <p>{{this.checkText}}</p>
    <!-- v-model  radio   -->
    
    <h1 style="color: red;">radio</h1>
    <label for="">早餐</label>
    <input type="radio" v-model="radioText"  value="egg">
    <label for="">中餐</label>
    <input type="radio" v-model="radioText"  value="pork">
    <label for="">晚餐</label>
    <input type="radio" v-model="radioText"  value="chicken">
    <p>{{this.radioText}}</p>


</template>

<style scoped>

</style>
