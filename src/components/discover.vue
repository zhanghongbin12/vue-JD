<template>
  <div id="over" :class="{'opt': isTrue}">
      <div class="head"><a class="" @click="$router.back(-1)"></a>发现 </div>
      <div class='tab'>
          <div class="active" index="0" v-on:click="tab($event)">
              <p>精选</P>
          </div>
          <div  index="1" v-on:click="tab($event)">
              <p>购物百科</P>
          </div>
          <div  index="2" v-on:click="tab($event)">
              <p>好吃的</P>
          </div>
          <div  index="3" v-on:click="tab($event)">
              <p>好玩的</P>
          </div>
          <div  index="4" v-on:click="tab($event)">
              <p>好看的</P>
          </div>
      </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="https://img30.360buyimg.com/jdphoto/jfs/t20683/100/452109090/99159/469febc6/5b0e5a59N50f5376c.png.webp"></div>
                <div class="swiper-slide"><img src="https://img20.360buyimg.com/jdphoto/jfs/t21283/152/442948397/49658/f2626d75/5b0e71cbNeb8eeec5.jpg.dpg"></div>
                <div class="swiper-slide"><img src="https://img13.360buyimg.com/jdphoto/jfs/t16819/320/786190875/224761/5ffd0149/5aa8ba25Ne60e7133.png.webp"></div>
                <div class="swiper-slide"><img src="https://img30.360buyimg.com/jdphoto/jfs/t21625/320/359587280/110699/6dfb8124/5b0b9997Nd122d527.jpg.dpg"></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class='content'>
            <div class="tab-content active">
                <div class='good'>
                <div>
                    <p>
                        【主妇购物车】一批10元厨房小工具驾到
                    </p>
                    <span>111人阅读</span>
                </div>
                <div>
                    <img src='https://m.360buyimg.com/mobilecms/jfs/t2248/71/2714064956/379437/c3c42c98/5715ff6dN97d4b2d2.jpg!q70.jpg.dpg'>
                </div>
                </div>
                <div class='good'>
                <div>
                    <p> 联想ZUK续命，新机Z5屏占比大突破</p>
                      <span>15人阅读</span>
                </div>
                <div>
                    <img src='https://m.360buyimg.com/mobilecms/jfs/t19402/114/2667053084/89792/8d2641b2/5b068658N2968c76c.jpg!q70.jpg.dpg'>
                </div>
                </div>
                <div class='good'>
                <div>
                    <p> 8848钛金手机：与世界杯同追求！尽显锐利之风</p>
                      <span>215人阅读</span>
                </div>
                <div>
                    <img src='https://m.360buyimg.com/mobilecms/jfs/t20491/107/253982951/184577/9161d091/5b077447N2a84b0ee.jpg!q70.jpg.dpg'>
                </div>
                </div>
                <div class='good'>
                <div>
                    <p> 8848钛金手机：与世界杯同追求！尽显锐利之风</p>
                      <span>384人阅读</span>
                </div>
                <div>
                    <img src='https://m.360buyimg.com/mobilecms/jfs/t20569/15/389373275/181954/e70492b0/5b0bb7d5Necfe1eaf.jpg!q70.jpg.dpg'>
                </div>
                </div>
            </div>
            <div class="tab-content">
                <div class='good'>
                <div>
                    <p>
                         如何选购合适尺寸的电视机，HDR电视与非HDR电视说明
                    </p>
                      <span>175人阅读</span>
                </div>
                <div>
                    <img src='https://img11.360buyimg.com/jdphoto/s340x240_jfs/t14998/23/2140593174/123138/37690cc5/5a741a46Ndb98761f.jpg.dpg'>
                </div>
                </div>
                <div class='good'>
                <div>
                    <p>
                        变频空调与定频空调优劣势比较，空调能效等级及新鲜卖点 
                    </p>
                      <span>62人阅读</span>
                </div>
                <div>
                    <img src='https://img11.360buyimg.com/jdphoto/s340x240_jfs/t15277/80/2146237007/57766/79af3807/5a741a4bNde0f5721.jpg.dpg'>
                </div>
                </div>
                <div class='good'>
                <div>
                    <p> 冰箱容量选择，变频冰箱与定频冰箱优劣势对比等</p>
                      <span>88人阅读</span>
                </div>
                <div>
                    <img src='https://img11.360buyimg.com/jdphoto/s340x240_jfs/t16705/25/391161302/63800/d2387225/5a741a4fN49019f5b.jpg.dpg'>
                </div>
                </div>
                <div class='good'>
                <div>
                    <p> 洗衣机分类介绍，容量选择，变频与定频洗衣机对比说明</p>
                      <span>8000人阅读</span>
                </div>
                <div>
                    <img src='https://img11.360buyimg.com/jdphoto/s340x240_jfs/t14893/253/2158598715/63713/68d3794c/5a741a53Ne65bd41e.jpg.dpg'>
                </div>
                </div>
            </div>

            <div class="tab-content">
                <div class='good'>
                <div>
                    <p>
                         三只松鼠来助力，追剧时光更加精彩！
                    </p>
                      <span>10011人阅读</span>
                </div>
                <div>
                    <img src='https://m.360buyimg.com/mobilecms/jfs/t20503/293/725566356/175981/d516b5e1/5b1644acNbfb1fa13.jpg!q70.jpg.dpg'>
                </div>
                </div>
                <div class='good'>
                <div>
                    <p>  小龙虾正当时，约上好友享受鲜辣美味吧</p>
                     <span>876人阅读</span>
                </div>
                <div>
                    <img src='https://m.360buyimg.com/mobilecms/jfs/t22246/352/696826290/181184/1ae73e68/5b154dc5N8a559faa.jpg!q70.jpg.dpg'>
                </div>
                </div>
                <div class='good'>
                <div>
                    <p> 什么是黑茶？原来是茶类也有黑科技</p>
                      <span>543人阅读</span>
                </div>
                <div>
                    <img src='https://m.360buyimg.com/mobilecms/jfs/t21094/40/722956857/91451/2c77db09/5b166508N2921d922.jpg!q70.jpg.dpg'>
                </div>
                </div>
                <div class='good'>
                <div>
                    <p>  凉菜的调汁有秘诀？5款经典凉菜调汁大揭秘，快收藏！</p>
                      <span>249人阅读</span>
                </div>
                <div>
                    <img src='https://m.360buyimg.com/mobilecms/jfs/t21286/134/677245118/165628/1fa5e691/5b14b540N20127505.jpg!q70.jpg.dpg'>
                </div>
                </div>
            </div>
            <div class="tab-content">
                <div class='good'>
                <div>
                    <p>
                         武极主机锋芒毕露，为信仰，势不可挡
                    </p>
                      <span>16人阅读</span>
                </div>
                <div>
                    <img src='https://m.360buyimg.com/mobilecms/jfs/t22300/11/693043434/228129/f4ec6777/5b162312N73232395.jpg!q70.jpg.dpg'>
                </div>
                </div>
                <div class='good'>
                <div>
                    <p> Hey，朋友，我有摄影的必备神器，要一起去旅行吗？</p>
                      <span>101人阅读</span>
                </div>
                <div>
                    <img src='https://m.360buyimg.com/mobilecms/jfs/t21388/58/719404564/89297/4cee1299/5b15fa08N4627deb9.jpg!q70.jpg.dpg'>
                </div>
                </div>
                <div class='good'>
                <div>
                    <p> 酷玩黑科技的吃鸡小能手，你怎么能没有！ </p>
                      <span>654人阅读</span>
                </div>
                <div>
                    <img src='https://m.360buyimg.com/mobilecms/jfs/t22303/40/697577551/367012/3666bfeb/5b154ebbN3652cd38.jpg!q70.jpg.dpg'>
                </div>
                </div>
                <div class='good'>
                <div>
                    <p>家里有了它不仅能听歌，还能给你当管家哦 </p>
                      <span>386人阅读</span>
                </div>
                <div>
                    <img src='https://m.360buyimg.com/mobilecms/jfs/t21013/5/661938084/198929/dc2331fd/5b15179eNed2a81bf.jpg!q70.jpg.dpg'>
                </div>
                </div>
            </div>
            <div class="tab-content">
                <div class='good'>
                <div>
                    <p>
                         每日鞋报Vol.790球鞋客制团队再添客制版本
                    </p>
                      <span>462人阅读</span>
                </div>
                <div>
                    <img src='https://m.360buyimg.com/mobilecms/jfs/t20416/94/407695577/123136/41d4136/5b0c37eaN779e495f.jpg!q70.jpg.dpg'>
                </div>
                </div>
                <div class='good'>
                <div>
                    <p>  复古撞色，彪马给你不一样的夏天</p>
                      <span>963人阅读</span>
                </div>
                <div>
                    <img src='https://m.360buyimg.com/mobilecms/jfs/t21187/350/393370921/223368/b9c817c3/5b0cb4f5N81ef9c53.jpg!q70.jpg.dpg'>
                </div>
                </div>
                <div class='good'>
                <div>
                    <p>夏日要打造清爽又轻熟look？雪纺裙了解下！</p>
                      <span>906人阅读</span>
                </div>
                <div>
                    <img src='https://m.360buyimg.com/mobilecms/jfs/t21073/193/391842552/876142/ee0d9a50/5b0cb33bNaed5379f.png.webp'>
                </div>
                </div>
                <div class='good'>
                <div>
                    <p> 小配件的大能量——摩登手拿包，一只点亮全身造型！</p>
                      <span>68人阅读</span>
                </div>
                <div>
                    <img src='https://m.360buyimg.com/mobilecms/jfs/t20428/168/387649562/90936/8e385e17/5b0bdd14N67a33dd4.jpg!q70.jpg.dpg'>
                </div>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
import Swiper from 'swiper';

export default {
     name:"discover",
     data () {
        return { 
            cont:0,
            isTrue:true   
        }
     },
     watch:{
        cont (val,oldval) {
            if(val == 14){
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
         setTimeout(function() {
             document.getElementById("over").style.height="auto";
         }, 1000);
         new Swiper ('.swiper-container', {
            loop: true,
            pagination: {
               el: '.swiper-pagination',
            },
            autoplay: {
               disableOnInteraction: false,
            }
          }) 
    },
    methods:{
        tab:function(e){
           var sibings = document.getElementsByClassName("tab")[0].children;
           for(var i=0;i<sibings.length;i++){
              sibings[i].classList.remove("active");
              document.getElementsByClassName("tab-content")[i].classList.remove("active");
           }
           var ev = e.path.length==8? e.target:e.path[1];
           ev.classList.add("active")
           var index = ev.getAttribute("index");
           document.getElementsByClassName("tab-content")[index].classList.add("active");
        }
    }
}
</script>
<style scoped>

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
     height: 0.4rem;
     background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzRCQTEyN0IzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzRCQTEyN0MzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NEJBMTI3OTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NEJBMTI3QTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PulQWg8AAAF/SURBVHja7Ni9SsRAEAfwnd1wldiIlqK1td4LiL7CFQaFCHZWgmVqH+GK4FejryA+gPcA9vZ2YnVkd5yAcBLOYJKZ3UWyRbIchPsxSzb/HUBEFfPQKvIxAP89MGn7wPHpuTLOtXoGMdl1WF4rUBug9cX25tpdnufRVHBssXxGhTu0Y6yjs1P6bRTLEo9Lp56ohquLasKcbk5sifvgAMBRRc5oWoau4FIcfRJOaPoQ+i1uwt2H3mZYcdxAdhwnUATHBRTDcQBFcX2B4rg+QC+4rsA9X7gunzpQ1j7S3QuudQWz7HKFjjBbNXNR4QhaYcMCi+LqkwxvtbSX0SWNJVGjAZhQ1T4W8Qk11e2GpkexRP5ZotVBHUmXWwlk122mCZnGAPwV+b3caQxAL0iOsCCK5IpbYkjOwCqC5I787EiJQxMrUurY2YScxNI8Woq0qKZtUpR062NmQB/+RALgqM3/+mgevRhI9imMvVIcewdtqtbH/M8BdOhRD8DA40uAAQDL2thNJDxLvAAAAABJRU5ErkJggg==");
     background-size: cover;
     position: absolute;
     top: 0.24rem;
     left: 0.2rem;
}
 .tab {
     display:flex;
}
 .tab div{
     width:20%;
     padding:0.66rem 0rem 0.2rem;
     background-repeat: no-repeat;
     background-size: 0.36rem;
     background-position: center 0.2rem;
}
 .tab div img{
     height:0.4rem;
}
 .tab div p{
     font-size:0.24rem;
     line-height:0.36rem;
}
 
  .tab div:nth-child(1){
      background-image: url(https://img12.360buyimg.com/jdphoto/jfs/t14824/4/1991033145/1604/f083ab0a/5a65443aN38b9804d.png.webp);
  }
  .tab div:nth-child(2){
      background-image: url(https://img10.360buyimg.com/jdphoto/jfs/t18487/363/230512497/499/3790e091/5a65454cNd14da231.png.webp);
  }
  .tab div:nth-child(3){
      background-image: url(https://img10.360buyimg.com/jdphoto/jfs/t19006/246/228142871/1773/8721cd3b/5a654489N1a3be41b.png.webp);
  }
  .tab div:nth-child(4){
      background-image: url(https://img20.360buyimg.com/jdphoto/jfs/t19012/262/233017295/892/29ab0cf3/5a6544b2N83129a6d.png.webp);
  }
  .tab div:nth-child(5){
      background-image: url(https://img10.360buyimg.com/jdphoto/jfs/t15658/245/1612107637/1443/682550aa/5a654536N8765a163.png.webp);
  }
  .tab div.active{
    background-color: #ff4f4f;
    color: #fff;
  } 
  .tab div:nth-child(1).active{
    background-image: url(https://img10.360buyimg.com/jdphoto/jfs/t14338/362/2005547105/687/9db36e0/5a654458N79195588.png.webp);
  } 
 .tab div:nth-child(2).active{
    background-image: url(https://img10.360buyimg.com/jdphoto/jfs/t16378/268/1981265420/352/a8652187/5a6f1b68N095f3d2c.png.webp);
  } 
 .tab div:nth-child(3).active{
    background-image: url(https://img11.360buyimg.com/jdphoto/jfs/t16981/209/243148469/1361/c8e982af/5a65449aN1593fb13.png.webp);
  } 
 .tab div:nth-child(4).active{
    background-image: url(https://img12.360buyimg.com/jdphoto/jfs/t16114/302/1791640005/552/5fae6e26/5a6544c4N72efe376.png.webp);
  } 
 .tab div:nth-child(5).active{
    background-image: url(https://img20.360buyimg.com/jdphoto/jfs/t15592/104/1999105092/881/e045a4f3/5a7170ebNf415f257.png.webp);
  } 

  .swiper-pagination-bullet{
     width:0.08rem;
     height: 0.08rem;
     background: inherit;
     border: 1px solid #fff;
     opacity: 0.8;
}
 .swiper-pagination-bullet-active{
     background: #ffffff;
     opacity: 1;
}
 .swiper-container {
     width: 100%;
     margin: 0rem auto;
}
 .swiper-container img{
     width: 100%;
}
 .content{
     background: #f7f7f7;
     padding:0.2rem 0.3rem;
}
 .good{
     background:#fff;
     width:100%;
     display:flex;
     margin:0rem 0rem 0.2rem;
}
 .good div{
     width:50%;
}
 .good div:nth-child(1){
     position: relative;
     padding: 0.2rem;
     box-sizing: border-box;
}
 .good div img{
     width:100%;
}
 .good div p{
     text-align: left;
     display: -webkit-box;
     -webkit-box-orient: vertical;
     -webkit-line-clamp: 2;
     font-size:0.28rem;
     line-height: 0.4rem;
     overflow: hidden;
}
 .good div span{
     position: absolute;
     bottom: 0.2rem;
     font-size: 0.26rem;
     right: 0.3rem;
     color: #989898;
}
 
  .tab-content{
      display: none;
  }
  .content .active{
      display: block;
  }
  #over{
    overflow: hidden;
    height: 100%;
  }
</style>
