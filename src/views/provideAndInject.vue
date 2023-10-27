<script >
import provide1 from "./provide1.vue";

import {ref,provide} from "vue";
export default{
    data(){
        return{
            text:"我是主畫面的text",
            dataarr:["1","2","2","3"],
            datamsg:""
        }
    },
    components:{
        provide1
    },
    methods:{
        add(){
            this.dataarr.push("aaaa")
        }
    },
    provide(){
        return{
            msg:this.text,
            arr:this.dataarr,
            datamsg:this.datamsg
        }
    },
    setup(){
        let setupMsg = ref("我可以響應式")

        provide("setupMsgPath",setupMsg)

        return{
            setupMsg
        }
    }
}

</script>

<template>
    <div class="bg">
        <h1 style="color: red;">我是主畫面</h1>
        <!-- <h6>provid可以利用陣列做響應式</h6>
        <h6>也可以透過ref這個import做響應式 但是要透過setup這個方式</h6> -->
        <p>{{ this.text }}</p>
        <p>{{this.dataarr}}</p>
        <button @click="add" type="button">按我</button><br>
        
        <input type="text" name="" id="" v-model="this.datamsg">
        <p>我是透過一般provide的文字:{{this.datamsg}}</p>
            
        <input type="text" name="" id="" v-model="setupMsg">
        
        <provide1 />
    </div>
</template>

<style lang="scss" scoped>
.bg{
    width: 60vw;
    height: 100vh;

    border: 1px solid black;
}
</style>
