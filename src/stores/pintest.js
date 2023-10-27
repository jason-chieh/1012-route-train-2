import {defineStore} from 'pinia';

export default defineStore("indexState",{
    state:()=>({
        day:new Date(),
        a:2
    }),
    getters:{

    },
    actions:{
    }
})