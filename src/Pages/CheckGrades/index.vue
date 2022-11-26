<template>
  <div>
    <div v-if="!showDetail">
      <el-row class="CheckForm" :gutter="20">
        <el-col :span="12">
          <div class="check_title">
            <h2>成绩查询</h2>
            <lineBox :length="19"/>
          </div>
            
          <!-- <h2 class="check_title">成绩查询</h2> -->
            <el-form :model="activityForm" :rules="rules" ref="activityForm" label-width="120px" :hide-required-asterisk="true">
                <el-form-item label="活动名称" class="text_box" prop="activityName">
                    <el-input class="text-input" v-model="activityForm.activityName" placeholder="请输入赛事活动名称"></el-input>
                </el-form-item>
                <el-form-item label="参赛年份" class="text_box" prop="year" >
                  <el-date-picker
                    v-model="activityForm.year"
                    type="year"
                    placeholder="选择年">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="选手姓名" class="text_box" prop="name">
                    <el-input v-model="activityForm.name" placeholder="请输入选手姓名"></el-input>
                </el-form-item>
                <el-form-item label="身份证号" class="text_box" prop="identity" required>
                    <el-input v-model="activityForm.identity" placeholder="请输入选手身份证号"></el-input>
                </el-form-item>
                <el-form-item label="验证码" class="text_box"  prop="verifiedCode" >
                  <div class="yanzhengma_box">
                     <el-input v-model="activityForm.verifiedCode" placeholder="请输入验证码" required ></el-input>
                    <!-- <img src="@/assets/images/"/> -->
                    <canvas class="codeCanvas" ref="checkCode" @click="getCode" title="看不清？换一张"></canvas>
                  </div>
                </el-form-item>
                <div class="change" @click="getCode">换一换</div>
                <el-button class="set_button" @click="checkForm('activityForm')">立即查询</el-button>
            </el-form>
        </el-col>
        <el-col :span="12">
          <div class="check-grades-container">
            <div class="detail">
              <span class="check-grades-title">查询说明：</span>
              <ul>
                <li>输入正确的活动赛事名称；</li>
                <li>输入真实的姓名及身份证号；</li>
                <li>如果输入信息正确，点击查询后对应的考试成绩将在下个页面展示。</li>
                <li>此证书不能作为升学凭证，请各位家长理性看待；</li>
                <li>如有疑问请联系我们；</li>
              </ul>
            </div>
            <div class="info">
              <div class="footerItem row">
                    <img src="@/assets/images/Little_App.jpg">
                    <p>小程序码</p>
                </div>
                <div class="footerItem row">
                    <img src="@/assets/images/Offical.jpg">
                    <p>微信公众号</p>
                </div>
            </div>
          </div>
        </el-col>
    </el-row>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
    <!-- <router-view></router-view> -->
  </div>
    
</template>
  <script>
  import nprogress from 'nprogress'
  import 'nprogress/nprogress.css'
  import lineBox from '@/Components/LineBox'
    export default {
      components:{lineBox},
      watch:{
        // 441502200012120245
        $route(to,from){
          if(from.path == '/checkGrades/detailed')
            this.showDetail = false
            this.reset()
          },
          showDetail(newV,oldV){
            //要加这个钩子，需要等待页面渲染完毕，不然不会显示验证码
            this.$nextTick(()=>{
              this.getCode()
            })
          }
        },
      data() {
        return {
          activityForm: {
            activityName:'',
            activityYear:'',
            name:'',
            identity:'',
            verifiedCode:''
          },
          rules: {
            activityName: [
              { required: true, type: 'string', message: '请输入活动名称', trigger: 'blur' },
              // { min: 1, max: 10,trigger: 'change' }
            ],
            year: [
              { required: true, message: '请选择参赛年份', trigger: 'blur' }
            ],
            name: [
              { type: 'string', required: true, message: '请输入选手姓名', trigger: 'blur' },
              // { min: 1, max: 10,trigger: 'change' }
            ],
            identity: [
              { type: 'string',required: true, message: '请填写证件号码', trigger: 'blur' },
              {
                // pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
                // message: '证件号码格式有误！',
                // trigger: 'blur'
              }
            ],
            verifiedCode: [
              { type: 'string', required: true, message: '请输入验证码', trigger: 'blur' },
              // { min: 1, max: 6,trigger: 'change' }
            ]
          },
          showDetail:false,
          // 验证码
          inputCode: '', // 输入的值
          checkCode: '', // 图片验证码的值
          expressValue: '', // 表达式的值
          // canvas各种设置
          cvs: {
              w: 120, // 给出默认宽度  宽度会在图片绘制时根据长度更改
              h: 30, // 高 与input保持一致
              fontSize: 20, // 字体大小
              str: '+-*', // 符号生成范围
              line: 3 // 噪音线个数
          }
        };
      },
      mounted(){
        this.getCode()
        nprogress.done()
      },
      methods: {
        checkForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            //  441502200012120245
            
            
            if(this.activityForm.verifiedCode == this.expressValue){
              //这里的if以后可以写对接接口的东西
              if(this.activityForm.activityName == '1'){
                let errmsg = '抱歉!我们没有查找到相关信息,请重新确认一下信息是否填写正确'
                this.$confirm(`${errmsg}`, '查询失败', {
                    confirmButtonText: '确定',
                    confirmButtonClass: 'btnFalses',
                    showCancelButton: false,
                    center: true,
                  }).then(() => {
                    this.getCode()
                  }).catch(() => {
                        
                  });
              }
              else{
                this.showDetail = true
                nprogress.start()
                this.$router.push('/checkGrades/detailed')
                // this.showDetail = false
              }
              
            }
            else{
              this.getCode()
              this.$message({
                type:'error',
                message:'验证码填写错误'
              })
              this.getCode()
            }
          }
        });
        },
        // canvas
        // 随机整数生成器，范围[0, max)
          rInt(max) {
            return Math.floor(Math.random() * 100000 % max);
          },
          // 生成随机表达式
          rCode() {
            let b = this.rInt(10);
            let a = this.rInt(20);
            let op = this.cvs.str.charAt(this.rInt(this.cvs.str.length));
            // 表达式
            let code = `${a}${op}${b}=`;
            this.checkCode = code;
            // 表达式的值
            // eslint-disable-next-line no-eval
            this.expressValue = eval(code.substr(0, code.length - 1));
            return code;
          },
          // 生成随机颜色 rgba格式
          rColor() {
            let a = ((Math.random() * 5 + 5) / 10).toFixed(2);
            return `rgba(${this.rInt(256)}, ${this.rInt(256)}, ${this.rInt(256)}, ${a})`;
          },
          // 验证码图片绘制
          drawCode(domCvs) {
            let _this = this;
            // 随机表达式
            let checkCode = this.rCode();
            // 宽设置
            // this.cvs.w = 10 + this.cvs.fontSize * this.checkCode.length;
          
            // 判断是否支持canvas
            if (domCvs !== null && domCvs.getContext && domCvs.getContext('2d')) {
                // 设置显示区域大小
                domCvs.style.width = _this.cvs.w;
                // domCvs.style.height = '80px';
                // 设置画板宽高
                domCvs.setAttribute('width', _this.cvs.w);
                domCvs.setAttribute('height', 40);
                // 画笔
                let pen = domCvs.getContext('2d');
                // 背景: 颜色  区域
                pen.fillStyle = '#eee';
                pen.fillRect(0, 0, _this.cvs.w, 40);
                // 水平线位置
                pen.textBaseline = 'middle'; // top middle bottom
                // 内容
                for (let i = 0; i < _this.checkCode.length; i ++) {
                    pen.fillStyle = _this.rColor(); // 随机颜色
                    pen.font = `bold ${_this.cvs.fontSize}px 微软雅黑`; // 字体设置
                    // 字符绘制: (字符, X坐标, Y坐标)
                    pen.fillText(checkCode.charAt(i), 10 + _this.cvs.fontSize * i, 20 + _this.rInt(10));
                }
                // 噪音线
                for (let i = 0; i < _this.cvs.line; i ++) {
                    // 起点
                    pen.moveTo(_this.rInt(_this.cvs.w) / 2, _this.rInt(_this.cvs.h) + 10);
                    // 终点
                    pen.lineTo(_this.rInt(_this.cvs.w), _this.rInt(_this.cvs.h) + 10);
                    // 颜色
                    pen.strokeStyle = _this.rColor();
                    // 粗细
                    pen.lineWidth = '2';
                    // 绘制
                    pen.stroke();
                }
            } else {
                this.$message.error('不支持验证码格式，请升级或更换浏览器重试');
            }
          },
          // 点击时刷新二维码
          getCode() {
            let domCvs = this.$refs.checkCode;
            this.drawCode(domCvs);
          },
          // 点击登录时做的校验
          
        // // 登录
        // login() {
        // // 请求登录接口
        // }

        //重置表单
        reset(){
          this.activityForm= {
            activityName:'',
            activityYear:'',
            name:'',
            identity:'',
            verifiedCode:''
          }
        },
      }
    }
  </script>

  <style>
  .CheckForm{
    width: 1000px;
    padding:60px 0;
    margin: 0 auto;
    /* text-align: center; */
    left: 50%;
    transform: translateX(-500px);
  }
  .text_box{
    position: relative;
  }
  .text_box .el-form-item__label{
    font-size: 18px;
    line-height: 40px;
    /* margin-top: 10px; */
  }
  .text_box .el-input__inner{
    height: 45px !important;
    font-size: 18px !important;
    background: #F8F8F8 !important;
    border: none !important;
  }
  .text_box .el-input{
    width: 87%;
    float: left;
    /* font-weight: 100; */
    /* padding-left: 20px; */
    /* line-height: 40px; */
  }
  .text_box .el-input ::-webkit-input-placeholder {
    /* color: red; */
    font-size: 16px;
    color: #dad9d9;
}

  .text_box .el-form-item.is-error .el-input__inner {
  		border-color: #889aa4;
      
	}
	.text_box  .el-form-item.is-error .el-input__validateIcon {
  		color: #889aa4;
	}
	.text_box  .el-form-item__error{
        color: orange;
        margin-left: 10px;
        font-size: 12px;
  }
  .yanzhengma_box{
    display: flex;
    margin-left: 0;
  }
  .yanzhengma_box .el-form-item__content{
    padding: 0;
    margin-left: 0;
  }
  .yanzhengma_box .el-form-item__label{
    font-size: 18px;
    line-height: 40px;
    width: 100px;
    /* margin-top: 10px; */
  }
  .yanzhengma_box .el-input__inner{
    height: 45px !important;
    font-size: 18px !important;
    background: #F8F8F8 !important;
    border: none !important;
    /* margin-top: 10px; */
    /* line-height: 40px; */
    /* padding-left: 20px; */
  }
  .yanzhengma_box .el-input{
    width: 50%;
    margin-right: 10px;
    /* padding-left: 20px; */
    /* line-height: 40px; */
  }
  .yanzhengma_box .el-form-item.is-error .el-input__inner {
  		border-color: #889aa4;
	}
	.yanzhengma_box  .el-form-item.is-error .el-input__validateIcon {
  		color: #889aa4;
	}
	.yanzhengma_box  .el-form-item__error{
        color: red;
        margin-left: 10px;
        font-size: 14px;
  }
  .codeCanvas{
    cursor: pointer;
    width: 120px;
    height: 43px;
  }
  .change{
    position: absolute;
    top:68%;
    left:45%;
    color:#FF7A01 ;
    cursor: pointer;
  }
  
  .set_button {
    margin-top: 25px;
    background: white;
    color: #FF7A01;
    width: 400px;
    height: 60px;
    border: 2px solid #FF7A01;
    border-radius: 8px;
    font-size: 22px;
    margin-right: 20px;
  }
  .set_button:hover {
    background: #FF7A01;
    color: white;
  }
  .set_button:focus {
    background: #FF7A01;
    color: white;
  }
  .check_title{
    /* position: relative; */
    text-align: left;
    margin-bottom: 30px;
    margin-left: 30px;
    font-size: 19px;
    line-height: 49px;
    width: 600px;
    display: flex;
  }
  .check-grades-container{
    /* padding: 30px; */
    padding-left: 70px;
    padding-top: 78px;
    padding-right: 30px;
    /* padding-right: 10px; */
    /* margin-left: 40px; */
  }
  .check-grades-container .detail{
    text-align: left;
    margin-bottom: 40px;
    /* margin-top: 20px; */
  }

  .check-grades-container .detail .check-grades-title{
    font-size: 22px;
    line-height: 40px;
    /* padding-bottom: 60px; */
    /* margin-bottom: 60px; */
  }

  .check-grades-container .detail ul li{
    font-size: 14px;
    line-height: 24px;
    margin: 10px;
    /* padding-bottom: 60px; */
    list-style: decimal;
    color:#999999;
    /* font-weight: 400; */
  }
  .check-grades-container .info{
    display: flex;
    justify-content: space-between;
  }
  img{
    width: 120px;
    height: 120px;
  }

  /* 修改弹出的查询错误框的样式 */
  .el-message-box__headerbtn:hover .el-icon-close {
    color: #FF7A01;
  }
  .btnFalses{
    /* position: absolute; */
    background: white !important;
    border: 0 !important;
    height: 60px;
    display: inline;
    color: #FF7A01 !important;
    bottom: 0 !important;
    width: 100% !important;
    border-top: 1px solid #eee !important;
    line-height: 40px;
    font-size: 14px;
    /* margin-bottom: 0px !important; */
  }
 /* 修改弹出框的样式 */
  .el-message-box {
    width: 350px;
    padding: 0 !important;
  }
  /* 修改elementui中datepicker的样式 */
  .date-style.el-date-picker {
  width: 190px !important;
  height: 235px !important;
  }
  .el-picker-panel {
      line-height: 0px;
   }
   
  table {
      font-size: 11px;
  }
  .el-date-picker__header :hover{
      /* margin-top: 15px; */
      color:#FF7A01
  }
  .el-date-picker__header-label {
      font-size: 11px;
  }
  .el-date-table td, .el-date-table td div :hover{
    color:#FF7A01 !important;
  }
  .el-picker-panel td .cell :hover{
      /* width: 100%; */
      /* color:#FF7A01 !important; */
      color: #FF7A01 !important;
  }
  /* .el-picker-panel  div, .el-picker-panel td:hover, .el-picker-panel.is-week-mode .el-picker-panel__row.current div, .el-picker-panel.is-week-mode .el-year-table__row:hover div {
    color: #FF7A01;
} */
.el-year-table td .cell:hover, .el-year-table td.current:not(.disabled) .cell,.el-year-table td.today .cell,
  .el-month-table td .cell:hover, .el-month-table td.current:not(.disabled) .cell,.el-month-table td.today .cell{
    color: #FF7A01!important;
    /* background-color: #FF7A01 !important; */
    /* border-radius: 4px !important; */
    /* font-size: 15px !important; */
    /* width: 60px; */
    text-align: center;
  }



  </style>