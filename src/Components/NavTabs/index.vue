<template>
    <!-- 分类导航 -->
    <div class="box" >
      <el-menu  
        :default-active="activeIndex2" 
        class="el-menu-demo menu"
        mode="horizontal" 
        @select="handleSelect"
        active-text-color="white"
        text-color="white"
        ref="container"
        router
      >
      <el-menu-item :index="menu.path" v-for="(menu) in menuList" :key="menu.path">{{menu.title}}<span></span></el-menu-item>
        <!-- <el-menu-item index="0">首页<span class="active"></span></el-menu-item>
        <el-menu-item index="1">项目背景<span ></span></el-menu-item>
        <el-menu-item index="2">赛事活动<span ></span></el-menu-item>
        <el-menu-item index="3">成绩查询<span ></span></el-menu-item>
        <el-menu-item index="4">联系我们<span ></span></el-menu-item> -->
      </el-menu>
    </div>
    
</template>

<script>
// import 
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
export default {
    name:'Nav-Tabs',
    components:{},
    props:[],
    watch:{
      //监听route，如果变化的话就跳转相应的导航栏
      $route(to,from){
        console.log(to);
        // console.log(to.path);
        let ToPath = to.path
        //如果是孙子路由的话，就展示父亲的就好了
        if(to.meta.isChildren){
          ToPath = '/' + ToPath.split('/')[1]
        }
        console.log(ToPath);
        this.activeIndex2 = ToPath
        this.arrowActive(ToPath)
      }
    },
    data(){
      return {
          preIndex : 0,
          nowIndex : 0,
          menuList:[
            {
              path:'/home',
              title:'首页',
            },
            {
              path:'/background',
              title:'项目背景',
            },
            {
              path:'/activities',
              title:'赛事活动',
            },
            {
              path:'/checkGrades',
              title:'成绩查询',
            },
            {
              path:'/connect',
              title:'联系我们',
            },
          ],
          activeIndex2: '/home'
      }
    },
    mounted(){
      let arrow = document.querySelector(".el-menu-item >span");
      console.log(arrow);
      arrow.className = 'active'

      // let that = this
      window.onscroll = function () {
            // 滚动时当前位置距顶部的距离
            let topScroll = document.documentElement.scrollTop;
            // 获取导航id
            let nav = document.querySelector('.el-menu-demo')
            // console.log(topScroll);
            // 滚动距离大于多少时执行下面事件
            if (topScroll > 132) {
                // 到了那个距离相当于给了导航定位
                nav.style.position = 'fixed';
                nav.style.top = '0';
            } else {
                // 小于的时候让他恢复原状
                nav.style = ''
            }
        }
    },
    methods:{
      handleSelect(key, keyPath) {
        // let arr = ['/home','/background','/activities',]
        this.arrowActive(key)
        nprogress.start()
        console.log(key, keyPath);
      },
      arrowActive(key){
        let arr = this.menuList.map(item=>{
          return item.path
        })
        this.nowIndex = arr.indexOf(key)
        // console.log(this.nowIndex);
        let arrows = document.querySelectorAll(".el-menu-item >span");
        // console.log(arrows);
        arrows[this.preIndex].className = ''
        arrows[this.nowIndex].className = 'active'
        this.preIndex = this.nowIndex
      }
    }
}
</script>

<style scoped>
.box{
  width: 100% !important;
  position: relative;
  text-align:center;
  z-index:10;
  height:55px !important;
  /* z-index:90; */
}
.menu{
  display: flex;
  width: 1000px !important;
  text-align: center;
  /* margin: 0 auto; */
  /* 水平居中 */
  justify-content: center; 
  height: 55px !important;
  text-align: center;
  background: rgb(255,122,1);
  color: white;
  left: 50%;
  transform: translateX(-500px)
  /* text-decoration: none; */
}
/* //子节点选中样式(前面只有一级，后面子级) */
.el-menu-item{
  width: 21%;
  display:flex;
  flex-direction: column;
  border-bottom: none !important;
  height: 55px;
  line-height: 55px;
  margin-bottom: 0;
  font-size: 18px;
  text-decoration: none !important;
}
    .el-menu-item.is-active,.el-submenu .el-menu-item.is-active {
        height: 55px;
        background-color: orange !important;
    }
    /* //子节点选中鼠标移入样式 */
    .el-menu-item.is-active:hover,.el-submenu .el-menu-item:hover {
        /* background-color: rgb(251, 199, 103) !important; */
        background-color: orange !important;
        height: 55px;

    }
    /* //子节点鼠标移入样式 */
    .el-menu-item:hover {
        /* background-color: #ccc; */
        background-color: rgb(251, 199, 103) !important;
        height: 55px;
    }
    /* 消除导航栏底部的白线 */
    .el-menu.el-menu--horizontal{
      border: none;
    }




.type-nav {
  /* border-bottom: 2px solid orange; */
  margin:0 auto ;
  z-index:99;
  top:160px;
  background-color: white;
  width: 100%;
  text-align: center;
}

/* .type-nav-active{
  position : fixed;
  top : 0;
  z-index: 99;
}
.arrow-active{
  position:fixed;
  top : 65px;
  z-index: 99;
} */

.active{
    width: 0;
    height: 0;
    /* border: 20px solid; */
    border-top:10px solid rgb(255,168,75);
    border-right:25px solid transparent;
    border-bottom:0px solid transparent;
    border-left:25px solid transparent;
    /* border-color:  transparent transparent ; */
    left: 100px;
    z-index: 3;
    margin: 0 auto ;
}


</style>