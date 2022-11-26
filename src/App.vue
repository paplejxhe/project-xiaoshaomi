<template>
  <div id="app">
    <Header />
    <NavTabs />
    <div ref="zhan" class="zhan"></div>
    <router-view></router-view>
    <Right_Bottom_Nav/>
    <!-- 底部 -->
    <Footer />
  </div>
</template>

<script>
import Header from './Pages/Header'
import NavTabs from './Components/NavTabs'
import Home from './Pages/Home'
import Footer from '@/Pages/Footer'
import Right_Bottom_Nav from '@/Pages/Right_Bottom_Nav'
export default {
  name: 'App',
  components: { NavTabs, Home, Header, Footer, Right_Bottom_Nav},
  mounted(){
    this.$router.push('/home')
    this.$bus.$on("zhanShow",this.zhanShow)
    this.$bus.$on("zhanHide",this.zhanHide)
  },
  methods:{
    zhanShow(){
      console.log('show');
      this.$refs.zhan.style.display = 'block'
    },
    zhanHide(){
      console.log('hide');
      this.$refs.zhan.style.display = 'none'
    }
  }
}
</script>

<style>
@font-face {
	font-family: 苹方黑体-准-简;
	/* src: url(../fonts/苹方黑体-准-简.ttf); */
  src: url(./assets/font/苹方黑体-准-简.ttf)
}

*{
  margin: 0;
  padding: 0;
  font-family: 苹方黑体-准-简;
}

#app{
  position: relative;
  text-align: center;
  width: 100%;
}

.zhan{
  width: 100px;
  height: 55px;
  display: none;
}

</style>
