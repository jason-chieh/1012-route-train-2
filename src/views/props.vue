<script >
import propschild from "./propschild.vue";

export default {
    data(){
        return{
            Obj:{
                name:"jason",
                age:18,
                address:"taitwan tainan"
            }
        }
    },
    components:{
        propschild
    }
}   


</script>

<template>
    <div class="bg">
    <propschild class="propschild" :person ="Obj" />
    </div>
</template>

<style lang="scss" scoped>
.bg{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .propschild{
        display: block;
        width: 600px;
        height: 600px;
        border: 10px solid orangered;
    }

}

</style>
