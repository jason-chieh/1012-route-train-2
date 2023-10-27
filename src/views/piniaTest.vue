<!-- 首頁 -->
<script>
import { mapState,mapActions } from 'pinia'
import surveyState from '../stores/surveyState'


export default{
        data(){
        return{
            currentDate11:new Date(),
            a:"",
        }
        }, 
        methods:{
        },
        mounted(){
        // =====================================================預設時間執行==========================================
       
        console.log(this.currentDate11)

        // this.a = oneday.getFullYear() 
        // this.b = (oneday.getMonth()+1)
        // this.c = oneday.getDate()
        const startDate = document.getElementById('startDate')//今天預設日期的dom
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
        // 轉換當地時間https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
        // Date.toLocaleString的參數(時區,條件)  條件用物件去區分/年/月/日/星期 用key值包成條件指定輸出 可以參考網址的可以參考網址的mmdn

        // const currentDate= new Date()//今天年月日
        // const day = { day: 'numeric' }//換算日期的條件
        // const year = { year: 'numeric' }//換算年的條件
        // const month = {month: 'long'} //換算月的條件
        // console.log(currentDate.toLocaleString(undefined, day)) //當天日期  XX日
        // console.log(currentDate.toLocaleString(undefined, weekday)) //星期幾  星期X
        // console.log(currentDate.toLocaleString(undefined, mounth)) //幾月  XX月
        // console.log(currentDate.toLocaleString(undefined, year)) //幾年 XXXX年
        // ????什麼魔術
        // 後面用slice去掉最後的日期單位(年月日)，長度不夠時自動補0
        // const today = currentDate.toLocaleString(undefined, day).slice(0,-1).padStart(2,"0") 
        // const tomonth = currentDate.toLocaleString(undefined, month).slice(0,-1).padStart(2,"0") 
        // const toyear = currentDate.toLocaleString(undefined, year).slice(0,-1).padStart(4,"0") 
        // console.log(today,tomounth,toyear) //確認過只剩日期的數字了
        // const defaultDate = [toyear,tomonth,today].join('-')
        // console.log(defaultDate)
        startDate.value = this.toDayDate
        // ↑預設日期

        //========================================= 七天後的日期 =================================================================
        const endDate = document.getElementById('endDate') //七天後日期的dom
        // var plusDate=new Date().getDate()//單取今天的日期(要給sevenDate+上去使用)
        // const sevenDate =new Date().setDate(plusDate+7)//今天日期+7天的數值 會自動換月換年近位
        // // https://dotblogs.com.tw/BerryNote/2016/10/29/101812 參考 setDate是今天的日期+上7天
        // const sevenDatetime=new Date(sevenDate)//七天後的日期 (時間格式)
        // 取得新的七天後日期後 那寫法就跟上面當天日期一樣了
        // const  finDay = sevenDatetime.toLocaleString(undefined,day).slice(0,-1).padStart(2,"0")
        // // https://blog.csdn.net/weixin_45048106/article/details/100059854  debug資料來源
        // // 最後面的padstart 是指定字串的長度，如果字串不夠就補後面的參數填充，要填入日期因為是2號前面沒補0所以填充失敗
        // // 用padstart強制限定日期長度要2位數，如果前面不夠就補個0在前面變成02，測試可行!!其他欄位也跟著補上了
        // const finMonth = sevenDatetime.toLocaleString(undefined, month).slice(0,-1).padStart(2,"0")
        // const finYear = sevenDatetime.toLocaleString(undefined, year).slice(0,-1).padStart(4,"0") //西元年所以至少要4位數
        // const defaultFinDate=[finYear,finMonth,finDay].join('-')
        endDate.value = this.endDayDate

        },
        computed:{
        ...mapState(surveyState,['toDayDate','endDayDate']),
        // getter跟state裡面的東西往這丟
        // 取出時間相關的值
        
        },
        methods:{
        // ...mapActions(surveyState,[])
        // 取出計算日期的方式
        }
    }
    </script>

    <template>
    {{ toDayDate }}
    {{ endDayDate }}
    <h1>
        問卷填選系統
    </h1>
    <div class="searchbox">
        <form action="">
        <label for="">問卷表單搜尋
            <input type="search">
        </label>
        <label for="">
            開始/結束
            <input type="date" name="" id="startDate"  >
            <input type="date" name="" id="endDate" >
            <input type="date" name="" id="Date" v-model="a" >
            <p>{{this.a}}</p>
            <button @click="add" type="button">00000</button>
        </label>
        </form>
    </div>


    </template>

    <style lang="scss" scoped>
    h1{
        margin-left: 50px;
    }
    </style>