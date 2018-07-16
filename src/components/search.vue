<template>
  <div>
      <div class="head">
          <div @click="$router.back(-1)">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzRCQTEyN0IzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzRCQTEyN0MzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NEJBMTI3OTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NEJBMTI3QTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PulQWg8AAAF/SURBVHja7Ni9SsRAEAfwnd1wldiIlqK1td4LiL7CFQaFCHZWgmVqH+GK4FejryA+gPcA9vZ2YnVkd5yAcBLOYJKZ3UWyRbIchPsxSzb/HUBEFfPQKvIxAP89MGn7wPHpuTLOtXoGMdl1WF4rUBug9cX25tpdnufRVHBssXxGhTu0Y6yjs1P6bRTLEo9Lp56ohquLasKcbk5sifvgAMBRRc5oWoau4FIcfRJOaPoQ+i1uwt2H3mZYcdxAdhwnUATHBRTDcQBFcX2B4rg+QC+4rsA9X7gunzpQ1j7S3QuudQWz7HKFjjBbNXNR4QhaYcMCi+LqkwxvtbSX0SWNJVGjAZhQ1T4W8Qk11e2GpkexRP5ZotVBHUmXWwlk122mCZnGAPwV+b3caQxAL0iOsCCK5IpbYkjOwCqC5I787EiJQxMrUurY2YScxNI8Woq0qKZtUpR062NmQB/+RALgqM3/+mgevRhI9imMvVIcewdtqtbH/M8BdOhRD8DA40uAAQDL2thNJDxLvAAAAABJRU5ErkJggg==">
          </div>
          <div>
              <input type="text" value="" placeholder="飞利浦京东超级品牌日，低至5折">
          </div>
          <div>
             <span>搜索</span>
          </div>
      </div>
      <div class="key">
          <div class="near">
              <h3>最近搜索</h3>
              <span>手机</span><span>男装</span>
          </div>
          <div class="hot">
              <h3>热门搜索</h3>
              <span>打印机</span><span>苏打水</span><span>苏泊尔无烟锅</span><span>养生壶</span><span>电压力锅</span><span>电脑桌</span>
              <span>进口牛奶</span><span>不锈钢蒸锅</span><span>游戏本</span>
          </div>
      </div>

  </div>
</template>

<script>

export default {
  name: 'search',
  data () {
    return {}
  },
  mounted(){

  }
}
</script>

<style scoped>
 .head{
     width: 100%;
     height: 1rem;
     background: linear-gradient(#ffffff,#dcdcdc);
     display: flex;
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
     border: 1px solid #a0a0a0;
     font-size: 0.26rem;
     padding-left: 0.8rem;
     padding-right: 0.2rem;
     background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAB/0lEQVRIiaXVTUhVQRjG8d+1Mm2TRWALoXLRh4i1yPbRIoNw0SJwGS1KKSqLCgJpU1BBughKaJ2LwEUGfe7aFQR9aUEUVOSuDyIuWlKLM2PT6VzJex848M4z5/3PzHvOzJSGh4dV0DL0YAc6sBLT+IDXuIURfK4EWFjgNeAIjqMp11eP9eHZiTO4gEGU86C6XHs1HuFsAbhITWGAhyG3IrwFD9CeeOPoR1tYUUOI+0NfVHvIbSmCN2A06SyjT1brQUxgKjwTwevAQdl3iJMbRWMefhidIZ5GNy5jJr/URDO4JKt9HKAzsGbhy3EySTqK+3NA87onK1PUicBUJ/vdloaOF2HG89WVkCuweiJ8e/LSVXOXopJmQm5UV4RvSsw7VYCjbifxxghvTsw3NcDT3OYIn0rMXzXA093+M8InE7O1BviqJJ6M8FeJ2VUDfGsSP4nw9CPuxYIqwCX0Ju27ET6Cr8Fsx/4q4H3+nEnfcT3CP+Fc8uJFbJsHeDPOJ+2hwJw9W4bwLMT1GMM+/x7JqUqynTiGJcF7LjuCpfAyduFjaDfKtvRTHMI6LMJirJXV9zGuyW6oqBZZieqhlLvm1uCGv8/0ajSO7vyy32ILTuHLf0C+Kd7VbRgoqmlZds214gBu4h1+yHbz++D1yq62DThWNJl8WWrRCpzGHrzE7t8cqmerthhqyQAAAABJRU5ErkJggg==);
     background-repeat: no-repeat;
     background-size: 0.24rem;
     background-position: 0.36rem;
     outline: none;
}
 .head div:nth-child(3){
     color: #fff;
     margin: 0.2rem 0.2rem 0.2rem 0rem;
}
 .head div:nth-child(1)>img{
     height: 0.5rem;
     margin: 0.24rem 0.04rem 0rem 0.16rem;
     opacity: 0.8;
}
 .head div:nth-child(3)>span{
     background-color: #e93b3d;
     display: block;
     width: 0.88rem;
     height: 0.6rem;
     line-height: 0.62rem;
     border-radius: 0.12rem;
     font-size: 0.28rem;
}
 .key{
     padding: 0.2rem;
     text-align: left;
}
 .key>div{
     margin-bottom: 0.4rem;
}
 .key div h3{
     margin: 0rem;
     font-size: 0.28rem;
     font-weight: 500;
     height: 0.6rem;
     line-height: 0.6rem;
}
 .key span{
     display: inline-block;
     font-size: 0.24rem;
     color: #6b6b6b;
     background-color: #eee;
     padding: 0.06rem 0.2rem;
     margin: 0.16rem 0.16rem 0rem 0rem;
}
 

</style>
