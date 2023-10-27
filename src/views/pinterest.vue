<script >
export default {
    data(){
        return{
            onsalePhotoArr:["../../photo/2.png","../../photo/3.png","../../photo/4.png","../../photo/2.png","../../photo/3.png","../../photo/4.png","../../photo/2.png","../../photo/3.png","../../photo/4.png"],
            riverPhotoArr:["../../river/2.png","../../river/3.png","../../river/4.png","../../river/2.png","../../river/3.png","../../river/4.png","../../river/2.png","../../river/3.png","../../river/4.png","../../river/4.png","../../river/4.png","../../river/4.png"],
            riverPhotoArr2:["../../river/4.png","../../river/3.png","../../river/2.png","../../river/4.png","../../river/3.png","../../river/2.png","../../river/4.png","../../river/3.png","../../river/2.png","../../river/4.png","../../river/3.png","../../river/2.png"],
            riverPhotoArr3:["../../river/3.png","../../river/2.png","../../river/4.png","../../river/3.png","../../river/2.png","../../river/4.png","../../river/3.png","../../river/2.png","../../river/4.png","../../river/3.png","../../river/2.png","../../river/4.png"]
        }
    }
}


</script>

<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<!-- 瀑布流可以用column count   可以分割欄位 -->
    
<div class="top">
    <img src="../../Pinterest-logo.png" alt="">
    <button type="button">首頁</button>
    <button type="button">建立</button>
    <input type="text" placeholder="搜尋">
    <button type="button">通知</button>
    <button type="button">訊息</button>
</div>
<div class="bot">
    <div class="river1 page">
        <div class="river1Photo" v-for="item in onsalePhotoArr">
            <img class="rrrr" :src="item" alt="">
        </div>
    </div>
    <div class="river2 page">
        <div class="river1Photo" v-for="item1 in riverPhotoArr">
            <img class="rrrr" :src="item1" alt="">
        </div>
    </div>
    <div class="river3 page">
        <div class="river1Photo" v-for="item2 in riverPhotoArr2">
            <img class="rrrr" :src="item2" alt="">
        </div>
    </div>
    <div class="river4 page">
        <div class="river1Photo" v-for="item3 in riverPhotoArr3">
            <img class="rrrr" :src="item3" alt="">
        </div>
    </div>

</div>
</template>

<style lang="scss" scoped>
.top{
    img{
        width: 6vw;
    }
    input{
        width: 60vw;
        height: 7vh;
        margin: 2% 2%;
        border-radius: 10px;
    }
    button{
        border: 0;
        margin: 0 1%; 
        border-radius: 10px;
        font-size: 25pt;
    }
}
.bot{
    margin: 2vh 2vw;
    display: flex;
    .rrrr{
        width: 22vw;
        margin: 2% 1vw;
    }
}
</style>
