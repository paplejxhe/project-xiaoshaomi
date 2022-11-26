<template>
    <div class="baoguo">
        <!-- <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/checkGrades' }">成绩查询</el-breadcrumb-item>
            <el-breadcrumb-item >查询结果</el-breadcrumb-item>
        </el-breadcrumb> -->

        <Hamburger class="breadcrumb" />
        <div class="container">
            <div class="some_info">
                <div class="title">
                    查询结果
                    <LineBox :length="32"/>
                </div>
                <div class="content">
                    <div class="name">
                        亲爱的小勺米同学：
                    </div>
                    <div class="detail">
                        恭喜你在“迎冬奥”-冰雪绘画展演活动中组织积极，获得优秀组织奖，特颁此证！以资鼓励！
                    </div>
                </div>
                <div class="foot">
                    <div class="name">
                        国家体育总局体育文化发展中心
                    </div>
                    <div class="time">
                        2022-11-10
                    </div>
                </div>
            </div>
            <div class="grades">
                <div class="name">小勺米</div>
                <img src="@/assets/images/awards/honor.jpg" />
                <el-button type="warning">下载证书</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import LineBox from '@/Components/LineBox'
import Hamburger from '@/Components/Hamburger'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
export default {
    name:'GradesDetailed',
    components:{ LineBox,Hamburger },
    // props:[activity],
    data(){
        return {
            a:1,
            activity:{}
        }
    },
    mounted(){
        nprogress.done()
        this.$message({
            type:'success',
            message:'查询成功！'
        })
        nprogress.done()
        console.log(1111);
    },
    methods:{

    }
}
</script>

<style scoped>
.baoguo{
    width:1000px;
    margin: 16px auto;
}
.baoguo .el-breadcrumb ::v-deep .el-breadcrumb__inner.is-link {
        color: #999999 !important;
}
.container{
    width:1000px;
    margin: 40px auto;
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
}
.container .some_info{
    width:1000px;
    /* display: flex; */
    /* margin: 60px auto; */
}
.container .some_info .content{
    margin-left: 10px;
    margin-top: 10px;
    font-size: 17px;
    font-weight: bold;
    /* margin-left: 10px; */
}
.container .some_info .content .name{
    text-align: left;
    /* width: 70%; */
    line-height: 30px;
}
.container .some_info .content .detail{
    margin-top: 5px;
    text-align: left;
    text-indent: 2em;
    line-height: 26px;
}
.container .some_info{
    text-align: left;
    width: 63%;
}
.container .grades{
    position: relative;
    width: 30%;
    display: flex;
    flex-direction: column;
    /* align-content: center; */
}
.container .grades .name{
    position: absolute;
    width: 30%;
    display: flex;
    left:98px;
    top:254px;
    flex-direction: column;
    font-size: 11px;
    /* align-content: center; */
}
.container .grades button,img{
    margin:0 auto;
}

  .container .grades button:hover {
    background: #FF7A01;
    color: white;
  }
  .container .grades button:focus {
    background: #FF7A01;
    color: white;
  }
.container .grades button{
    border-radius: 20px;
    width: 150px;
    background:white;
    color: #FF7A01;
    border: 2px solid #FF7A01;
    text-align: center;
    font-size: 14px;
}
.container .grades img{
    width: 300px;
    height: auto;
    right: 0;
    margin-bottom: 30px;
    /* color: */
}
.container .title{
    display: flex;
    /* justify-content: space-between; */
    font-size: 24px;
    font-weight: bold;
    line-height: 48px;
}
.container .content{
    font-size: 15px;
}

.container .some_info .foot{
    margin-top: 60px;
    /* margin-left: 10px; */
    float: right;
}
.container .some_info .foot .name{
    font-size: 17px;
    font-weight: bold;
}
.container .some_info .foot .time{
    margin-top: 5px;
    font-size: 14px;
    color: grey;
    text-align: right;
}
</style>