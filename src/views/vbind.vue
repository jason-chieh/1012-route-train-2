<script >
export default {
    data(){
        return{
            title:"cool",
            isRed:false,
            isLarge:false,
            stylearr:[],
            imgText:"https://miro.medium.com/v2/resize:fit:630/1*MBb7iatu9etCcQQGxUXpbg.jpeg",
            cakeArr:["../../photo/4.png","../../photo/5.png","../../photo/6.png"],
            radio:"https://miro.medium.com/v2/resize:fit:630/1*MBb7iatu9etCcQQGxUXpbg.jpeg"
        }
    },
    methods:{
        createInput(){
            var inputElement = document.createElement("input");
            var labelElement = document.createElement("label");
            var here = document.getElementById("here");
            
            // 設定 input 的類型為 text
            inputElement.setAttribute("type", "checkbox");
            labelElement.innerText="我被創建了";
            
            // 如果找到了該 div 元素，將 input 元素加入其中
            document.body.appendChild(inputElement);
            document.body.appendChild(labelElement);
            here.appendChild(inputElement);
            here.appendChild(labelElement);
        }
    }
}

</script>

<template>
    <!-- v-bind用於綁class名稱 可以將class名稱綁你想要的class 上面要先有變數 -->
    <h1 style="color: red;">讓雙方的class綁定</h1>
    <h1 class="cool" id="cool">ccol1</h1>
    <h1 v-bind:class="title">cool2</h1>
    <!-- <h1 :class="title">cool2</h1> -->

    <!-- v-bind  賦予標籤多個class 名稱-->
    <h1 style="color: red;">綁定checkbox ture or false</h1>
    <label for="">isRed</label>
    <input type="checkbox" value="ture" v-model="isRed">
    <!-- 當checkbox被打勾的時候將value值給isLarge這個變數 -->
    <label for="">isLarge</label>
    <input type="checkbox" value="ture" v-model="isLarge">
    <!-- 未啟動時h2有一個under的class名稱 -->
    <h2 v-bind:class="{
        red:isRed,
        large:isLarge,
        under:true
    }">在這裡</h2>

    <!-- 陣列的表示方法 -->
    <h1 style="color: red;">綁定陣列stylearr</h1>
    <label for="">isRed</label>
    <input type="checkbox" value="red" v-model="stylearr">
    <label for="">isLarge</label>
    <input type="checkbox" value="large" v-model="stylearr">
    <label for="">變粗</label>
    <input type="checkbox" value="bold" v-model="stylearr">
    <h3 :class="stylearr">大家好</h3>

    <h1 style="color: red;">綁定圖片</h1>
    <img :src="imgText" alt="">

    <h1 style="color: red;">vfor跟v-bind應用</h1>

    <div class="card" style="width: 18rem;" v-for="item in cakeArr">
        <img :src="item" class="card-img-top" alt="">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>


<label for="">傑尼規</label>
<input type="radio" value="https://cdn.cybassets.com/s/files/8685/ckeditor/pictures/content_9aedc0c2-4d7b-4b50-9d83-96b246d6ab80.jpg"
v-model="radio">
<label for="">皮卡丘</label>
<input type="radio" value="https://miro.medium.com/v2/resize:fit:630/1*MBb7iatu9etCcQQGxUXpbg.jpeg" v-model="radio">
<label for="">噴火龍</label>
<input type="radio" value="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/0aa78a0061bda9d88cbb0bbf739cd9cc56522fe9.png" v-model="radio">
<img :src="radio" alt=""><br>


<button @click="createInput()" type="button">建立輸入欄位</button>
<div class="here1" id="here">
    <h1>建立標籤中</h1>
</div>




</template>

<style lang="scss" scoped>
.cool{
    color: pink;
}

.red{
    color: red;
}
.large{
    font-size: 40pt;
}
.under{
    text-decoration:line-through;
}
.bold{
font-weight: bold;
}
.here1{
    background-color: pink;
}
</style>