<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide">Slide 1</div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>
          </div>

      </div>
    
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    mounted(){
      new Swiper ('.swiper-container', {
        loop: true
      })        
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
 .swiper-container {
        width: 500px;
        height: 300px;
        margin: 20px auto;
    }
</style>
