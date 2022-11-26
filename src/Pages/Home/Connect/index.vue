<template>
    <!-- 底部 -->
    <div class="footer">
        <div class="footer-container">
            <div class="footerList">
                <div class="footerItem info">
                    <h4>联系我们</h4>
                    <div class="detail_info">
                      <img src="@/assets/images/logo_notext.png"/>
                      <div>
                        <h5>全国青少年儿童体育文化季组委会</h5>
                        <ul>
                            <li>联系人：朱老师</li>
                            <li>电话：18621265606</li>
                            <li>邮箱：18621265606@163.com</li>
                            <li>地址：北京市东城区光明路13号</li>
                        </ul>
                      </div>
                    </div>
                </div>
                
                <div class="footerItem row">
                    <img src="@/assets/images/Offical.jpg">
                    <p>微信公众号</p>
                </div>
                <div class="footerItem row">
                    <img src="@/assets/images/Little_App.jpg">
                    <p>小程序码</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import nprogress from 'nprogress'
  import 'nprogress/nprogress.css'
export default {
    name:'Connect',
    components:{},
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
 .footer {
    margin-top: 50px;
  background-color: white;
  border-bottom: 6px solid #FF7A01;
}
 .footer .footer-container {
  width: 1000px;
  height: 400px;
  margin: 0 auto;
  padding: 0;
}
 .footer .footer-container .footerList {
  padding: 20px 0;
  overflow: hidden;
  /* padding-left: 40px; */
  display: flex;
  justify-content: space-between;
}
 .footer .footer-container .footerList .footerItem {
  width: 20%;
  float: left;
  text-align: left;
  align-items: center;
}
 .footer .footer-container .footerList .info {
  width: 60%;
  float: left;
}
 .footer .footer-container .footerList .footerItem h4 {
  font-size: 26px;
  margin-bottom: 60px;
}

.footer .footer-container .footerList .footerItem h5 {
  font-size: 21px;
  margin-bottom: 40px;
}
/* 这个footerItemCon主要控制如果出现多个数据需要分列展示的话就是用这个属性 */
 .footer .footer-container .footerList .row{
  text-align: center;
  font-size: 16px;
}
 .footer .footer-container .footerList .footerItem .footerItemCon ul{
  margin-left: 15px;
}

 .footer .footer-container .footerList .footerItem li {
  line-height: 36px;
  font-size: 18px;
  margin-top: 5px;
  list-style: none;
}
.footer .footer-container .footerList .detail_info{
  display: flex;
}
.footer .footer-container .footerList .detail_info img{
  width: 150px;
  height: 150px;
  margin-top:70px;
  margin-right: 30px;
}
 .footer .footer-container .footerList  img {
  width: 110px;
  height: 110px;
  text-align: center;
  margin-top: 180px;
}
</style>