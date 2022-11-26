<template>
  <div class="breadcrumb">
      <el-breadcrumb class="app-breadcrumb" separator=">">
        <el-breadcrumb-item :to="{ path:'/' }"><a>首页</a></el-breadcrumb-item>
        <transition-group>
          <el-breadcrumb-item  v-for="item in levelList" :key="item.path">
            <a  @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
          </el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
  </div>
</template>

<script>

export default{
    data(){
        return {
            levelList:null
        }
    },
    created() {
       this.getBreadList()
    },
    watch:{
        $route(){
            this.getBreadList()
        }
    },
   methods:{
      getBreadList(){
         let matched=this.$route.matched.filter(item=>item.name)//$route.matched 将会是一个包含从上到下的所有对象 (副本)。
            //  const first=matched[0]
            //  if(first && first.name !=='home'){//$route.name当前路由名称；$route.redirectedFrom重定向来源的路由的名字
            //    matched=[{ path: '/home', meta: { title: '首页' }}].concat(matched)
            //  }
          this.levelList=matched
      },
      handleLink(item) {
        const { redirect, path } = item
        if (redirect) {
          this.$router.push(redirect)
        }
        else{
          this.$router.push(path)
        }
      },
   },
}
</script>

<style>
.el-breadcrumb__item{
  cursor: pointer;
}
.el-breadcrumb__item .el-breadcrumb__inner a {
  color:#999999;
  font-weight: 200;
}
.el-breadcrumb__item .el-breadcrumb__inner a:hover {
  color:#FF7A01;
}
</style>