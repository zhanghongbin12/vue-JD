<template>
<div style="height:100%;" :class="{'opt': isTrue}">
    <div class="swiper-container1 swiper-container" id='menu'>
        <div class="swiper-wrapper menuBox">
            <div class="swiper-slide tab1 active" ><div>热门推荐</div></div> 
            <div class="swiper-slide tab1" ><div>手机数码</div></div>
            <div class="swiper-slide tab1" ><div>家用电器</div></div>
            <div class="swiper-slide tab1" ><div>电脑办公</div></div>
            <div class="swiper-slide tab1" ><div>美妆护肤</div></div>
            <div class="swiper-slide tab1" ><div>汽车用品</div></div>
            <div class="swiper-slide tab1" ><div>京东超市</div></div>
            <div class="swiper-slide tab1" ><div>男装</div></div>
            <div class="swiper-slide tab1" ><div>男鞋</div></div>
            <div class="swiper-slide tab1" ><div>女装</div></div>
            <div class="swiper-slide tab1" ><div> 女鞋</div></div>
            <div class="swiper-slide tab1"><div> 运动户外</div></div>
            <div class="swiper-slide tab1"><div> 食品生鲜</div></div>
            <div class="swiper-slide tab1"><div> 钟表珠宝</div></div>
            <div class="swiper-slide tab1"><div> 礼品鲜花</div></div>
            <div class="swiper-slide tab1"><div> 生活旅行</div></div>
            <div class="swiper-slide tab1"><div> 奢侈品</div></div>
            <div class="swiper-slide tab1"><div> 二手商品</div></div>
            <div class="swiper-slide tab1"><div> 特产馆</div></div>
            <div class="swiper-slide tab1"><div> 京东金融</div></div>
            <div class="swiper-slide tab1"><div> 拍卖</div></div>
            <div class="swiper-slide tab1"><div> 房产</div></div>
        </div>
    </div>
    <div class="tab">
        <div class="swiper-container2 swiper-container swiper-wrapper">
            <div class="swiper-wrapper" id="wrapper2">
                 <div class="tab_content swiper-slide" >
                    <div v-for="item in list">
                        <h3>{{item.title1}}</h3>
                        <div class="product_list">
                            <ul>
                                <li v-for="item2 in item.dataList">
                                    <img :src="item2.img">
                                    <p>{{item2.msg}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                 </div>
      

            </div>
         </div>   
    </div> 
</div>     
</template>

<script>
import Swiper from 'swiper';
export default {
     name: 'product',
     data () {
        return { 
            cont:0,
            isTrue:true,
            list:[{
                "title1":"热门分类",
                "dataList":[{"img":"https://img20.360buyimg.com/focus/jfs/t17962/238/2678578741/19614/71205ad3/5b056472N771896da.png","msg":"风扇"},{"img":"https://img11.360buyimg.com/focus/jfs/t21388/146/237407622/26923/221da1b3/5b054fedN2ba90518.jpg","msg":"手机"},{"img":"https://img30.360buyimg.com/focus/jfs/t22051/318/235303191/9297/c5ea2761/5b055000N410a7553.png","msg":"空调"},{"img":"https://img20.360buyimg.com/focus/jfs/t22300/73/231945461/4142/40db87e3/5b055011Nb89b2bda.png","msg":"充电宝"},{"img":"https://img30.360buyimg.com/focus/jfs/t19705/34/2693294559/3094/5f38bd0b/5b05507eN6a4152bc.jpg","msg":"蓝牙耳机"},{"img":"https://img20.360buyimg.com/focus/jfs/t17347/267/2693789922/24957/5e2ff705/5b056485N5ff83ec1.png","msg":"蚊帐"},{"img":"https://img30.360buyimg.com/focus/jfs/t20047/53/692421098/24627/f9785550/5b055644Nf0b93238.jpg","msg":"防晒"},{"img":"https://img11.360buyimg.com/focus/jfs/t19963/2/695987521/18365/702605d5/5b0552f2Nac9a0c92.png","msg":"空调扇"},{"img":"https://img10.360buyimg.com/focus/jfs/t21889/345/237339526/13219/a0f0704/5b055235Nf8fb2d6c.png","msg":"热水器"},{"img":"https://img13.360buyimg.com/focus/jfs/t18037/160/2694437684/22707/4ab8fe1a/5b0552eaNbc8f1bda.png","msg":"男鞋"},{"img":"https://img20.360buyimg.com/focus/jfs/t21715/149/246679831/16257/ddbf2036/5b0565a7N8dbc0017.png","msg":"路由器"},{"img":"https://img20.360buyimg.com/focus/jfs/t20128/208/216721929/9242/472993da/5b05522dNa2aae1bb.png","msg":"耳机"}]          
            },{
                "title1":"家电热搜",
                 "dataList":[{"img":"https://img20.360buyimg.com/focus/jfs/t21115/83/225125274/13856/5473fb3f/5b0567c1N59d53b27.png","msg":"电冰箱"},{"img":"https://img14.360buyimg.com/focus/jfs/t21664/15/237213959/24996/a3c6c7d6/5b0567c7N9cc1c355.png","msg":"洗衣机"},{"img":"https://img12.360buyimg.com/focus/jfs/t18106/218/2672347202/29951/3618e960/5b0567cdN275fbcdd.png","msg":"电视"}]
            },{
                "title1":"热卖手机",
                "dataList":[{"img":"https://img30.360buyimg.com/focus/jfs/t16333/58/1091559738/36108/3a56903e/5a4f4872Ndb69555f.png","msg":"华为手机"},{"img":"https://img20.360buyimg.com/focus/jfs/t16366/16/1307996090/39842/dbaa3c73/5a4f4867Ncb588473.png","msg":"小米手机"},{"img":"https://img30.360buyimg.com/focus/jfs/t14245/137/2069922478/30524/1e8fc597/5a69d582N25086304.png","msg":"苹果手机"}]
            }] 
            // list : [{
            //     "title1":"厨房小电",
            //     "dataList":[{"img":"https://img30.360buyimg.com/focus/jfs/t12559/262/969294499/3436/8c0ce9c9/5a17f1d2N8078d5e6.jpg","msg":"热水壶"},{"img":"https://img13.360buyimg.com/focus/jfs/t13069/193/944900508/2525/d7c9efc/5a17f21dN905aaf4c.jpg","msg":"电压力锅"},{"img":"https://img11.360buyimg.com/focus/jfs/t14185/134/950962305/3800/eb1bafb8/5a17f224Nea1d3f59.jpg","msg":"电饭煲"},{"img":"https://img13.360buyimg.com/focus/jfs/t11209/197/2422417970/2811/d167e855/5a17f1edN56abbe6e.jpg","msg":"电磁炉"},{"img":"https://img11.360buyimg.com/focus/jfs/t13267/86/981023661/1871/6fae5f11/5a17f203N50016f64.jpg","msg":"微波炉"},{"img":"https://img11.360buyimg.com/focus/jfs/t11503/25/2307123595/2987/a79ac767/5a17f1e3Nf7957b34.jpg","msg":"电饼挡"},{"img":"https://img11.360buyimg.com/focus/jfs/t14065/132/988058896/1688/99cd0a3d/5a17f229Nc4c681fb.jpg","msg":"豆浆机"},{"img":"https://img13.360buyimg.com/focus/jfs/t11284/298/2465125571/2619/ffe2cde5/5a17f237Nb9978251.jpg","msg":"料理机"},{"img":"https://img11.360buyimg.com/focus/jfs/t12094/76/967581282/2377/4611685d/5a17f1f1N9c125c81.jpg","msg":"电烤箱"},{"img":"https://img12.360buyimg.com/focus/jfs/t12367/112/996967887/2205/e8c82674/5a17f20aNde6af185.jpg","msg":"面包机"},{"img":"https://img11.360buyimg.com/focus/jfs/t11086/93/2414691741/2722/d9d248ff/5a17f1e3Nbb40dec0.jpg","msg":"煮蛋器"},{"img":"https://img12.360buyimg.com/focus/jfs/t14074/98/970407567/2153/72273815/5a17f208N6ea88eba.jpg","msg":"咖啡机"}]          
            // },{
            //     "title1":"个护健康",
            //     "dataList":[{"img":"https://img14.360buyimg.com/focus/jfs/t13981/225/965020395/7369/1740dbbb/5a17c20fN16e27ed9.png","msg":"电吹风"},{"img":"https://img14.360buyimg.com/focus/jfs/t11539/356/2296587411/5881/9d96908e/5a17c221Nf85c1934.jpg","msg":"剃须刀"},{"img":"https://img10.360buyimg.com/focus/jfs/t11209/303/2393582425/2406/d7c577aa/5a17c1eeNb9958e28.jpg","msg":"足浴盆"},{"img":"https://img30.360buyimg.com/focus/jfs/t13306/163/993416845/6361/f53b0e98/5a17c1f5Nb9390d12.jpg","msg":"按摩器"},{"img":"https://img13.360buyimg.com/focus/jfs/t13297/176/988569238/3559/8b7e1e75/5a17c1fcN516045fe.jpg","msg":"按摩椅"},{"img":"https://img11.360buyimg.com/focus/jfs/t13615/96/1004728348/4470/f3e62def/5a17c1e8Nbfc87330.jpg","msg":"电子称"},{"img":"https://img11.360buyimg.com/focus/jfs/t11065/145/2436762903/1153/41871627/5a17c209Nff3d08aa.jpg","msg":"美容仪"}]          
            // },{
            //     "title1":"冰箱",
            //     "dataList":[{"img":"https://img12.360buyimg.com/focus/jfs/t13153/44/964603695/1011/21d660d2/5a17f6aeN280056ea.jpg","msg":"双门冰箱"},{"img":"https://img20.360buyimg.com/focus/jfs/t13588/266/943842715/1088/c4ae40e4/5a17f6c5Ne56d7e26.jpg","msg":"对开门冰箱"},{"img":"https://img14.360buyimg.com/focus/jfs/t13711/311/977302673/2235/1a734ffc/5a17f6caNd7a7e0aa.jpg","msg":"十字对开门"},{"img":"https://img10.360buyimg.com/focus/jfs/t12247/42/992183546/1010/e5504689/5a17f6aeN47ef140c.jpg","msg":"三门冰箱"},{"img":"https://img12.360buyimg.com/focus/jfs/t13180/287/985506867/3709/3aab0a22/5a17f6aeN55f73ab4.jpg","msg":"单门冰箱"},{"img":"https://img11.360buyimg.com/focus/jfs/t14092/321/992718608/844/c060eb1/5a17f6c0N8cf0d399.jpg","msg":"多门冰箱"},{"img":"https://img12.360buyimg.com/focus/jfs/t12928/273/1007467483/3549/52dad666/5a17f69eN1d10e257.jpg","msg":"冷柜"},{"img":"https://img14.360buyimg.com/focus/jfs/t13582/240/1014399284/8132/4120a07e/5a17f69cNab452a46.jpg","msg":"红酒柜"}]          
            // }]
        }
     },
     watch:{
        cont (val,oldval) {
            if(val == document.querySelectorAll("img").length){
                this.isTrue = false;
            }
        }
     },
     mounted(){
        var ths = this;
        var img = document.querySelectorAll("img");
        for(var i=0;i<img.length;i++){
            var imgN = new Image();
            imgN.onload =function(){
                ths.cont++
            }
            imgN.src = img[i].getAttribute("src");
        }
       var mySwiper2;
       var mySwiper =  new Swiper ('.swiper-container1', {
            direction : 'vertical',
            freeMode : true,
            slideToClickedSlide: true,
            preventLinksPropagation : false,
            slidesPerView: 14,
            initialSlide: 0,
            on: {
                tap:function(){
                   var slide = document.getElementsByClassName("tab1");
                   var content = document.getElementsByClassName("tab_content");
                   content[0].style.cssText = "opacity:0";
                   
                   for(var i=0;i<slide.length;i++){
                         slide[i].classList.remove("active");
                   }

                    mySwiper.slides[mySwiper.clickedIndex].classList.add("active");
                    if(mySwiper.clickedIndex==1){
                        ths.list = [{
                            "title1":"手机通讯",
                            "dataList":[{"img":"https://img12.360buyimg.com/focus/jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg","msg":"老人机"},{"img":"https://img10.360buyimg.com/focus/jfs/t11503/241/2246064496/4783/cea2850e/5a169216N0701c7f1.jpg","msg":"手机"},{"img":"https://img30.360buyimg.com/focus/jfs/t18955/187/1309277884/11517/fe100782/5ac48d27N3f5bb821.jpg","msg":"全面屏手机"},{"img":"https://img11.360buyimg.com/focus/jfs/t11470/45/2362968077/2689/fb36d9a0/5a169238Nc8f0882b.jpg","msg":"游戏手机"},{"img":"https://img20.360buyimg.com/focus/jfs/t12022/66/917351804/2257/7ddc58e5/5a169232Ndf76f53c.jpg","msg":"拍照手机"}]          
                        },{
                            "title1":"运营商",
                            "dataList":[{"img":"https://img20.360buyimg.com/focus/jfs/t13309/121/902275259/3700/e9f22529/5a168e83Nb1a35aac.png","msg":"合约机"},{"img":"https://img10.360buyimg.com/focus/jfs/t11515/106/2342900928/7913/5a606e3f/5a168e7eNdd5d0121.png","msg":"选好卡"},{"img":"https://img20.360buyimg.com/focus/jfs/t14146/201/916948302/5272/8ae80f8e/5a168e78N78b24a8e.jpg","msg":"办套餐"}]
                        },{
                            "title1":"手机配件",
                            "dataList":[{"img":"https://img12.360buyimg.com/focus/jfs/t18055/312/1342501458/9462/4699ed8a/5ac48672N11cf61fe.jpg","msg":"数据线"},{"img":"https://img14.360buyimg.com/focus/jfs/t13657/281/912225045/5343/3109ae02/5a167b73Na69aae95.jpg","msg":"手机储存卡"},{"img":"https://img30.360buyimg.com/focus/jfs/t19537/23/1276961949/9676/f4b5be0d/5ac48791Nb224f939.jpg","msg":"手机充电宝"},{"img":"https://img11.360buyimg.com/focus/jfs/t17548/288/1331085893/6458/52545456/5ac486c6N0c8a93dc.jpg","msg":"手机贴膜"},{"img":"https://img10.360buyimg.com/focus/jfs/t18091/128/1346418266/3819/9dc8206c/5ac486d1Ncae5823b.jpg","msg":"蓝牙耳机"},{"img":"https://img11.360buyimg.com/focus/jfs/t19015/148/1326835130/7790/ddc201c3/5ac48776N9bf8b7c7.jpg","msg":"创意配件"},{"img":"https://img30.360buyimg.com/focus/jfs/t18502/160/1284774717/9251/feb8a496/5ac4878cN658cbb07.jpg","msg":"手机套"},{"img":"https://img30.360buyimg.com/focus/jfs/t16627/197/1308314139/2592/1e40bf4e/5ac487a4Nc21fb4d0.jpg","msg":"手机转接"}]
                        }];
                    }else if(mySwiper.clickedIndex==2){
                        ths.list = [{
                            "title1":"厨房小电",
                            "dataList":[{"img":"https://img30.360buyimg.com/focus/jfs/t12559/262/969294499/3436/8c0ce9c9/5a17f1d2N8078d5e6.jpg","msg":"热水壶"},{"img":"https://img13.360buyimg.com/focus/jfs/t13069/193/944900508/2525/d7c9efc/5a17f21dN905aaf4c.jpg","msg":"电压力锅"},{"img":"https://img11.360buyimg.com/focus/jfs/t14185/134/950962305/3800/eb1bafb8/5a17f224Nea1d3f59.jpg","msg":"电饭煲"},{"img":"https://img13.360buyimg.com/focus/jfs/t11209/197/2422417970/2811/d167e855/5a17f1edN56abbe6e.jpg","msg":"电磁炉"},{"img":"https://img11.360buyimg.com/focus/jfs/t13267/86/981023661/1871/6fae5f11/5a17f203N50016f64.jpg","msg":"微波炉"},{"img":"https://img11.360buyimg.com/focus/jfs/t11503/25/2307123595/2987/a79ac767/5a17f1e3Nf7957b34.jpg","msg":"电饼挡"},{"img":"https://img11.360buyimg.com/focus/jfs/t14065/132/988058896/1688/99cd0a3d/5a17f229Nc4c681fb.jpg","msg":"豆浆机"},{"img":"https://img13.360buyimg.com/focus/jfs/t11284/298/2465125571/2619/ffe2cde5/5a17f237Nb9978251.jpg","msg":"料理机"},{"img":"https://img11.360buyimg.com/focus/jfs/t12094/76/967581282/2377/4611685d/5a17f1f1N9c125c81.jpg","msg":"电烤箱"},{"img":"https://img12.360buyimg.com/focus/jfs/t12367/112/996967887/2205/e8c82674/5a17f20aNde6af185.jpg","msg":"面包机"},{"img":"https://img11.360buyimg.com/focus/jfs/t11086/93/2414691741/2722/d9d248ff/5a17f1e3Nbb40dec0.jpg","msg":"煮蛋器"},{"img":"https://img12.360buyimg.com/focus/jfs/t14074/98/970407567/2153/72273815/5a17f208N6ea88eba.jpg","msg":"咖啡机"}]          
                        },{
                            "title1":"个护健康",
                            "dataList":[{"img":"https://img14.360buyimg.com/focus/jfs/t13981/225/965020395/7369/1740dbbb/5a17c20fN16e27ed9.png","msg":"电吹风"},{"img":"https://img14.360buyimg.com/focus/jfs/t11539/356/2296587411/5881/9d96908e/5a17c221Nf85c1934.jpg","msg":"剃须刀"},{"img":"https://img10.360buyimg.com/focus/jfs/t11209/303/2393582425/2406/d7c577aa/5a17c1eeNb9958e28.jpg","msg":"足浴盆"},{"img":"https://img30.360buyimg.com/focus/jfs/t13306/163/993416845/6361/f53b0e98/5a17c1f5Nb9390d12.jpg","msg":"按摩器"},{"img":"https://img13.360buyimg.com/focus/jfs/t13297/176/988569238/3559/8b7e1e75/5a17c1fcN516045fe.jpg","msg":"按摩椅"},{"img":"https://img11.360buyimg.com/focus/jfs/t13615/96/1004728348/4470/f3e62def/5a17c1e8Nbfc87330.jpg","msg":"电子称"},{"img":"https://img11.360buyimg.com/focus/jfs/t11065/145/2436762903/1153/41871627/5a17c209Nff3d08aa.jpg","msg":"美容仪"}]          
                        },{
                            "title1":"冰箱",
                            "dataList":[{"img":"https://img12.360buyimg.com/focus/jfs/t13153/44/964603695/1011/21d660d2/5a17f6aeN280056ea.jpg","msg":"双门冰箱"},{"img":"https://img20.360buyimg.com/focus/jfs/t13588/266/943842715/1088/c4ae40e4/5a17f6c5Ne56d7e26.jpg","msg":"对开门冰箱"},{"img":"https://img14.360buyimg.com/focus/jfs/t13711/311/977302673/2235/1a734ffc/5a17f6caNd7a7e0aa.jpg","msg":"十字对开门"},{"img":"https://img10.360buyimg.com/focus/jfs/t12247/42/992183546/1010/e5504689/5a17f6aeN47ef140c.jpg","msg":"三门冰箱"},{"img":"https://img12.360buyimg.com/focus/jfs/t13180/287/985506867/3709/3aab0a22/5a17f6aeN55f73ab4.jpg","msg":"单门冰箱"},{"img":"https://img11.360buyimg.com/focus/jfs/t14092/321/992718608/844/c060eb1/5a17f6c0N8cf0d399.jpg","msg":"多门冰箱"},{"img":"https://img12.360buyimg.com/focus/jfs/t12928/273/1007467483/3549/52dad666/5a17f69eN1d10e257.jpg","msg":"冷柜"},{"img":"https://img14.360buyimg.com/focus/jfs/t13582/240/1014399284/8132/4120a07e/5a17f69cNab452a46.jpg","msg":"红酒柜"}]          
                        }];
                    }

                    
                    setTimeout(function(){
                        mySwiper2.update();
                        document.getElementById("wrapper2").style.cssText = "transform:translate3d(0px,0px,0px);";
                        content[0].style.opacity = "1";
                    },500);
                }
             }  
        })
         mySwiper2 = new Swiper ('.swiper-container2', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true
        })

     }

}

</script>
<style scoped>
   #menu{
     width: 1.8rem;
     height:calc(100% - 1rem);
     background-color:#f8f8f8;
     float: left;
     font-size: 0.24rem;
     border-right: 0.02rem solid #f3f3f3;
     box-sizing: border-box;
}
 .tab1 div{
     position: absolute;
     top: 0;
     left: 0;
     bottom: 0;
     right: 0;
     margin: auto;
     height: 0.32rem;
     line-height: 0.32rem;
}
 .active{
     background-color: #fff;
     color: red;
}
 .tab{
     position: absolute;
     width: calc(100% - 1.8rem);
     height: calc(100% - 1rem);
     right: 0rem;
     overflow: scroll;
}
 .tab_content{
     position: absolute;
     width: 100%;
     height: auto!important;
}
 .tab_content h3{
     text-align: left;
     font-size: 0.28rem;
     margin: 0.2rem;
}
 .tab_content h3 a{
     float: right;
     color: #909090;
     font-size: 0.24rem;
     text-decoration: none;
     padding-left: 0.3rem;
     font-weight: 400;
     background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFRJREFUSA1jYBjqgJEYD7y0tv2PTZ340cME9TNh00hNsVELCIbm0A8iFoJ+JEIBvmQ89INo6PsAHMn4IomIOMarZOgH0agP8EYwSHLoBxFBLw56BQDOMwwsaZRV+QAAAABJRU5ErkJggg==");
     background-repeat: no-repeat;
     background-size: 0.24rem;
     background-position: 0rem 0.06rem;
}
 .product_list ul{
     display: flex;
     flex-wrap: wrap;
     padding: 0.2rem 0.4rem;
}
 .product_list ul li {
     width: 33.33%;
     margin: 0.2rem 0rem;
}
 .product_list ul li img{
     width: 95%;
}
 .product_list ul li p{
     font-size: 0.24rem;
}
 

</style>
