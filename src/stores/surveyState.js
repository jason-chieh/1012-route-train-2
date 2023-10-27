import { defineStore } from 'pinia'

export default defineStore('surveyState',{
    state:()=>{
        return{
            // 日期處理區---------------------------------
            currentDate:new Date(),//今天年月日
            // Date()必須要new創建實例才能用 切記!
            day:{ day: 'numeric' },//換算日期的條件
            month : {month: 'long'}, //換算月的條件
            year :{ year: 'numeric' },//換算年的條件
            // 日期處理區---------------------------------
        }
    },getters:{
        // 記得參數裡面打上state  裡面要用到什麼資料都掛個state.屬姓名  謝謝
        toDayDate:(state)=>{
            //換算成當地時間，第一個參數是時區，後面是轉換條件(undefined會帶入使用者預設)、條件已經包裝成物件了
            //然後減去最後一個字(日期單位)，padStart如果字串長度不夠指定長度會在前面補上0直到長度夠了為止  ex: 2 -> 02
            const today=state.currentDate.toLocaleString(undefined,state.day).slice(0,-1).padStart(2,"0")
            const tomonth=state.currentDate.toLocaleString(undefined,state.month).slice(0,-1).padStart(2,"0")
            const toyear=state.currentDate.toLocaleString(undefined,state.year).slice(0,-1).padStart(4,"0")
            const anwser= [toyear,tomonth,today].join('-')
            return  anwser
        },
        endDayDate:(state)=>{
            const plusDate = state.currentDate.getDate()//單取今天的日期(要給sevenDate+上去使用)
            const sevenDay = state.currentDate.setDate(plusDate+1)//加上七天的毫秒數值
            const sevenDate = new Date(sevenDay) //OK 轉數值了

            const finDay=sevenDate.toLocaleString(undefined,state.day).slice(0,-1).padStart(2,"0")
            const finMonth=sevenDate.toLocaleString(undefined,state.month).slice(0,-1).padStart(2,"0")
            const finYear=sevenDate.toLocaleString(undefined,state.year).slice(0,-1).padStart(4,"0")
            const finAnwser = [finYear,finMonth,finDay].join('-')
            return finAnwser
        }
    },actions:{
    }



})