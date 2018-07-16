<template>
  <div id="over" :class="{'opt': isTrue}">
    <div class="head"><a class="" @click="$router.back(-1)"></a>我的京东 </div>
    <div class="content">
      <div class="userManage">
        <div class="bg">
          <div class="user_img"></div>
          <div class="user_msg">
            <p>zhanghongbin</p>
            <p>用户名：zhanghongbin</p>
            <p><span>银牌</span></p>
          </div>
          <div class="user_id">账号管理</div>
        </div>
      </div>
      <div class="dingdan sort">
        <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAElBMVEUAAADdnlnfn1rgo1zgoVvdnlgEImJPAAAABXRSTlMA43cZScMfxp4AAABASURBVCjPY6AbcAzFACIMopiCgQyhWAClgpQBrGYOKkFlI0zBIAYGVQzBYAYGU8KCCO2YFg0Cv2NLNtgTGL0AAN0trh/jrEP+AAAAAElFTkSuQmCC">
          <p>待付款</p>
        </div>
        <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAJ1BMVEUAAADenlnen1ngoVven1zen1neoFndnljdnlnhoFn/qoDdn1ndnlh7gNDGAAAADHRSTlMA5LJJPZJ789UrBr1euVjwAAAAhklEQVQoz2MgAzDLnIECYYQg4xkYOIgQ5DkDB5QLTm0H2YgquBRiI4og1x4IA0WQ9QwWwTnYBGOwCfZgE6zBJniGZEGUoIOxkAMZIYgESBHEBMKoggjbMQH9BGWwOckQm+OBQAYki2BAgA6QfQjBgAAfIPsIggEBbEB2AoIBBU6CKggGSQAA2PqdcWoc0kYAAAAASUVORK5CYII=">
          <p>待收货</p>
        </div>
        <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUxpcd2gV96eV96eWN2dVt2eWN2fWN2eWN2eWN2eWN2fV9yeWN6eWN2eV92fVt2eWDDrJAEAAAAPdFJOUwAMmNQjVYn068dEMrJuHD6sJo4AAAFDSURBVCjPfZO9TsMwEMePNqlEqEQiBB0BiQUxRKBuDEG8ARNDB8MTVJ0Y8wAMQbwAZYCVjIwgBkb6KChV2rRqdZwvbhLHqDf99fN9+XwGWGu7x1H2eKWzyxDJpkdVtofKbktmBSs4vijgOxZ2XzhGJcxWrjtYsVMF+6Sf6eRji8RERUuHBxtxuClVHt+QMoVgBm9SHTDscC+umMOTVAOGgguMmjIDx0jzWQ/sYZNFwlAG/eY1t0nOWEU6zFihDhHAiUFdZdRSgqrMIdJhRo2nZSHP2+dCPkFfz5mAHIDQYQoYjPNrcs67kK/50sG4oReigbTxxtIhjc4h934V8pCD5J/nEBibD9emM+OJrXDhmssg8NNcmxYuXHPBfDw3V5H6OzQX9hqnJwa0fhDPel6N2txSt0adb4LLeoaN16+wu+6j/AGtjnMRAn+p3gAAAABJRU5ErkJggg==">
          <p>退换/售后</p>
        </div>
        <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAGFBMVEUAAADqPD7xRETqPD7qPT/qOz/yQEDpOz2tEuliAAAAB3RSTlMA4wuDekkUL49mBwAAAElJREFUKM9jIAWwipcjgcIAsCBjOQoQAAuyowoWDGLBYqjnmNyRBMtgXlbHqnLQOJ40b6ogBBHeZMKqcnA5nsqCmIkWe/ImAQAA21zn+V6DoroAAAAASUVORK5CYII=">
          <p>全部订单</p>
        </div>
      </div>
      <div class="ticket sort">
        <div>
          <p>0张</p>
          <p>京东劵</p>
        </div>
        <div>
          <p>0元</p>
          <p>开通白条</p>
        </div>
        <div>
          <p>0个</p>
          <p>京豆</p>
        </div>
        <div>
          <p>1张</p>
          <p>礼品卡</p>
        </div>
        <div>
          <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURUxpceo8Puw8P+o8Pek7PupAQP9VVes9Pek7PZL1zNMAAAAIdFJOUwDkRI3sDAYZOjXkXgAAAGJJREFUKM9jYKAXUOzAAEIMEpiCjQwdWMBgEjQqgPgI1SsMmIIKWASbGdgMndEFmxiYOzoM0ATbGRg7OhzQBFsZWDAFsWpvZmAwcU4gxknYHd9hFIBFcHBEB9ZkgzWB0QsAAL9XEiK/rJfJAAAAAElFTkSuQmCC"></p>
          <p style="margin:-3px 0px 10px">全部资产</p>
        </div>
      </div>
      <div class="card sort">
        <div>
          <p>0</p>
          <p>关注的商品</p>
        </div>
        <div>
          <p>0</p>
          <p>关注的店铺</p>
        </div>
        <div>
          <p>0</p>
          <p>浏览记录</p>
        </div>
      </div>
      <div class="sort adv">
        <div><img src="https://wq.360buyimg.com/fd/h5/wxsq_dev/my/images/my_618_icon_8a4a3994.png"></div>
        <div>
          <p>我的618任务清单</p>
          <p>做任务赢免单， 优惠劵抽不停</p>
        </div>
      </div>
      <div class="other sort">
        <div><img src="https://img11.360buyimg.com/jdphoto/jfs/t12514/60/1318835455/1723/d6ae70f5/5a1e9e39Ndc5e9285.png">
          <p>用户福利</p>
        </div>
        <div><img src="https://img10.360buyimg.com/jdphoto/jfs/t12931/150/1327543095/1276/e9e67341/5a1e9ee2Nb5baf153.png">
          <p>京东火车票</p>
        </div>
        <div><img src="https://img13.360buyimg.com/jdphoto/jfs/t13864/56/1334572250/1269/e3b9acfa/5a1e9ef6Nb19cc444.png">
          <p>我的预约</p>
        </div>
        <div><img src="https://img11.360buyimg.com/jdphoto/jfs/t13612/121/1346421356/1355/9014e74f/5a1e9f1cNab886864.png">
          <p>应用推荐</p>
        </div>
        <div><img src="https://img12.360buyimg.com/jdphoto/jfs/t7711/100/3983515381/1466/1049e625/5a1e9f28N2460c691.png">
          <p>京东通信</p>
        </div>
        <div><img src="https://img11.360buyimg.com/jdphoto/jfs/t18940/299/476632277/2164/4453d9e4/5a813897N7c80dea2.png">
          <p>京东机票</p>
        </div>
        <div><img src="https://img11.360buyimg.com/jdphoto/jfs/t16390/157/2010422417/341/bb4c68c4/5a8138f2Nfd5de7b7.png">
          <p>京东酒店</p>
        </div>
      </div>
      <div class="sort pdt_list">
        <div class="title">为您推荐</div>
        <div class="pdt">
          <div>
            <img src="https://m.360buyimg.com/mobilecms/s289x289_jfs/t18430/354/2641821165/324735/911ae4cc/5b054439N66af99f8.jpg!q70.jpg.dpg">
            <p> 歌西（GIXE） 吉他38寸新手初学者入门民谣彩弦木吉它jita G-15C 升级版金属弦钮原木色 38寸 </p>
          </div>
        </div>
        <div class="pdt">
          <div>
            <img src="https://m.360buyimg.com/mobilecms/s289x289_jfs/t9142/232/657272799/210448/81eb2eaa/59acc14bN38619b92.jpg!q70.jpg.dpg">
            <p> 竹霖生吉他缺角民谣木吉它初学者入门乐器 38寸黑色 </p>
          </div>
        </div>
        <div class="pdt">
          <div>
            <img src="https://m.360buyimg.com/mobilecms/s289x289_jfs/t11794/185/1789852714/202493/c565581d/5a08f89bNc48dfeec.jpg!q70.jpg.dpg">
            <p>  Guitarist 21英寸23英寸桃花心木尤克里里小吉他UKULELE夏威夷乌克丽丽 21英寸单琴+琴包+教材书 </p>
          </div>
        </div>
        <div class="pdt">
          <div>
            <img src="https://m.360buyimg.com/mobilecms/s289x289_jfs/t193/97/998638322/90751/63ea184/539ff6e7N39d9218b.jpg!q70.jpg.dpg">
            <p>  歌西（GIXE） 吉他民谣木吉它40寸41寸初学者乐器guitar G-45C 原木色41寸 </p>
          </div>
        </div>
        <div class="pdt">
          <div>
            <img src="https://m.360buyimg.com/mobilecms/s289x289_jfs/t18886/360/2512354197/355682/df773087/5af81b67Nc86e7363.jpg!q70.jpg.dpg">
            <p>  安德鲁（ANDREW） 拇指琴卡林巴琴拇指钢琴17音非洲手指琴乐器桃花心木单板mbira 17音- 一鹿有你  桃花心单板 </p>
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
    data() {
      return {}
    },
    mounted() {
        setTimeout(function() {
             document.getElementById("over").style.height="auto";
        }, 1000);
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
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzRCQTEyN0IzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzRCQTEyN0MzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NEJBMTI3OTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NEJBMTI3QTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PulQWg8AAAF/SURBVHja7Ni9SsRAEAfwnd1wldiIlqK1td4LiL7CFQaFCHZWgmVqH+GK4FejryA+gPcA9vZ2YnVkd5yAcBLOYJKZ3UWyRbIchPsxSzb/HUBEFfPQKvIxAP89MGn7wPHpuTLOtXoGMdl1WF4rUBug9cX25tpdnufRVHBssXxGhTu0Y6yjs1P6bRTLEo9Lp56ohquLasKcbk5sifvgAMBRRc5oWoau4FIcfRJOaPoQ+i1uwt2H3mZYcdxAdhwnUATHBRTDcQBFcX2B4rg+QC+4rsA9X7gunzpQ1j7S3QuudQWz7HKFjjBbNXNR4QhaYcMCi+LqkwxvtbSX0SWNJVGjAZhQ1T4W8Qk11e2GpkexRP5ZotVBHUmXWwlk122mCZnGAPwV+b3caQxAL0iOsCCK5IpbYkjOwCqC5I787EiJQxMrUurY2YScxNI8Woq0qKZtUpR062NmQB/+RALgqM3/+mgevRhI9imMvVIcewdtqtbH/M8BdOhRD8DA40uAAQDL2thNJDxLvAAAAABJRU5ErkJggg==");
    height: 0.4rem;
    background-size: cover;
    position: absolute;
    top: 0.24rem;
    left: 0.2rem;
  }
  .content {
    background-color: #f9f5f5;
  }
  .userManage {
     padding: 0.2rem;
     background-color: #fff;
     margin-bottom: 0.3rem;
}
 .userManage .bg {
     position: relative;
     display: table;
     width: 100%;
     height: 2.3rem;
     border-radius: 0.1rem;
     box-shadow: -0.02rem 0.02rem 0.02rem #a0a0a0;
     background: linear-gradient(to right, rgb(255, 45, 45), rgba(249, 77, 77, 0.73));
}
 .userManage .bg div {
     display: table-cell;
     vertical-align: middle;
     text-align: left;
     font-size: 0.28rem;
     color: #fff;
}
 
  .user_img {
    width: 1.7rem;
    background-image: url(https://img11.360buyimg.com/jdphoto/s120x122_jfs/t5683/191/7076936752/5123/834e5571/596dd62bN7a8affc5.png);
    background-size: 1.2rem;
    background-repeat: no-repeat;
    background-position: center;
  }

  .user_msg p:nth-child(2) {
      padding: 0.1rem 0rem;
      font-size: 0.24rem;
      color: #e5e5e5;
  }
  .user_msg p span {
      font-size: 0.24rem;
      text-align: center;
      width: 0.8rem;
      background-color: #5655558a;
      border-radius: 1rem;
      display: inline-block;
      margin-top: 0.1rem;
  }
  .userManage .bg .user_id {
    position: absolute;
    right: 0.2rem;
    top: 0.2rem;
    color: #333;
    font-size: 0.24rem;
    padding-left: 0.4rem;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUxpcUwAAEwAAEwAAEwAAEwAAEwAAEwAAEwAAEwAAEwAAEwAAEwAABnnNZoAAAANdFJOUwCzqAoGdCKNSIFVOGwXIk7OAAAArklEQVQY02NgAAEjQWUGBFgoKAVjejswKwoKGbBsAXFYJqouFxQUrAqSdADyPAVhYAqQZwjnCQN5nHDeBCCPA85rAPK4gXQYQyqQ3ADkmQsKSgCpRkHBYgYGK0VBwQAgj1VQUGgxA5AjmADksQFpIQaQdrCTwAxUHqpKVFNQbUCzHdVlqK5G+AgUNq5w3gFwSOi0A5kVh2SgoQS0WZyBIQEWbAcFpZHCM1GwAEwDAOyzIho+HXTDAAAAAElFTkSuQmCC");
    background-repeat: no-repeat;
    background-size: 0.26rem;
    background-position: 0.06rem;
  }
  .sort {
      display: flex;
      flex-wrap: wrap;
      background-color: #fff;
      margin-bottom: 0.3rem;
  }
  .dingdan div {
      width: 25%;
      padding: 0.3rem 0rem;
      font-size: 0.24rem;
  }
  .dingdan div img {
      width: 0.4rem;
      margin-bottom: 0.06rem;
  }
  .ticket div {
      width: 20%;
      font-size: 0.24rem;
      padding: 0.1rem 0rem;
  }
  .ticket div p {
      margin: 0.16rem 0rem;
  }
  .ticket div p:nth-child(1) {
      color: #d40000;
      font-size: 0.28rem;
  }
  .ticket div img {
      width: 0.4rem;
  }
  .card div {
      width: 33.333%;
      font-size: 0.24rem;
      padding: 0.3rem 0rem;
  }
  .card div p:nth-child(1) {
      font-size: 0.32rem;
      font-weight: 600;
      margin-bottom: 0.1rem;
  }
  
  .adv {
    display: table;
    width: 100%;
    height: 1.5rem;
    background-image: url("https://img10.360buyimg.com/jdphoto/jfs/t21016/254/541217124/23877/43309e3f/5b0fd669N81dc8b4f.png");
    background-size: cover;
  }

 .adv img {
     height: 1rem;
 }
 .adv div {
     display: table-cell;
     vertical-align: middle;
     text-align: left;
 }
 .adv div:nth-child(1) {
     text-align: center;
}
 .adv div p:nth-child(2) {
     font-size: 0.24rem;
     color: #969595;
     margin-top: 0.1rem;
}
 .other div {
     width: 25%;
     font-size: 0.24rem;
     padding: 0.3rem 0rem 0rem;
}
 .other div img {
     width: 0.4rem;
}
 .other div p {
     margin: 0.1rem 0rem;
}
 .title {
     width: 100%;
     text-align: left;
     font-size: 0.28rem;
     line-height: 0.8rem;
     height: 0.8rem;
     padding-left: 0.3rem;
     background-color: #fff;
}
 .pdt {
     width: 50%;
     padding: 0.2rem 0.2rem 0rem;
     box-sizing: border-box;
     background-color: #f9f5f5;
}
 .pdt_list{
     background-color: #f9f5f5;
}
 .pdt:nth-child(even) {
     padding-right: 0.1rem;
}
 .pdt:nth-child(odd) {
     padding-left: 0.1rem;
}
 .pdt div {
     background-color: #fff;
     padding: 0.2rem 0rem 0.3rem;
}
 .pdt img {
     width: 100%;
}
 .pdt p {
     text-align: left;
     font-size: 0.26rem;
     font-weight: 600;
     margin: 0.1rem 0.2rem;
     display: -webkit-box;
     -webkit-box-orient: vertical;
     -webkit-line-clamp: 2;
     overflow: hidden;
}
#over{
    overflow: hidden;
    height: 100%;
}
</style>
