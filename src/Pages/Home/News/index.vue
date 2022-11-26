<template>
    <div class="news">
        <div class="header">
            <header>
                新闻动态
                <LineBox :length="16"/>
            </header>
            <a @click="changeInfo">换一批
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4491 9.61957C9.34307 10.9992 7.71791 11.8333 5.95507 11.8333C3.16849 11.8333 0.775073 9.75199 0.166656 6.86566L1.32457 6.58332C1.81107 8.89041 3.72616 10.5558 5.95507 10.5558C7.40524 10.5558 8.73816 9.84999 9.62424 8.69149L8.33332 7.23957H11.8333V11.1771L10.4491 9.61957ZM1.55091 2.38041C2.65691 1.00082 4.28207 0.166656 6.04491 0.166656C8.83149 0.166656 11.2249 2.24799 11.8333 5.13432L10.6754 5.41666C10.1889 3.10957 8.27382 1.44416 6.04491 1.44416C4.59474 1.44416 3.26182 2.14999 2.37574 3.30849L3.66666 4.76041H0.166656V0.822906L1.55091 2.38041Z" fill="#999999"/>
              </svg>
            </a>
        </div>
        <div class="list">
            <ul>
                <li class="list-item" v-for="(item,index) in NewsList" :key="item.id">
                    <div class="title">
                        <a @mouseover="showAllTitle" target="_blank" :href="item.url">
                          {{index+1}}&nbsp;&nbsp;{{item.title}}
                        </a>
                    </div>
                    <div class="time">{{item.declareDate}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import LineBox from '@/Components/LineBox'
import {reqActivitiesInfo} from '@/api'
// import { Message } from 'element-ui'
export default{
    name:'news',
    components:{LineBox},
    data(){
      return{
        type:1,
        page:1,
        size:4,
        NewsList:[]
      }
    },
    created(){
      this.getNewsList()
    },
    methods:{
      //鼠标悬浮展示全部信息
      showAllTitle(event){
        // console.log('event',event.target);
        let title = event.target.innerText
        event.target.title = title.slice(2,title.length)
      },
    
      //获取新闻列表
      async getNewsList(){
        let {type,page,size} = this
        let result = await reqActivitiesInfo(type,page,size)
        // console.log(result);
        if(result.code == 200){
          if(result.data.list.length>0)
            this.NewsList = result.data.list
          else{
            this.$message({
                type:'warning',
                message:'诶呀！数据已经见底了！'
            })
          }

        }
        else{
            this.$message({
                type:'error',
                message:result.msg
            })
        }
      },
      //换一批
      changeInfo(){
        this.page++
        this.getNewsList()
      }
    }
}
</script>

<style scoped>

/* 一些样式 */
.news{
  width: 45%;
  padding: 20px;
}
.news .header{
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  width: 100%;
}

.header header{
  display: flex;
  font-weight: bolder;
  font-size: 26px;
  line-height: 50px;
  color:black;
}

.header a{
  font-size: 14px;
  color:gray;
  text-decoration: none;
  line-height: 48px;
  cursor: pointer;
}
/* 左边列表基本样式 */
.news .list{
  text-align: left;
}
.news .list .list-item{
  text-align: left;
  list-style-type:none;
  font-size: 16px;
  padding: 10px 0;
  cursor: pointer;
  /* line-height: 18px; */
  /* Letter-spacing:-0.5px; */
}
.news .list .list-item .title{
  color: black;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  display: inline-block;
}
.news .list .list-item .title a{
  /* margin-top: 15px; */
  display: inline-block;
  width: 450px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  color:black;
  line-height: 25px;
}


.news .list .list-item .time{
  color: #999999;
  font-size: 14px;
  margin-left: 22px;
  margin-top: -6px;
  line-height: 20px;
}
</style>