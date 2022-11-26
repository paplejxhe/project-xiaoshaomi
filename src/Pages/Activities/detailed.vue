<template>
    <div class="container">
        <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb> -->
        <span class="goback" @click="goback"> &lt;返回</span>
        <div class="title">
            {{activity.title}}
            <div class="tab">
                <el-tag type="warning" size="mini">线下活动</el-tag>
                <el-tag type="warning" size="mini">6-12岁</el-tag>
                <el-tag type="warning" size="mini">有证书</el-tag>
            </div>
            <div class="time">
                时间：{{activity.declareDate}}
            </div>
        </div>
        <div class="showInfo">
            <!-- src="@/assets/activity_detail.html" -->
            <!-- <iframe id="iFrame" src="" style="width:1000px;"  frameborder="0"></iframe> -->
            <iframe id="iFrame"  style="width:1000px;height: 1000px;"  frameborder="0"></iframe>
            <!-- <iframe src="http://localhost:8080/mmbiz_jpg/jDYq5lVPeMcLYiaJEf8Y6vf7zvER3zx2Fmltoo9NlRew9BYCfQ2Ttb5DWblqfsXOKaAaVIJ4eQicsibpeibwo1JbuA/640?wx_fmt=jpeg" style="width:500px;height: 300px;"  frameborder="0"></iframe> -->
            <img id="iFrame2" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// let Cors_Url = 'http://localhost:8081/'
export default {
    name:'ActivitiesDetailed',
    components:{},
    // props:[activity],
    data(){
        return {
            a:1,
            activity:{
                title:'',
                url:'',
                declareDate:'',
            },
            pageHtml:''
        }
    },
    // mounted(){
        // let url1 = 'http://localhost:8080/s/ecHQoUPEsmvZuB3GsxEE-g'
        // axios({
        //     url:url1,
        //     method:'get'
        // }).then((response)=>{
        //     console.log(response);
        //     if(response){
        //         let html = response.data;
        //         html = html.replace(/data-src/g, "src")
        //                 .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/g, '')
        //                 .replace(/https/g,'http');
        //         let html_src = 'data:text/html;charset=utf-8,' + html;
        //         let iframe = document.getElementById('iFrame');
        //         iframe.src = html_src;
        //     }
        // })
    // },
    mounted(){
        let {title,url,declareDate} = this.$route.query
        this.activity.title = title
        this.activity.url = url
        this.activity.declareDate = declareDate
        // this.getWeixinUrl()
        // console.log('this.activity',this.activity);
        nprogress.done()
        let that = this
        // let url1 = 'http://localhost:8081/https://mp.weixin.qq.com/s/ecHQoUPEsmvZuB3GsxEE-g'
        // let url1 = Cors_Url + url
        let url1 = 'http://150.158.57.252:18080/s/ecHQoUPEsmvZuB3GsxEE-g'
        let url2 = 'http://150.158.57.252:18080/mmbiz_jpg/jDYq5lVPeMcLYiaJEf8Y6vf7zvER3zx2Fmltoo9NlRew9BYCfQ2Ttb5DWblqfsXOKaAaVIJ4eQicsibpeibwo1JbuA/640?wx_fmt=jpeg'
        axios({
            url:url1,
            method:'get'
        }).then((response)=>{
            console.log(response);
            if(response){
                let html = response.data;
                html = html.replace(/data-src/g, "src")
                    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/g, '')
                    .replace(/https/g, 'http');
                //根据微信传回的html中的特殊路径data-src转为src等
                let html_src = html;
                let iframe = document.getElementById('iFrame');
                iframe.src = 'data:text/html;charset=utf-8,' + html_src;
                //这时候就成功拿到了微信公众号，这个html_src是个静态网页
                let doc = iframe.contentDocument || iframe.document;
                doc.write(html_src);
                // console.log('doc.getElementById("js_content")',doc.getElementById("js_content"));
                let imagesList = doc.getElementById("js_content").getElementsByTagName("img");
                console.log('imagesList',imagesList);
                // imagesList = imagesList.map(item=>{
                //      item.src = item.src.replace(/mmbiz.qpic.cn/g,'150.158.57.252:18080');
                //      return item
                // })
                for(let i=0;i<imagesList.length;i++){
                    imagesList[i].src = imagesList[i].src.replace(/mmbiz.qpic.cn/g,'150.158.57.252:18080');
                }
                console.log('改变后的imagesList',imagesList);
                doc.getElementById("js_content").style.visibility = "visible";
            }
        })

        /* axios({
            url:url2,
            method:'get',
            responseType: 'blob'
        }).then((response)=>{
            console.log('图片',response.data);
            let html = response.data;
            // let reader = new FileReader();
            // reader.readAsDataURL(html);
                // html = html.replace(/data-src/g, "src")
                //     .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/g, '')
                //     .replace(/https/g, 'http');
                // //根据微信传回的html中的特殊路径data-src转为src等
                // let html_src = html;
                let iframe2 = document.getElementById('iFrame2');
                
                iframe2.src = window.URL.createObjectURL(html);
        }) */
    },
    methods:{
        //www.baidu.com
        getWeixinUrl(){
            this.$http.get(this.activity.url).then(res =>{
                this.form=res;
                var iframeWin = this.$refs['report_id'].contentWindow;
                   //向子页面发送参数
                iframeWin.postMessage({
                    url: this.$route.query.url,
                    data:res //页面html代码res
                }, '*');
            });
        },
        goback(){
            console.log(1);
            this.$router.back(1)
        },
        showImg(index) {
            // let iframe = document.getElementById('iFrame');
            var parent = document.getElementById('js_content').getElementsByTagName("img")[index].parentElement;
            var child = document.getElementById('js_content').getElementsByTagName("img")[index];
            var url = child.getAttribute("data-src") + '&time=' + Math.random();
            var style = child.getAttribute("style");
            var parent_style = parent.getAttribute("style");
            var imgId = 'img_' + index;
            var frameid = 'frameimg' + Math.random();
            window.img = '<img id=' + imgId + ' src=\'' + url + '?' + Math.random() + '\' style = \'' + style +
                '\'/><script>window.onload = function() { parent.document.getElementById(\'' + frameid +
                '\').height = document.getElementById(\'' + imgId + '\').height+\'px\'; }<' + '/script>';
            return '<iframe id="' + frameid +
                '" src="javascript:parent.img;" frameBorder="0" scrolling="no" width="100%" style= "' + parent_style + '"></iframe>';
        }
    }
}
</script>

<style scoped>

.container{
    position: relative;
    width:1000px;
    margin: 60px auto;
    line-height: 40px;
    font-size: 20px;
}

.container .goback{
    display: block;
    position: absolute;
    top:-50px;
    font-size: 16px;
    color:gray;
    cursor: pointer;
}
.container .goback:hover{
    color:orange
}
.container span{
   margin: 5px;
}
.container .time{
    font-size: 16px;
    color:grey
}
</style>