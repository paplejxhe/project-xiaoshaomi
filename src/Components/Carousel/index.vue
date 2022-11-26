<template>
        <!--轮播图-->
        <div class="swiper-list-container">
            <div class="sortList clearfix">
                <div class="center">
                    <!--banner轮播-->
                    <div class="swiper-container" id="mySwiper_vague">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img src="../../assets/images/home/banner1.jpg" />
                            </div>
                            <div class="swiper-slide">
                                <img src="../../assets/images/home/banner2.jpg" />
                            </div>
                            <div class="swiper-slide">
                                <img src="../../assets/images/home/banner3.jpg" />
                            </div>
                        </div>
                    </div>
                    <div class="swiper-container" style="  width: 100%;
                    z-index: 2;" id="mySwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img src="../../assets/images/home/banner1.jpg" />
                            </div>
                            <div class="swiper-slide">
                                <img src="../../assets/images/home/banner2.jpg" />
                            </div>
                            <div class="swiper-slide">
                                <img src="../../assets/images/home/banner3.jpg" />
                            </div>
                        </div>
                        <!-- 如果需要分页器 -->
                        <div class="swiper-pagination"></div>

                        <!-- 如果需要导航按钮 -->
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                    
                </div>
                <div class="bottom">
                        <span>阳光体育进校园 快乐运动促成长阳光体育进校园！</span>
                </div>
            </div>
        </div>
</template>

<script>
// import from '@/'
import '../../assets/css/swiper.min.css'
import '../../assets/js/swiper.min.js'
// import '../../assets/js/swiperController.js'
export default {
    name:'carousel',
    components:{},
    props:[],
    data(){
        return {
            a:1
        }
    },
    methods:{

    },
    mounted(){
        // 轮播图 切换图片-背景模糊
        var mySwiper_vague = new Swiper('#mySwiper_vague', {
            loop: true, // 循环模式选项
        });

        // 轮播图 切换图片
        var mySwiper = new Swiper('#mySwiper', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                clickable :true,
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // control:{mySwiper_vague}
        });
        mySwiper.controller.control = mySwiper_vague  
    }
}
</script>

<style>
/* 搞了半天，原来是因为加了scoped导致这里的css无法覆盖，乌鱼子 */
/* 修改轮播图上一张图片按钮的样式 在url最后一行 的%23后面接颜色rgb编码就可以改变颜色*/
.swiper-button-prev{
    background:url("../../assets/images/arrow_left.png") center center no-repeat;
    opacity: 0.8;
    width: 50px;
    height: 50px;
    left: 2%;
}
/* 修改轮播图下一张图片按钮的样式 在url最后一行 的%23后面接颜色rgb编码就可以改变颜色*/
.swiper-button-next{
  background:url("../../assets/images/arrow_right.png") center center no-repeat;
  opacity: 0.8;
  width: 50px;
  height: 50px;
  right: 2%;
  /* z-index:1000; */
  /* border: 6px solid white;
  border-radius: 50px; */
}
/* 修改轮播图未被激活的工程小圆点的样式 */
.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
    /* position: absolute; */
    /* bottom: ; */
    width: 334px;
    /* width: 150px; */
    height: 8px;
    border-radius: 0px;
    background-color: white;
    opacity: 1;
    z-index: 10 !important;
    margin: 0;
    /* bottom: 0; */
}
/* 修改轮播图已被激活的工程小圆点的样式 */
/* 这里是设置轮播图下面工程点的样式 */
/* 后面如果图片要调高度的话工程点的高度直接在这里调就好 */
.swiper-pagination{
    position: absolute;
    top:512px;
    width: 1002px !important;
    background: white;
}
.swiper-pagination .swiper-pagination-bullet-active {
    /* position: absolute; */
    width: 334px !important;
    /* width: 150px; */
    height: 4px;
    /* border-radius: 2px; */
    opacity: 1 !important;
    background-color: orange !important;
    z-index: 10 !important;
    margin: 0;
}
 .swiper-list-container {
  /* position: relative; */
  /* top:70px; */
  margin: 0 auto ;
  width: 1000px;
  /* margin-top: 70px; */
  height: 526px;
  text-align: center;
  overflow: hidden;
  /* transform: translateY(-10px); */
  /* background-color: #eee; */
}
 .swiper-list-container .sortList {
  width: 100%;
  height: 100%;
  text-align: center;
}
 .swiper-list-container .sortList .center {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  float: left;
  text-align: center;
}

.swiper-list-container .sortList .center #mySwiper img{
  width: 1000px;
  height: 526px;
}

#mySwiper_vague :after {
    /* position: absolute; */
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow:0 0 50px 30px #ffffff inset ;
}

 #mySwiper_vague{
  position: absolute;
  left: 0;
  width: 100%;
  box-shadow:0 0 50px 30px #ffffff inset;
}
 #mySwiper_vague img{
  width: 100%;
  display: block;
  height: 526px;
  box-shadow:0 0 50px 30px #ffffff inset;
  /* filter: blur(100px); */
  filter:opacity(0.4) blur(10px);
}


/* 后面如果图片要调高度的话工程点的高度直接在这里调就好 */
.swiper-list-container .sortList .bottom {
    box-sizing: border-box;
    position: absolute;
    /* margin: 0 auto; */
    /* text-align: center; */
    width: 1000px;
    height: 84px;
    /* left: 50%; */
    /* transform: translateX(-467px); */
    top: 626px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.9) 35.53%, #FFFFFF 100%);
    z-index:2;
    /* opacity: 0.7; */
    padding-top: 25px;
    padding-left: 50px;
    text-align: left;
}
.swiper-list-container .sortList .bottom span{
    font-weight: 400;
    font-size: 20px;
    line-height: 35px;
}
</style>