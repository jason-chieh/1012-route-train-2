<script >
export default {
    data(){
        return{
         
        }
    },
    props:[
        "personalText",
        "pageN"
    ],
    methods:{
        addPlus(){
            this.page=2;
        },
        addmin(){
            this.page--
        }
    }

}
</script>

<template>
 <div class="bg">
            <div class="Area">
                <div class="name page">
                    <label for="">姓名</label>
                    <p>{{personalText.name}}</p>
                </div>
                <div class="phone page">
                    <label for="">電話</label>
                    <p>{{personalText.phone}}</p>
                </div>
                <div class="email page">
                    <label for="">信箱</label>
                    <p>{{personalText.email}}</p>
                </div>
                <div class="male page" >
                    <label for="">性別</label>
                    <p>{{personalText.radioText}}</p>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>.bg{
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient( 90deg,rgb(129, 129, 213),gray);
    .Area{
        width: 40vw;
        height: 50vh;
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
