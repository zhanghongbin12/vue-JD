<template>
  <div id="app">
    <transition name="fade">
        <router-view v-on:childByValue="childByValue" />
    </transition>
    <div class="foot" v-show="ok" >
          <router-link to="./index"></router-link>
          <router-link to="./product"></router-link>
          <router-link to='./discover' ></router-link>
          <router-link to="./shop"  v-on:click.native="showChild"></router-link> 
          <router-link to="./user"></router-link>
     </div>
  </div>
</template>
<script>

export default {
     name: 'app',
     data () {
        return { 
          "ok":true
        }
     },
     methods:{
        showChild:function(){
            this.ok = false;
        },
        childByValue: function (childValue) {
            // childValue就是子组件传过来的值
            this.ok = childValue
        }
     }
}
</script>
<style>
/*样式重置reset*/
body,dl,dd,ul,ol,h1,h2,h3,h4,h5,h6,pre,form,input,textarea,p,hr,thead,tbody,tfoot,th,td{margin:0;padding:0;}
ul,ol{list-style:none;}
a{text-decoration:none;}
html{-ms-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none;font-size:50px;}
body{line-height:1.5;font-size:16px;}
body,button,input,select,textarea{font-family:'helvetica neue',tahoma,'hiragino sans gb',stheiti,'wenquanyi micro hei',\5FAE\8F6F\96C5\9ED1,\5B8B\4F53,sans-serif;}
b,strong{font-weight:bold;}
i,em{font-style:normal;}
table{border-collapse:collapse;border-spacing:0;}
table th,table td{border:1px solid #ddd;padding:5px;}
table th{font-weight:inherit;border-bottom-width:2px;border-bottom-color:#ccc;}
img{border:0 none;width:auto\9;max-width:100%;vertical-align:top;}
button,input,select,textarea{font-family:inherit;font-size:100%;margin:0;vertical-align:baseline;}
button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer;}
button[disabled],input[disabled]{cursor:default;}
input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0;}
input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}
input[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}
@media screen and (-webkit-min-device-pixel-ratio:0){
input{line-height:normal!important;}
}
select[size],select[multiple],select[size][multiple]{border:1px solid #AAA;padding:0;}
article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block;}
audio,canvas,video,progress{display:inline-block;}

  html,body{
    height:100%;
  }
  #app {
    height:100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0px;
  }
  body,ul,li,p,h1{
    margin: 0px;
    padding: 0px;
  }
  li{
      list-style: none;
  }
  .swiper-pagination-bullet{
      width:0.08rem;
      height: 0.08rem;
      background: inherit;
      border: 0.02rem solid #fff;
      opacity: 0.8;
  }
  .swiper-pagination-bullet-active{
     background: #ffffff;
     opacity: 1;
  }
  .foot{
    position: fixed;
    bottom: 0px;
    height: 1rem;
    width: 100%;
    display: flex;
    background-color: #ffffff;
    border-top: 1px solid #dedede;
    box-shadow: 0px -0.04rem 0.1rem #eee;
    z-index:90;
  }
  .foot a{
    display: block;
    width: 20%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .foot a:nth-child(1){
      background-image:url("https://m.360buyimg.com/mobilecms/jfs/t18526/211/696109898/3876/a61be82c/5aa10cd2N1318ac50.png");
  }
  .foot a:nth-child(2){
      background-image:url("https://m.360buyimg.com/mobilecms/jfs/t19183/49/696491919/3763/dec8cceb/5aa10cdbNa9cd0320.png");
  }
  .foot a:nth-child(3){
      background-image:url("https://m.360buyimg.com/mobilecms/jfs/t15076/226/2372445198/4768/4b9c36de/5aa10ce2N848e2dbd.png");
  }
  .foot a:nth-child(4){
      background-image:url("https://m.360buyimg.com/mobilecms/jfs/t18583/69/717127328/4407/5e47882b/5aa10ceaN649eec12.png");
  }
  .foot a:nth-child(5){
      background-image:url("https://m.360buyimg.com/mobilecms/jfs/t16849/271/702371255/4462/d55edd83/5aa10cf6Nee5122a5.png");
  }
  .foot a:nth-child(1).router-link-active{
     background-image:url("https://m.360buyimg.com/mobilecms/jfs/t15145/137/2502885754/3106/de5e0b14/5aa10cd2N46f18ce6.png");
  }
  .foot a:nth-child(2).router-link-active{
     background-image:url("https://m.360buyimg.com/mobilecms/jfs/t17578/307/690695366/3731/8695ed50/5aa10cdbNf3977e9f.png");
  }
  .foot a:nth-child(3).router-link-active{
     background-image:url("https://m.360buyimg.com/mobilecms/jfs/t15682/206/2347158824/4156/c325b155/5aa10ce2N914335bf.png");
  }
  .foot a:nth-child(5).router-link-active{
     background-image:url("https://m.360buyimg.com/mobilecms/jfs/t18598/41/712219415/3756/7828621f/5aa10cf6Nbfbdc1af.png");
  }

  .pro_list ul{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      padding: 0px;
  }
  .pro_list li{
      width: 50%;
      list-style: none;
      padding-bottom: 0.12rem;
      background-color: #f1f0f0;
      box-sizing: border-box;
   }
   .pro_list li:nth-child(odd){
        padding-right: 0.06rem;
   }
   .pro_list li:nth-child(even){
        padding-left: 0.06rem;
   }
    .pro_list li>div{
        background-color: #fff; 
        height: 100%;
    }
    .pro_list li .pro_img img{
        width:100%;
    }
    .pro_list li p{
        font-size: 0.28rem;
        text-align: left;
        margin:0.1rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .pro_list li .pro_pice{
        font-size:0.26rem;
        text-align: left;
        color: red;
        padding-left:0.1rem;
    }
    .pro_list li .pro_pice b{
        font-size:0.32rem; 
    }
    .look botton{
        border: 0.02rem solid #b7b3b3;
        font-size: 0.26rem;
        display: block;
        width: 1.6rem;
        height: 0.4rem;
        border-radius: 0.2rem;
        float: right;
        margin: 0.2rem;
    }
    .swiper-wrapper img{
        width: 100%;
        display: block;
    }
    .detail .swiper-pagination-bullet{
        width: 0.12rem;
        height: 0.12rem;
        background: #777;
        border: none;
        opacity: 0.7;
    }
    .detail .swiper-pagination-bullet-active{
        background: #fff;
        opacity: 1;
    }
    .opt{
        opacity: 0;
    }
    .fade-enter,.fade-leave-to{
        opacity:0;
    }
    .fade-leave-active{
        transition:0.2s; 
    }
    .fade-enter-active{
        transition:2s;
    }
</style>
