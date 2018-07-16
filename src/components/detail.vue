<template>
  <div class="bg" id="over">
      <div class="head"><a class="" @click="$router.back(-1)"></a>商品详情 </div>
       <div class="swiper-container detail">
            <div class="swiper-wrapper ">
                <div class="swiper-slide"><img :src="imgSrc[0]"></div>
                <div class="swiper-slide"><img :src="imgSrc[1]"></div>
                <div class="swiper-slide"><img :src="imgSrc[2]"></div>
                <div class="swiper-slide"><img :src="imgSrc[3]"></div>
                <div class="swiper-slide"><img :src="imgSrc[4]"></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="adv">
            <img src="https://img11.360buyimg.com/jdphoto/jfs/t21937/63/235611295/30701/316bc768/5b061bcdN629bec13.png.webp">
        </div>
        <div class="describe">
            <p>{{Msg}}</p>
            <div class="border"></div>
            <a>关注</a>
        </div>
        <div class="describe2">
           {{Tip}}
        </div>
        <div class="price">
            <b>{{price}}</b>
            <span>降价提醒</span>
        </div>
        <div class="address">
            <div>
                送至  &nbsp;&nbsp;&nbsp;<span>北京市海淀区四环到五环之间五棵松</span>
            </div>
            <div>
               运费 &nbsp;&nbsp;&nbsp;<span>免运费</span>
            </div>
            <div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUdwTOU5O+Q5POU5POQ4O+U4PN80P+M4O+Q4O+Q4POQ5POQ4OuQ4O+Q4O+I4PuQ5PJxkAycAAAAPdFJOUwAf+VSoeAvzws7ka7miLboUzckAAADJSURBVBjTY2BgYGCMWVR5VIABDBid/gPBFwjP/JOzQKKtfjGIzf3fEUSJ/N8AJO21Iao3fQbqqA+AcLi/CzCwfGGAAn8HBnlFMIttBoP4R4b4C2BOzk8G3q8M5w3AnPsLGZj/MKwHW8b6/QED4y8G/QQQx14ZSHwCcWYkMOtvAHOAyvqnPf8KcuMvkAGZP9eDjAQaEO/AwDb/D0gj0GiQpRnTQIYIfUR1DopDGexVIZygz8ieC4B6WyzRBOJtBkZ/pAABBZUWOKgAispF5e7ibycAAAAASUVORK5CYII=" style='width:10px;'/> 商家发货&售后 &nbsp;&nbsp;&nbsp;
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUdwTOU5O+Q5POU5POQ4O+U4PN80P+M4O+Q4O+Q4POQ5POQ4OuQ4O+Q4O+I4PuQ5PJxkAycAAAAPdFJOUwAf+VSoeAvzws7ka7miLboUzckAAADJSURBVBjTY2BgYGCMWVR5VIABDBid/gPBFwjP/JOzQKKtfjGIzf3fEUSJ/N8AJO21Iao3fQbqqA+AcLi/CzCwfGGAAn8HBnlFMIttBoP4R4b4C2BOzk8G3q8M5w3AnPsLGZj/MKwHW8b6/QED4y8G/QQQx14ZSHwCcWYkMOtvAHOAyvqnPf8KcuMvkAGZP9eDjAQaEO/AwDb/D0gj0GiQpRnTQIYIfUR1DopDGexVIZygz8ieC4B6WyzRBOJtBkZ/pAABBZUWOKgAispF5e7ibycAAAAASUVORK5CYII=" style="width:10px;"/> 支持7天无理由退货
            </div>
        </div>
        <div class="select">
            <div class="color">
                <div>颜色</div>  
                <div>
                    <span v-for="item in color">{{item}}</span>
                </div>
            </div>
            <div class="number">
                <div>数量</div>
                <div>
                  <span>- </span><input type="text" value="1"/> <span>+</span>
                </div>
            </div>
        </div>

        <div class="store">
              <div> <img :src="storeImg" /> 
                    <span>{{storeName}}</span></div>
              <div class="introduce">
                  <div>
                      <p>7869</p>
                      粉丝人数
                  </div>
                  <div>
                      <p>146</p>
                       全部商品
                  </div>
                  <div>
                      <p>9.53</p>
                      综合评分
                  </div>
              </div>
              <div class="follow">
                  <div><i></i> 关注店铺</div>
                  <div> <i></i> 进入店铺</div>
              </div>
        </div>
        <div class="detail_img">
            <img :src="detailImg[0]" />
            <img :src="detailImg[1]" />
            <img :src="detailImg[2]" />
            <img :src="detailImg[3]" />
            <img :src="detailImg[4]">
        </div>
        <div class="footer">
            <div class="contact">
                  <div>
                     卖家
                  </div>
                  <div>
                     购物车
                  </div>
            </div>
            <div class="shop">
                  加入购物车
            </div>
            <div class="buy">
                  立即购买
            </div>
        </div>
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
    name: 'detail',
    data () {
      return {
          imgSrc:[],
          Msg:"",
          Tip:"",
          price:"",
          detailImg:[],
          color:[],
          storeImg:"",
          storeName:""
       }
    },
    mounted(){

        setTimeout(function() {
             document.getElementById("over").style.height="auto";
        }, 1000);

        if(this.$route.query.id==1){
            this.imgSrc = ["https://m.360buyimg.com/mobilecms/s750x750_jfs/t16843/172/2122223460/340689/da69758/5ae5604cN89c14631.jpg!q80.jpg.webp","https://m.360buyimg.com/mobilecms/s750x750_jfs/t20404/65/738649680/392476/a88c6c22/5b163fe1Nd2f89da2.jpg!q80.dpg","https://m.360buyimg.com/mobilecms/s750x750_jfs/t13558/326/2517366877/218186/6085eb0c/5a5089f3N901d9176.jpg!q80.dpg","https://m.360buyimg.com/mobilecms/s750x750_jfs/t12160/228/1739793979/307948/35704ff7/5a5089f7N828796ba.jpg!q80.dpg","https://m.360buyimg.com/mobilecms/s750x750_jfs/t16399/16/1984980617/434122/1d26706a/5a79106bN58784a8f.jpg!q80.dpg"]    
            this.Msg = "【个性情侣定制】富迪豪2018新款1314情侣手表一对价钨钢带情侣表韩版潮流时尚学生防水手表男女 5001B蓝面间金一对";
            this.Tip = "免费刻字 送情侣钥匙扣  代写贺卡服务    “一生一世（1314）情侣系列”  货到付款";
            this.price = "￥468.00";
            this.detailImg = ["https://img30.360buyimg.com/popWareDetail/jfs/t14257/297/2416564388/205129/15470b57/5a9fb7e2Nf85462b6.jpg.dpg","https://img30.360buyimg.com/popWareDetail/jfs/t15775/259/2186459928/352626/1da40ff4/5a980894N4dc73f47.jpg.dpg","https://img30.360buyimg.com/popWareDetail/jfs/t18901/321/592957244/256479/f371a77f/5a980894N61c2876a.jpg.dpg","https://img30.360buyimg.com/popWareDetail/jfs/t17248/285/615018201/428962/fd029558/5a980894N1e7422ca.jpg.dpg","https://img30.360buyimg.com/popWareDetail/jfs/t16210/180/2281628947/302488/58a630b8/5a9fb7efNe3bf77d9.jpg.dpg"]
            this.color = ["5001B黑面金钉一对","5001B蓝面金钉一对","5001B黑面银钉一对","5001B黑面银钉一对","间金双日历一对","本色双日历一对"];
            this.storeImg = "https://img13.360buyimg.com/jshopm/jfs/t3808/318/1732917046/3823/8b0659fa/583a88f8Nc9cd2f4a.jpg.dpg";
            this.storeName = "西卡丹手表旗舰店"
        }else if(this.$route.query.id===2){
            this.imgSrc=["https://m.360buyimg.com/mobilecms/s750x750_jfs/t19735/330/577927908/159149/1ceb3409/5a96d0c5Ndcd32a88.jpg!q80.dpg","https://m.360buyimg.com/mobilecms/s750x750_jfs/t3304/258/1895843807/227112/12710191/57d7764aNa3fc6287.jpg!q80.dpg","https://m.360buyimg.com/mobilecms/s750x750_jfs/t16558/340/1973908888/99750/ab1d7749/5a96d01fN147b714b.jpg!q80.dpg","https://m.360buyimg.com/mobilecms/s750x750_jfs/t3046/20/3328524059/194470/282080be/57ee9518N87237266.jpg!q80.dpg","https://m.360buyimg.com/mobilecms/s750x750_jfs/t3163/242/1584956447/177074/c4057d86/57d0574dN26027cc2.jpg!q80.dpg"];
            this.Msg = "图拉斯 iPhone7/6s/8钢化膜苹果7Plus全屏全覆盖6D抗蓝光防爆玻璃手机贴膜 7P/8Plus【黑色】高清款";
            this.Tip = "【满59-10元】【京东次日达】【关注产品★贴坏包赔】 ★苹果7/8裸感防指纹手机壳★推荐";    
            this.price = "￥29.00";
            this.detailImg = ["https://img30.360buyimg.com/popWareDetail/jfs/t17248/33/584013783/147515/73b891f3/5a96d1f7N12da7d7a.jpg.dpg","https://img30.360buyimg.com/popWaterMark/jfs/t3760/162/1834166156/183574/63d22a21/5832a4f8Na9914c54.jpg.dpg","https://img30.360buyimg.com/popWareDetail/jfs/t14785/226/2386714441/114089/ea487a1d/5a96d20bN04c7b51a.jpg.dpg","https://img30.360buyimg.com/popWaterMark/jfs/t3619/107/1802022202/72737/b05f1a/5832a4f9N4c0b8b06.jpg.dpg","https://img30.360buyimg.com/popWaterMark/jfs/t3445/68/1796499044/167939/20394096/5832a4faN785900a9.jpg.dpg"]
            this.color = ["7P/8Plus【白色】蓝光款","7P/8Plus【黑色】蓝光款","苹果7/8【白色】高清款","苹果7/8【黑色】高清款","7P/8Plus【白色】高清款","7P/8Plus【黑色】高清款","苹果6/6s【白色】高清款","苹果6/6s【黑色】高清款"]
            this.storeImg ="https://img30.360buyimg.com/popshop/jfs/t13669/42/1675838476/15488/8383f196/5a2617f9N72a8afb3.jpg.dpg";
            this.storeName = "图拉斯旗舰店";
        }
        setTimeout(function(){
            new Swiper ('.swiper-container', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                }
            }) 
        },500)
    }
}

</script>

<style scoped>
   .bg{
      background-color: #eee;
   }
  .head {
     text-align: center;
     height: 0.9rem;
     line-height: 0.9rem;
     font-size: 0.32rem;
     background-color: #fff;
     border-bottom: 0.02rem solid #f1efef;
  }
 
  .head a {
    display: inline-block;
    width: 0.4rem;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzRCQTEyN0IzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzRCQTEyN0MzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NEJBMTI3OTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NEJBMTI3QTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PulQWg8AAAF/SURBVHja7Ni9SsRAEAfwnd1wldiIlqK1td4LiL7CFQaFCHZWgmVqH+GK4FejryA+gPcA9vZ2YnVkd5yAcBLOYJKZ3UWyRbIchPsxSzb/HUBEFfPQKvIxAP89MGn7wPHpuTLOtXoGMdl1WF4rUBug9cX25tpdnufRVHBssXxGhTu0Y6yjs1P6bRTLEo9Lp56ohquLasKcbk5sifvgAMBRRc5oWoau4FIcfRJOaPoQ+i1uwt2H3mZYcdxAdhwnUATHBRTDcQBFcX2B4rg+QC+4rsA9X7gunzpQ1j7S3QuudQWz7HKFjjBbNXNR4QhaYcMCi+LqkwxvtbSX0SWNJVGjAZhQ1T4W8Qk11e2GpkexRP5ZotVBHUmXWwlk122mCZnGAPwV+b3caQxAL0iOsCCK5IpbYkjOwCqC5I787EiJQxMrUurY2YScxNI8Woq0qKZtUpR062NmQB/+RALgqM3/+mgevRhI9imMvVIcewdtqtbH/M8BdOhRD8DA40uAAQDL2thNJDxLvAAAAABJRU5ErkJggg==");
    height: 0.4rem;
    background-size: cover;
    position: absolute;
    top: 0.24rem;
    left: 0.2rem;
  }
  .swiper-wrapper img,.adv img{
    width:100%;
    display: block;
  }
  .describe{
    display: flex;
    padding:0.2rem;
    background-color: #fff; 
  }
  .describe p{
     text-align: left;
     font-size: 0.32rem;
     line-height: 0.36rem;
     font-weight: 700;
 }
 .describe a{
    width: 1.9rem;
    padding-top: 0.56rem;
    font-size: 0.28rem;
    background-image: url(https://wq.360buyimg.com/fd/h5/wxsq_dev/detail/images/cart_sprits_all_54ae802c.png);
    background-size: 2rem;
    background-repeat: no-repeat;
    background-position: -0.9rem -0.4rem;
 }
 .describe .border{
     width: 0.02rem;
     border-left: 0.02rem solid #dcdcdc;
     margin-right: 0.14rem;
     height: 0.7rem;
     margin-top: 0.16rem;
     margin-left: 0.2rem;
}
 .describe2 {
     color: #ff3d3d;
     font-size: 0.26rem;
     line-height: 0.3rem;
     padding: 0rem 0.2rem;
     text-align: left;
     background-color: #fff;
}
 .price{
     padding: 0.2rem;
     overflow: hidden;
     background-color: #fff;
}
 .price b{
     color:red;
     float: left;
     font-size: 0.32rem;
}
 .price span{
     float: right;
     font-size: 0.24rem;
     padding: 0.02rem 0.08rem;
     border: 1px solid #c7c7c7;
}
 .address,.select{
     padding: 0.2rem;
     text-align: left;
     background-color: #fff;
     margin: 0.3rem auto;
     font-size: 0.26rem;
     color: #b5b5b5;
}
 .address div{
     margin: 0.2rem 0rem;
}
 .address span{
     font-size: 0.28rem;
     color:#555;
}
 .select span{
     display: inline-block;
     border: 1px solid #a5a5a5;
     padding: 0.1rem 0.2rem;
     margin: 0rem 0.1rem 0.2rem;
     font-size: 0.28rem;
     color: #555;
}
 .color,.number{
     display: flex;
}
 .color div:nth-child(1),.number div:nth-child(1){
     min-width: 0.66rem;
     padding-top: 0.1rem;
}
 .number span{
     margin: 0rem;
     float: left;
     height: 0.3rem;
     line-height: 0.3rem;
}
 .number span:nth-child(1){
     margin-left: 0.1rem;
}
 .number input{
     width: 0.8rem;
     height: 0.48rem;
     border: 0px;
     float: left;
     outline: none;
     border-top: 0.02rem solid #a5a5a5;
     border-bottom: 0.02rem solid #a5a5a5;
     text-align: center;
}
 .store{
     background-color: #fff;
     padding: 0.2rem;
     text-align: left;
     margin: 0.3rem auto;
     overflow: hidden;
}
 .store div:nth-child(1){
     overflow: hidden;
}
 .store img{
     float: left;
     width: 1.6rem;
     border: 1px solid #ccc;
}
 .store span{
     line-height: 0.6rem;
     display: inline-block;
     float: left;
     font-size: 0.28rem;
     margin-left: 0.2rem;
}
 .introduce{
     display: flex;
     margin: 0.3rem 0rem 0.2rem;
}
 .introduce div{
     width: 33.33%;
     text-align: center;
     font-size: 0.24rem;
     color: #999;
     border-left: 0.02rem solid #d2d2d2;
}
 .introduce div:nth-child(1){
     border: 0px;
}
 .introduce div p{
     height: 0.4rem;
     font-size: 0.28rem;
     color: #333;
}
 .follow{
     display: flex;
}
 .follow div{
     width: 48%;
     height: 0.6rem;
     line-height: 0.6rem;
     font-size: 0.24rem;
     border: 1px solid #c3c3c3;
     border-radius: 0.1rem;
     margin: 0.1rem 2%;
     text-align: center;
}
 
.follow div:nth-child(1) i{
    background-image: url(https://wq.360buyimg.com/fd/h5/wxsq_dev/detail/images/cart_sprits_all_54ae802c.png);
    height: 0.26rem;
    display: inline-block;
    width: 0.4rem;
    background-position: 0.74rem -0.04rem;
    background-size: 1.4rem;
    vertical-align: middle;
}
.follow div:nth-child(2) i{
    background-image: url(https://wq.360buyimg.com/fd/base/img/detail/sprite/shop/sprit_shop_icons.png?20144141932);
    height: 0.26rem;
    display: inline-block;
    width: 0.34rem;
    background-position: 0.7rem -0.4rem;
    background-size: 0.7rem;
    vertical-align: middle;
}
.detail_img img{
  width: 100%;
}
.footer{
     position: fixed;
     bottom: -0.02rem;
     width: 100%;
     height: 1rem;
     background-color: #fff;
     display: flex;
}
 .buy,.shop{
     width: 2.4rem;
     line-height: 1rem;
     font-size: 0.28rem;
     background-color: #ec2d2d;
     color: #fff;
}
 .buy{
     background: linear-gradient(to right,#ff6060,#ff1d1d);
}
 .shop{
     background: linear-gradient(to right,#f6f936,#ffc600);
}
 .contact{
     flex: 1;
     text-align: left;
     font-size: 0.26rem;
     line-height: 1.5rem;
}
 .contact div{
     float: left;
     width: 50%;
     text-align: center;
}
 
.contact div:nth-child(1){
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUdwTP+VAP+XAP+WAP+VAP+WAP+bAP+WAP+WAP+WAP+VAP+WAP+VAP+WAP+VAP+WAP+WAP+WAObu2GAAAAARdFJOUwD3JdFfqwngFuzDbTNPQZmG5rcHBwAAAWdJREFUSMftlsm6gyAMRgETIMhg3v9lr15bZW676qZZ6SeH5CcDCvGzr5hacSFmueCqXi9WQsPCt5koVAA/BIJhRpMBtGpwx8M6ICJvKvfAaMNjAxwgzticILDp+TzyImUelLtcHJJsHymCSjrlr4vuInivkKt1XFhXTciI6A1XFlpC34vIR1kTbNrQ4P6ooCWYYSx+J7hnS1MqV1QDgrmut/XSEQZEk098nlWUIwT7UsAPiUYMnTm3ZkgwVchZV9rxxOqaPLaxiT9AjsBimBLUyk+WpkgtPzFpnBK8NamEeVgs6zZTRpvPnAjh79KSiK2qXl9eKZH72Kqbcq/WlrBlBLFqMDXt47Xc4Rw3vdaHsmJzLwYG4zhrDC18jOk8QcKwC+/PJMBrgNO+etNCK+//I9JgR3O8OCfaHgNfbWjHl4XeypN1iM7sk3N6w8SlyWF8eS2FIosuvHXxWUjOEBmXwP5+A75jf4eCPV9Yk6GkAAAAAElFTkSuQmCC");
    background-repeat: no-repeat;
    background-size: 0.48rem;
    background-position: center 0.04rem;
}
.contact div:nth-child(2){
    background-image: url("https://wq.360buyimg.com/fd/base/img/detail/footbar_v20160406.png?v3");
    background-repeat: no-repeat;
    background-size: 0.48rem;
    background-position: center -1.94rem;   
}
#over{
    overflow: hidden;
    height: 100%;
}
</style>
