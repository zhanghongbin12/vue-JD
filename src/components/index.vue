<template>
  <div id="over" :class="{'opt': isTrue}">
      <div class="bg"></div>
      <div class="head">
          <div @click="$router.push({path:'/product'})">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAAAAXNSR0IArs4c6QAAAHlJREFUWAnt2LEJwDAMRFE5c2ShLOKhsp69h3ISeAI1CnyBiJvA8dwcHu7+mNmrvbWdZivMHAq4dOgW7kDt65y6fiPg1AZnt8kr7haKPAgggAACfxOIskCbKdwabaaAlw0rmhaDAAIIIIBAQYA2U8CLX2kzFcB8m/kAgGUmQShl8pcAAAAASUVORK5CYII=">
          </div>
          <div>
              <input type="text" value="" placeholder="飞利浦京东超级品牌日，低至5折" readonly @click="childClick">
          </div>
          <div @click="$router.push({path:'/user'})">
             <img src="data:image/png;base64,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">
          </div>
      </div>
      <div class="banner"> 
          <div class="swiper-container">
              <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="https://m.360buyimg.com/mobilecms/s750x366_jfs/t19303/186/2681964228/138564/daea65f1/5b028c9fN949bcd5d.jpg!cr_1125x549_0_72!q70.jpg.dpg"></div>
                  <div class="swiper-slide"><img src="https://m.360buyimg.com/mobilecms/s1280x624_jfs/t20908/132/174551301/158422/b35ae637/5b02859eN1669abd5.jpg!cr_1125x549_0_72!q70.jpg.dpg.webp"></div>
                  <div class="swiper-slide"><img src="https://m.360buyimg.com/mobilecms/s750x366_jfs/t21433/248/520863715/129747/ea6cdf98/5b101f9cN4c001e1c.jpg!cr_1125x549_0_72!q70.jpg.dpg"></div>
                  <div class="swiper-slide"><img src="https://img1.360buyimg.com/da/jfs/t22390/39/419078998/194055/2005437a/5b0d2253N9c11fff3.jpg!cr_1125x549_0_72"></div>
                  <div class="swiper-slide"><img src="https://m.360buyimg.com/mobilecms/s750x366_jfs/t20965/269/491727932/362727/87cf6e2c/5b0f46ceN0570583d.jpg!cr_1125x549_0_72!q70.jpg.dpg"></div>
              </div>
              <div class="swiper-pagination"></div>
          </div>

      </div>
      <div class="content">
            <div class="jd_type">
                <div>
                    <img src="https://m.360buyimg.com/mobilecms/jfs/t16912/18/2046755333/11079/5d93a046/5ae41d1aN7c1bb190.png">
                    <p>京东超市</p>
                </div>
                <div>
                    <img src="https://m.360buyimg.com/mobilecms/jfs/t21658/347/221358098/7461/f86e6f74/5b03b170Nc9e0ec7c.png">
                    <p>全球购</p>
                </div>
                <div>
                    <img src="https://m.360buyimg.com/mobilecms/jfs/t18865/90/1804471517/14538/72c79ba/5ad87b67N1ebcb69b.png">
                    <p>京东服饰</p>
                </div>
                <div>
                    <img src="https://m.360buyimg.com/mobilecms/jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png">
                    <p>京东生鲜</p>
                </div>
                <div>
                    <img src="https://m.360buyimg.com/mobilecms/jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png">
                    <p>京东到家</p>
                </div>
                <div>
                    <img src="https://m.360buyimg.com/mobilecms/jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png">
                    <p>充值缴费</p>
                </div>
               <div>
                    <img src="https://m.360buyimg.com/mobilecms/jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png">
                    <p>9.9元拼</p>
                </div>
                <div>
                    <img src="https://m.360buyimg.com/mobilecms/jfs/t19495/200/1823004232/14065/ca00ab2c/5ad87cf5N4ad8e6f1.png">
                    <p>领劵</p>
                </div>
                <div>
                    <img src="https://m.360buyimg.com/mobilecms/jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png">
                    <p>赚钱</p>
                </div>
                <div>
                    <img src="https://m.360buyimg.com/mobilecms/jfs/t19363/63/2646452145/20627/ac842404/5b04007fNb61b7a2a.png">
                    <p>全部</p>
                </div>
            </div>
            <div class="more">
                <img src="https://m.jd.com/images/index/jd-news-tit.png">
                <div>
                    <div class="swiper-container2 swiper-no-swiping">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <span style="color:red">热</span> 这是一顶很好看的帽子
                            </div>
                            <div class="swiper-slide">
                                <span style="color:red">热</span>  这是一把很不错的尤克里里 
                            </div>
                            <div class="swiper-slide">
                                <span style="color:red">热</span> 这是一件非常好看的衣服
                            </div>
                        </div>
                    </div>
                </div>
                <span>更多</span>
            </div>
            <div class="adv">
                <img src="https://m.360buyimg.com/mobilecms/s720x220_jfs/t17536/31/1694362579/168463/ef33e94a/5ad412c3Ne38005f5.jpg!q70.jpg.dpg.webp">
            </div>
            <div class="pro_list">
                <ul>
                    <li v-on:click="ToDetail(1)">
                        <div>
                            <div class="pro_img">
                                <img src="https://m.360buyimg.com/mobilecms/s410x410_jfs/t16843/172/2122223460/340689/da69758/5ae5604cN89c14631.jpg!q70.jpg.dpg">
                            </div>
                            <p>【个性情侣定制】富迪豪2018新款1314情侣手表一对价钨钢带情侣表韩版潮流时尚学生防水手表男女 5001B蓝面间金一对</p>
                            <div class="pro_pice">
                                ￥<b>486</b>.00
                            </div>
                            <div class="look">
                                <botton>查看相似</botton>
                            </div>
                        </div>
                    </li>
                    <li v-on:click="ToDetail(2)">
                        <div>
                            <div class="pro_img">
                                <img src="https://m.360buyimg.com/mobilecms/s316x316_jfs/t21640/80/243766779/356930/54cf6305/5b076982Nde6b0c3f.jpg!q70.jpg.dpg.webp">
                            </div>
                            <p>图拉斯 iPhone7/6s/8钢化膜苹果7Plus全屏全覆盖6D抗蓝光防爆玻璃手机贴膜 7P/8Plus【黑色】高清款</p>
                            <div class="pro_pice">
                                ￥<b>35</b>.00
                            </div>
                            <div class="look">
                                <botton>查看相似</botton>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="pro_img">
                                <img src="https://m.360buyimg.com/mobilecms/s364x364_jfs/t3100/289/2726424261/181956/c4a3c3d1/57e61202Ncfbc1d38.jpg!q70.jpg.dpg.webp">
                            </div>
                            <p>书包男时尚潮流高中学生大学生旅行包韩版初中帆布双肩包男士背包 黑色</p>
                            <div class="pro_pice">
                                ￥<b>35</b>.00
                            </div>
                            <div class="look">
                                <botton>查看相似</botton>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="pro_img">
                                <img src="https://m.360buyimg.com/mobilecms/s394x394_jfs/t14260/76/371951370/147872/eacb14ab/5a2b9865N4162cf3a.jpg!q70.jpg.dpg.webp">
                            </div>
                            <p>劳奴诗（LAVRORE）韩国夜视镜权志龙GD同款黄色透明太阳眼镜复古潮款蛤蟆镜男女墨镜 黄色 送镜盒、眼镜布</p>
                            <div class="pro_pice">
                                ￥<b>35</b>.00
                            </div>
                            <div class="look">
                                <botton>查看相似</botton>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="pro_img">
                                <img src="https://m.360buyimg.com/mobilecms/s364x364_jfs/t16462/163/1092853297/173600/adf0851a/5a4b22b8Nfae2e9c7.jpg!q70.jpg.dpg.webp">
                            </div>
                            <p>【领券立减100】卡帝乐鳄鱼（CARTELO)夏季轻盈透气休闲乐福鞋 白色 43</p>
                            <div class="pro_pice">
                                ￥<b>35</b>.00
                            </div>
                            <div class="look">
                                <botton>查看相似</botton>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="pro_img">
                                <img src="https://m.360buyimg.com/mobilecms/s364x364_jfs/t16915/187/781891407/480626/942373a7/5aa7728fN4612030e.jpg!q70.jpg.dpg.webp">
                            </div>
                            <p>赛彩（Saicai）3D立体墙贴墙纸自粘砖纹墙纸适用客厅卧室背景墙防水防潮浪漫温馨 薄款白色</p>
                            <div class="pro_pice">
                                ￥<b>35</b>.00
                            </div>
                            <div class="look">
                                <botton>查看相似</botton>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
      </div>
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
    name: 'index',
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
        new Swiper ('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay: {
             disableOnInteraction: false,
           }
        }) 
         new Swiper ('.swiper-container2', {
            direction : 'vertical',
            loop: true,
            autoplay: {
                disableOnInteraction: false,
            }
        })  
        setTimeout(function() {
             document.getElementById("over").style.height="auto";
        }, 1000);
        var head = document.getElementsByClassName("head")[0];

        var scrol = function(){
            var ev = document.getElementsByClassName("content")[0];
            var changecolor = ev.offsetTop;
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if(scrollTop +document.documentElement.clientHeight >= document.documentElement.scrollHeight){
                    var pro_list = document.getElementsByClassName("pro_list")[0];
                    var pro_ul = pro_list.children[0];
                    var li = document.createElement("li");
                    li.innerHTML = "<div><div class='pro_img'><img src='https://m.360buyimg.com/mobilecms/s364x364_jfs/t16915/187/781891407/480626/942373a7/5aa7728fN4612030e.jpg!q70.jpg.dpg.webp'></div> <p>赛彩（Saicai）3D立体墙贴墙纸自粘砖纹墙纸适用客厅卧室背景墙防水防潮浪漫温馨 薄款白色</p> <div class='pro_pice'>￥<b>35</b>.00</div><div class='look'><botton>查看相似</botton></div></div>"
                    
                    pro_ul.appendChild(li);
                    var li2 = document.createElement("li");
                    li2.innerHTML = "<div><div class='pro_img'><img src='https://m.360buyimg.com/mobilecms/s364x364_jfs/t16915/187/781891407/480626/942373a7/5aa7728fN4612030e.jpg!q70.jpg.dpg.webp'></div> <p>赛彩（Saicai）3D立体墙贴墙纸自粘砖纹墙纸适用客厅卧室背景墙防水防潮浪漫温馨 薄款白色</p> <div class='pro_pice'>￥<b>35</b>.00</div><div class='look'><botton>查看相似</botton></div></div>"
                    
                    pro_ul.appendChild(li2);
            }  

            if(scrollTop >=changecolor){
                 head.style.background = "red";
            }else{
                 head.style.background = "inherit";
            }
        } 
        window.addEventListener("scroll",scrol);      
    },
    data () {
      return { 
         cont:0,
         isTrue:true 
      }
    },
    watch : {
        cont (val,oldval) {
            if(val == 10){
                this.isTrue = false;
            }
        }
    },
    methods:{
        childClick:function(){
            this.$router.push({path:'/search'})
            this.$emit('childByValue', false);
        },
        ToDetail:function(d){
            this.$router.push({path:'/detail',query:{id:d}});
            this.$emit('childByValue', false);
        }
    }     
}

</script>

<style scoped>
  .bg{
     background: linear-gradient(#000,transparent);
     position: absolute;
     top: 0px;
     width: 100%;
     height: 1rem;
     z-index: 8;
  }
  .head{
     position: fixed;
     top: 0rem;
     width: 100%;
     height: 1rem;
     background-color: inherit;
     display: flex;
     z-index: 10;
  }
  .head div{
     display: flex;
  }
  .head div:nth-child(2){
     flex: 1;
     padding: 0.2rem 0.1rem;
  }    
  .head div:nth-child(2) input{
     width: 100%;
     border-radius: 1rem;
     border: 0px;
     font-size: 0.26rem;
     padding-left:0.6rem;
     padding-right: 0.2rem;
     background-image: url("data:image/png;base64,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");
     background-repeat: no-repeat;
     background-size: 0.3rem;
     background-position: 0.2rem;
  }
 .head div:nth-child(1)>img{
     height: 0.3rem;
     margin: 0.36rem 0.1rem 0rem 0.28rem;
}
 .head div:nth-child(3)>img{
     height: 0.5rem;
     margin: 0.24rem 0.2rem 0rem 0.08rem;
}
 
  .banner{
    z-index:0;
  }
  .content{
      position: relative;
      width: 100%;
      margin-top: -0.2rem;
      border-radius:0.2rem;
      background-color:#fff; 
      z-index: 9;
  }
  .jd_type{
      display: flex;
      flex-wrap: wrap;
  }
  .jd_type div{
     width: 20%;
     text-align:center;
     padding: 0.24rem 0rem 0rem;
     box-sizing: border-box;
}
 .jd_type p{
     margin: 0rem;
     font-size: 0.24rem;
     line-height: 0.5rem;
}
 .jd_type img{
     width:0.8rem;
}
 .more{
     display: flex;
     padding: 0.2rem;
     margin-top: 0.2rem;
     font-size: 0.24rem;
}
 .more p{
     margin: 0rem;
     flex: 1;
}
 .more img{
     width: 1.6rem;
     height: 0.36rem;
}
 .more>div{
     flex:1;
     text-align: left;
     padding-left: 0.2rem;
     overflow: hidden;
}
 .swiper-container2 {
     height: 0.36rem;
}
 .swiper-container {
     width: 100%;
     margin: 0rem auto;
}
 .swiper-container img{
     width: 100%;
}
.swiper-container-horizontal > .swiper-pagination-bullets{
     bottom: 0.2rem;

}
 .adv{
     background-color: #f5f3f3;
     padding: 0.12rem 0.06rem;
}
 
  .adv img{
      width: 100%;
  }
  #over{
     overflow: hidden;
     height: 100%;
  }
</style>
