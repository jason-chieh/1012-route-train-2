<script >

export default{
    data(){
        return{

        }
    },
    components:{
    },
    inject:[
        "msg",
        "arr",
        "datamsg",
        "setupMsgPath"
    ]
}

</script>

<template>
    <div class="bg">
        <h1 style="color: red;">我是子層1的子層</h1>
        <p>{{msg}}</p>
        <p>{{arr}}</p>
        <!-- 透過一般provide的方式是不能響應式的 -->
        <p>透過一般provide的方式是不能響應式的:{{datamsg}}</p>
        <p>我是透過setup的:{{setupMsgPath}}</p>
    </div>
</template>

<style lang="scss" scoped>
.bg{
    width: 30vw;
    height: 40vh;
    border: 5px solid purple;
}
</style>
