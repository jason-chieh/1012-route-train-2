<script >
export default{
    data(){
        return{
            min:1,
            max:100,
            correct:Math.floor(Math.random()*100)+1,
            guess:"",
        }
    },
    methods:{
        judge(){
            const enternumber = document.getElementById("enternumber");

            const show = document.getElementById("show");

            this.guess = enternumber.value;

            if(this.guess>this.correct && this.guess<=this.max){
                this.max=this.guess;
                show.innerText =this.min+"~"+this.max
                
            }else if(this.guess<this.correct && this.guess>=this.min){
                this.min=this.guess;
                show.innerText =this.min+"~"+this.max
            }else if(this.guess>this.max||this.guess<this.min){
                this.max =this.max;
                this.min =this.min;
                show.innerText ="請猜正確區間"+this.min+"~"+this.max 
            }
            else {
                show.innerText =this.guess+"猜對拉"
            }
            
        }
    }
}

</script>

<template>
<div class="bg">
    <div class="area">
        <h2>猜數字</h2>
        <p id="show">1~100</p>
        <input id = "enternumber" type="number"><br>
        <button  type="button" @click="judge()">請猜數字</button>
    </div>
</div>
</template>

<style lang="scss" scoped>
.bg{
    width: 100vw;
    height: 100vh;
    background-color: rgb(96, 92, 92);
    display: flex;
    justify-content: center;
    align-items: center;
    .area{
        width: 50vw;
        height: 50vh;
        background-color: white;
        border-radius: 20px;
        text-align: center;
        h2{
            margin: 20px 0;
        }
        span{
            margin: 20px 0;
        }
        input{
            margin: 20px 0;
        }
        button{
            margin: 20px 0;
        }
    }
}
</style>