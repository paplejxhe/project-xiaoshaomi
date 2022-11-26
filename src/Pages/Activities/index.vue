<template>
    <div class="container">
        <div class="imgBox">
            <img src="@/assets/images/activities/background.png" />
        </div>
        <div class="activity_list">
            <ul>
                <li v-for="(item,index) in activitiesList" :key="item.id" @click="gotoDetail(index)">
                        <div class="item">
                        <div class="title">
                            {{item.title}}
                        </div>
                        <div class="content">
                            <div class="tab">
                                <el-tag type="warning" size="mini">线下活动</el-tag>
                                <el-tag type="warning" size="mini">6-12岁</el-tag>
                                <el-tag type="warning" size="mini">有证书</el-tag>
                            </div>
                            <div class="time">
                                时间：{{item.declareDate}}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="more">
            <button @click="more">更多&nbsp;<svg t="1668762878605" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="999" width="12" height="12"><path d="M830.24 340.688l11.328 11.312a16 16 0 0 1 0 22.624L530.448 685.76a16 16 0 0 1-22.64 0L196.688 374.624a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l288.496 288.496 288.512-288.496a16 16 0 0 1 22.624 0z" p-id="1000" fill="#999999"></path></svg><span></span></button>
        </div>
        <!-- <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="activitiesList.length">
        </el-pagination> -->
    </div>
</template>

<script>
import {reqActivitiesInfo} from '@/api'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
export default {
    name:'Activities',
    components:{},
    props:[],
    data(){
        return {
            queryParams:{
                page:1,
                size:5,
                type:2
            },
            activitiesList:[],
        }
    },
    mounted(){
        this.getActivitiesList()
    },
    methods:{
        async getActivitiesList(){
            let {type,page,size} = this.queryParams
            let result = await reqActivitiesInfo(type,page,size)
            // console.log(result);
            if(result.code == 200){
                if(this.activitiesList.length < result.data.list.length){
                    this.activitiesList = result.data.list
                }
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
        gotoDetail(rows){
            let that = this
            window.open(that.activitiesList[rows].url)
        },
        more(){
            this.queryParams.size += 5
            this.getActivitiesList()
        }
    }
}
</script>

<style scoped>
.container{
    width:1000px;
    margin: 0 auto;
}
.container .imgBox{
    width:1000px;
    height: 300px;
}
.container .imgBox img{
    width:1000px;
    height: 300px;
}

.container .activity_list{
    width:1000px;
    margin: 20px auto;
}
.container .activity_list li{
    border-bottom: 1px solid #ddd;
    /* width: 80%;
    margin: 0 auto; */
    text-align: left;
    list-style: none;
    cursor: pointer;
}
.container .activity_list li a{
    display: block;
}

.container .activity_list .item  {
    margin-left: 20px;
    font-size: 14px;
}
.container .activity_list .item .title {
    /* font-weight: bold; */
    font-size: 17px;
    line-height: 48px;
    margin-top: 10px;
}
.container .activity_list .item .tab{
    margin-bottom: 30px;
    /* margin-top: -5px; */
}
.container .activity_list .item .tab span{
    /* padding: 10px; */
    margin-right: 5px;
}
.container .activity_list .item .time {
    /* font-weight: bold; */
    color: rgb(188, 186, 186);
    font-size: 14px;
    margin: 20px 0;
}
.more{
    position: relative;
    margin: 80px 0;
}
.more button{
    cursor: pointer;
    width:80px;
    height: 36px;
    font-size: 16px;
    border-radius: 18px;
    background-color: white;
    border: 2px solid #F5F5F5;
    color:#999999;
}
.more svg{
    margin-top: 6px;
}
/* .more span{
    position: absolute;
    left: 75%;
    right: -3.75%;
    top: 37.5%;
    bottom: 16.67%;

    background: #999999;
    transform: rotate(90deg);
} */
</style>