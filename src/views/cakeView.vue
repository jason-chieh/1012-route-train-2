<script >
export default {
    data(){
        return{
            onsalePhotoArr:["../../photo/2.png","../../photo/3.png","../../photo/4.png"],
            newsPhotoArr:["../../photo/5.png","../../photo/6.png","../../photo/7.png"]
        }
    }
}

</script>

<template>
    <div class="header page111">
        <div class="block"></div>
        <div class="photo1"></div>
    </div>
    <div class="content page111">
        <div class="contentText">
            <h1>title</h1>
                <p>Lorem ipsum dolor, sit amet consectetur r, sir, sit amet consectetr, sit amet consectetr, sit amet consectetr, sit amet consectett amet consectetr, sit ameet consectetur r, sir, sit amet consectetr, sit amet consectetr, sit amet consectetr, sit amet consectett amet consectetr, sit ameet consectetur r, sir, sit amet consectetr, sit amet consectetr, sit amet consectetr, sit amet consectett amet consectetr, sit ameet consectetur r, sir, sit amet consectetr, sit amet consectetr, sit amet consectetr, sit amet consectett amet consectetr, sit amet consectetr, sit amet consectetr, sit amet consectetadipisicing elit. Cumque eius a suscipit ex explicabo illo vel est facilis magni cum.</p>
        </div>
        <img src="../../photo/1.png" alt="">
    </div>
    <div class="onsale page111">
        <h1>ON SALE</h1>
        <div class="threeBlock">
            <div class="photo3">
                <button type="button">item</button>
            </div>
            <div class="photo4">
                <button type="button">item</button>
            </div>
            <div class="photo5">
                <button type="button">item</button>
            </div>
        </div>
        <hr />
    </div>
    <div class="news page111">
        <h1>NEWS</h1>
        <div class="bootstrapArea">

            <div class="card" style="width: 20rem;" v-for="item in newsPhotoArr">
                <img :src="item" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                
            </div>

        </div>
        <button type="button">more</button>
    </div>

    <div class="content2 page111">
        <img src="../../photo/8.png" alt="">
        <div class="c2Text">
            <h1>title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consectetur obcaecati ipsa vel provident quibusdam minus dolore ducimus corrupti accusamus!</p>
        </div>
    </div>


    <div class="footer">
        <h3>2023 cpoyright @tag you are great</h3>
    </div>

</template>

<style lang="scss" scoped>
.page111
{
    margin: 5% 5%;
}
.header
{   
    display: flex;
    justify-content: space-between;
    align-items: center;

    .block{
        width: 150px;
        height: 150px;
        background-color: pink;
    }
    .photo1{
        width: 80px;
        height: 80px;
        background-image: url(../../photo/Group\ 10.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

}
.content{
    display: flex;
    .contentText{
        width: 50%;
        padding: 5% 5%;
        h1{
            margin-left: 50px;
        }
    }
    img{
        width: 50%;
    }
}
.onsale{
    h1{
        text-align: center;
    }
    .threeBlock{
    width: 100%;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
        .photo3{
            width: 30%;
            height: 65vh;
            background-image: url(../../photo/3.png);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: relative;

            button{
                border: 0;
                width: 150px;
                font-size: 16pt;
                background-color: pink;
                position: absolute;
                bottom: 5%;
                left: 30%;
                color: white;
            }
        }
        .photo4{
            width: 30%;
            height: 65vh;
            background-image: url(../../photo/4.png);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: relative;

            button{
                border: 0;
                width: 150px;
                font-size: 18pt;
                background-color: pink;
                position: absolute;
                bottom: 5%;
                left: 30%;
                color: white;
            }
        }
        .photo5{
            width: 30%;
            height: 65vh;
            background-image: url(../../photo/5.png);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: relative;

            button{
                border: 0;
                width: 150px;
                font-size: 16pt;
                background-color: pink;
                position: absolute;
                bottom: 5%;
                left: 30%;
                color: white;
            }
        }
    }
}

.news{
    text-align: center;
    .bootstrapArea{
        display: flex;
        justify-content: space-between;
        margin-top: 70px;
        margin-bottom: 70px;

    }
    button{
        color: white;
        background-color: pink;
        width: 150px;
        font-size: 16pt;
        border: 0;
    }
}

.content2{
    display: flex;
    justify-content: space-between;
    margin-top: 20vh;
    margin-bottom: 20vh;
    position: relative;

    &:after{
    content: "";
    position: absolute;
    width: 650px;
    height: 650px;
    background-color: pink;
    bottom:-15%;
    left: -6%;
    z-index: -1;
}
    img{ 
        width: 60%;
    }
    .c2Text{
        padding: 5% 5%;
        width: 30%;
        background-color: pink;
    }
}

.footer{
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: pink;
}


</style>
