<template>
    <div class="background_info">
        <div class="AInfo">
            <div class="content">
                <div class="title">
                   活动背景与目的
                   <LineBox :length="19"/>
                </div>
                <div class="detail">
                    为响应体育强国建设，积极落实国家体育总局、教育部《关于深化体教融合 促进青少年健康发展的意见》而打造的“全国青少年儿童体育文化季”系列活动，旨在体育与教育之间搭建通道，将体育运动精神融合文化创意活动，以孩子们喜闻乐见，易于接受的形式，陪伴中国青少年儿童参与运动锻炼身体、接受体育终身教育的意识和能力，养成积极健康的生活状态
                </div>
            </div>
            <div class="image">
                    <img src="@/assets/images/background/background1.png" />
            </div>
        </div>
        <div class="AInfo">
            <div class="image">
                <img src="@/assets/images/background/background2.png" />
            </div>
            <div class="content right">
                <div class="title">
                    活动简介
                    <LineBox :length="21"/>
                </div>
                <div class="detail">
                    “全国青少年儿童体育文化季”系列活动主要包括以宣传运动技巧为主的各运动项目嘉年华和以讲好体育故事为主的体育文化艺术展演等；在时间上结合年度重点体育，在空间上融合地方特色文化，多角度、多类别、多年龄组以及多种形式的助力体育强国。
                </div>
            </div>
        </div>
        <div class="AInfo">
            <div class="content">
                <div class="title">
                    活动原则
                    <LineBox :length="22"/>
                </div>
                <div class="detail">
                    组委会及相关活动联合举办方承诺：全国青少年儿童体育文化季系列活动将严格按照国家相关法律法规要求，认真遵循国家体育总局体育文化发展中心指导，确保安全，注重实效。
                </div>
            </div>
            <div class="image">
                <img src="@/assets/images/background/background3.png" />
            </div>
        </div>
    </div>
</template>

<script>
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import LineBox from '@/Components/LineBox'
export default {
    name:'NavTabs',
    components:{LineBox},
    props:[],
    data(){
        return {
            
        }
    },
    mounted(){
        nprogress.done()
    }
}
</script>

<style scoped>
.background_info{
    width:1000px;
    margin: 70px auto;
    padding: 0;
    /* margin: 30px 0; */
}
 .AInfo{
    width: 100%;
    display: flex;
    justify-content: space-between;
 }
 .AInfo .content{
    width: 50%;
    text-align: left;
    margin-right: 40px;
    margin-top: 30px;
    /* margin: 0 30px; */
 }
 .AInfo .right {
    margin-left:40px ;
 }
 .AInfo .content .title{
    display: flex;
    font-size: 20px;
    font-weight: bolder;
    line-height: 45px;
    margin-bottom: 20px;
 }
 .AInfo .content .detail{
    font-size: 15px;
    line-height: 26px;
 }
 .AInfo .image{
    
    width: 50%;
 }
 .AInfo .image img{
    display: block;
    width: 500px;
    height: 289px;
 }
</style>