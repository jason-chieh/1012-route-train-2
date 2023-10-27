<script >
export default {
    data(){
        return{
            arr:[1,2,3]
        }
    }
}
</script>

<template>
<div class="head"></div>
<div class="threebox">
    <div class="square" v-for="item in arr"></div>
</div>
<div class="content">
    <div class="left"></div>
    <div class="right">
        <h1>dsda</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsam repudiandae voluptates, sequi voluptas molestias fugiat est in, !</p>
    </div>
</div>
<div class="bottom"></div>
</template>

<style lang="scss" scoped>
.head{
    width: 100vw;
    height: 25vh;
    background-color: aqua;
}
.threebox{
    width: 90vw;
    height: 35vh;
    padding: 5vh 5vw;
    display: flex;
    justify-content: space-between;
    .square{
        width: 200px;
        height: 200px;
        background-color: aqua;
    }
}
.content{
    width: 100vw;
    height: 50vh;
    display: flex;
    .left{
        width: 40vw;
        height: 45vh;
        background-color: aqua;
    }
    .right{
        width: 40vw;
        height: 25vh;
        padding: 10vh 5vw;
    }
    
}
.bottom{
    width: 100vw;
    height: 10vh;
    background-color: aqua;
}
</style>
