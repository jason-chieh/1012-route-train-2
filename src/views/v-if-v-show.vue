<script >
export default {
    data(){
        return{
            a:false,
            b:false,
            choose:0,
            page:1
        }
    },
    methods:{
        addPlus(){
            this.page=2;
        },
        addmin(){
            this.page--
        }
    }, 
    components:{

    }
}


</script>

<template>
    <div v-if="page==1" class="page1">
        <h1 style="color: red;">v-if & v-show</h1>
        <!-- v-if 是新增元素 -->
        <h2 style="color: red;">v-if</h2>
        <label for="">有吃晚餐嗎</label>
        <input type="checkbox" value="true" v-model="a" >
        <p v-if="a">有阿</p>

        <!-- v-show 是隱藏元素 -->
        <h2 style="color: red;">v-show</h2>
        <label for="">有吃晚餐嗎</label>
        <input type="checkbox" value="true" v-model="b" >
        <p v-if="b">有阿</p>
        
        <h2 style="color: red;">v-if & v-else-if & v-else</h2>
        <label for="">有吃晚餐嗎</label>    
        <select name="" id="" v-model="choose">
            <option value="0">咖哩飯</option>
            <option value="1">泡麵</option>
            <option value="2">牛肉湯</option>
        </select>
        <p v-if="choose==0">咖哩珍香</p>
        <p v-else-if="choose==1">便宜</p>
        <p v-else="choose==2">好喝</p>

        <button @click="addPlus" type="button">按我會跳轉第二個div區塊v-if</button>
    </div>

    <div v-if="page==2" class="page2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCiLH18TZaRUyp1ShI5xSdXWfwHSoYvItpHg&usqp=CAU" alt="">
        <button @click="addmin" type="button">跳轉第一個div區塊</button>
    </div>
</template>

<style lang="scss" scoped>

</style>
