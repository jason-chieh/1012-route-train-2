<script >
import provide2 from "./provide2.vue";

export default{
    data(){
        return{

        }
    },
    components:{
        provide2,
    }
}
</script>

<template>
    <div class="bg">
        <h1 style="color: red;">我是子層1</h1>
        <provide2 />
    </div>
</template>

<style lang="scss" scoped>
.bg{
    width: 50vw;
    height: 70vh;
    // border: 5px solid blue;
}
</style>
