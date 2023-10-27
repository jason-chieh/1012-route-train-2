<script >
import { Alert } from "bootstrap";
import train2 from "./1018train2.vue";
export default {
    data(){
        return{
            page:1,
            obj:{
                name:"",
                phone:"",
                email:"",
                radioText:""
            }
        }
    },
    methods:{
        addPlus(){
            if(this.obj.name=="" || this.obj.phone=="" || this.obj.email==""){
                alert("要填")
                console.log(this.obj.emradioTextail)
            }else{
                this.page=2;
            }

        },
        addmin(){
            this.page--
        }
    }, 
    components:{
        train2
    }
}


</script>

<template>
    <div v-if="page==1" class="page1">
        <div class="bg">
            <div class="Area">
                <div class="name page">
                    <label for="">姓名</label>
                    <input type="text" name="" id="" v-model="obj.name" >
                </div>
                <div class="phone page">
                    <label for="">電話</label>
                    <input type="number" name="" id="" v-model="obj.phone" >
                </div>
                <div class="email page">
                    <label for="">信箱</label>
                    <input type="email" name="" id="" v-model="obj.email" >
                </div>
                <div class="male" page>
                    <label for="">性別</label>
                    <input type="radio" v-model="obj.radioText"  value="男">
                    <label for="">男</label>
                    <input type="radio" v-model="obj.radioText"  value="女">
                    <label for="">女</label>
                </div>
                <button @click="addPlus" type="submit">送出並確認資料</button>
            </div>
        </div>
    </div>

    <div v-if="page==2" class="page2">
        <train2 :personalText="obj" :pageN="page"  />
        <button @click="addmin" type="button">back</button>
    </div>

    
</template>

<style lang="scss" scoped>
.bg{
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient( 90deg,rgb(129, 129, 213),gray);
    .Area{
        backdrop-filter: blur(20px);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        button{
            border: 0;
            background-color: whitesmoke;
        }
    }
    .page{
        margin: 5% 5%;
    }
}
</style>
