<template>
    <div class="award_list">
        <div class="header">
            <header>赛事活动
                <LineBox :length="16"/>
            </header>
            <a @click="more">更多></a>
        </div>
        <div class="list">
            <ul>
                <li class="list-item" v-for="(item,index) in ActivitiesList" :key="item.id" @click="gotoDetail(index)">
                    <div class="title">
                        <span @mouseover="showAllTitle">
                          {{index+1}}&nbsp;
                        {{item.title}}
                        </span>
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
export default{
    name:'AwardList',
    components:{LineBox},
    data(){
      return{
        type:2,
        page:1,
        size:4,
        ActivitiesList:[]
      }
    },
    created(){
      this.getActivitiesList()
    },
    methods:{
      //获取赛事列表
      async getActivitiesList(){
        let {type,page,size} = this
        let result = await reqActivitiesInfo(type,page,size)
        // console.log(result);
        if(result.code == 200){
          if(result.data.list.length>0)
            this.ActivitiesList = result.data.list
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
      //更多
      more(){
        // this.$router.push('/activities')
        this.$bus.$emit('activities')
      },
      //点进去具体的信息
      gotoDetail(rows){
        let that = this
        window.open(that.ActivitiesList[rows].url)
      },
      //鼠标悬浮展示全部信息
      showAllTitle(event){
        // console.log('event',event.target);
        let title = event.target.innerText
        event.target.title = title.slice(2,title.length)
      },
    }
}
</script>

<style scoped>
.award_list{
  width: 45%;
  padding: 20px;
}
.award_list .header{
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  width: 100%;
}

.header header{
  line-height: 50px;

  display: flex;
  font-weight: bolder;
  font-size: 26px;
  color:black;
}
.header .lineBox{
    /* margin-left: 25px ; */
    display: flex;
    /* padding-left: 1px; */
}

.header a{
  font-size: 14px;
  color:gray;
  text-decoration: none;
  line-height: 48px;
  cursor: pointer;
}

.award_list .list .list-item{
  text-align: left;
  list-style-type:disc;
  font-size: 16px;
  list-style-type: none;
  padding: 10px 0;
  line-height: 20px;
  cursor: pointer;
  /* Letter-spacing:-0.5px; */
}
.award_list .list .list-item .title{
  color: black;
  margin-bottom: 1px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  line-height: 25px;
}
.award_list .list .list-item .title span{
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.award_list .list .list-item .time{
  color: #999999;
  font-size: 14px;
  margin-left: 22px;
  margin-top: -3px;
}
</style>