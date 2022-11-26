<template>
    <div>
        <!-- --轮播图-- -->
        <Carousel/>
        <!-- 新闻&名单 -->
        <div class="list-container">
            <div class="content">
                <AwardList/>
                <News/>
            </div>
        </div>
        <!-- 联系我们 -->
        <Connect/>
        <!-- 合作单位 -->
        <Combine/>
    </div>
</template>

<script>
import Carousel from '@/Components/Carousel'
import News from './News'
import AwardList from './AwardList/index'
import Footer from '@/Pages/Footer'
import Connect from './Connect'
import Combine from './Combine'

export default {
    name:'NavTabs',
    components:{ Carousel,News,AwardList,Footer, Connect, Combine },
    props:[],
    data(){
        return{
            queryParams:{
                page:1,
                size:5,
                type:1
            },
            newsList:[],
        }
    },
    created(){
        this.$emit('home')
    },
    
    methods:{
        
    }
}
</script>

<style>
 .list-container{
  width: 1000px;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  margin-top: 25px;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
}

 .list-container .content{
    margin: 0 auto ;
  display: flex;
  justify-content: space-between;
}

</style>