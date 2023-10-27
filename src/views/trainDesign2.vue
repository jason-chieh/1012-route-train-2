<script >
export default {
    data(){
        return{
            arr:[1,2,3,4,5,6,7,8,9]
        }
    }
}

</script>

<template>
<div class="first"></div>

<div class="second"></div>

<div class="third">

    <div class="left"></div>

    <div class="right">
        <div class="text">
            <h1>title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, aperiamsdasds sdsdsa sdas.</p>
        </div>

        <div class="ninearea">
            <div class="box" v-for="item in arr">
                <div class="color"></div>
                <h3>product name</h3>
            </div>
        </div>
    </div>
</div>
<div class="four"></div>
</template>

<style lang="scss" scoped>
.first{
    width: 100vw;
    height: 30vh;
    background-color: aqua;
}
.second{
    width: 100vw;
    height: 70vh;
    background-color:aquamarine;
}
.third{
    width: 100vw;
    height: 250vh;
    display: flex;
    .left{
        width: 25vw;
        height: 230vh;
        margin: 10vh 0;
        background-color: aqua;
    }
    .right{
        width: 55vw;
        height: 210vh;
        padding: 20vh 10vw;
        .text{
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-bottom: 50px;
            h1{
                margin: 0;
            }
            p{
                margin: 0;
                padding: 0 5vw;
            }
        }
        .ninearea{
            width: 100%;
            flex-wrap: wrap;
            display: flex;
            justify-content: space-between;
            .box{
                .color{
                    width: 250px;
                    height: 250px;
                    background-color: aqua;
                }
            }
        }
    }
}
.four{
    width: 100vw;
    height: 30vh;
    background-color: aqua;
}
</style>