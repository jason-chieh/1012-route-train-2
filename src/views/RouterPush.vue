<script >
export default {
    data(){
        return{

        }
    },
    methods:{
        jump(){
            this.$router.push("/pinterest")
        }
    }
}

</script>

<template>
<button @click="jump" type="button">按我可以跳轉喔</button>
</template>

<style lang="scss" scoped>

</style>
