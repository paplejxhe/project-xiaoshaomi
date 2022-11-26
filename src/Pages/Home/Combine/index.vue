<template>
    <!-- <div>这里是合作</div> -->
    <div class="real_combine">
    <div class="combine">
        <div class="faqi">
            <h4>发起单位</h4>
            <a class="danwei" target="_blank" href="https://www.sport.gov.cn/whzx/index.html">国家体育总局体育文化发展中心</a>
        </div>
        
        
        
        <div class="combineCon">
            <h4>合作单位</h4>
            <div class="combineConDanwei">
                <ul>
                    <li>
                        <a href="http://www.athletics.org.cn" target="_blank">
                            <img src="@/assets/images/combine/C_1.png" />
                        </a>
                    </li>
                    <li>
                        <a href="http://www.yuanmingyuanpark.cn" target="_blank">
                            <img src="@/assets/images/combine/C_6.png" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.cctv.com" target="_blank">
                            <img src="@/assets/images/combine/C_11.png" />
                        </a>
                    </li>
                    <!-- <li>
                        <a href="http://tjtv.enorth.com.cn/sports/index.htm" target="_blank">天津体育</a>
                    </li> -->
                </ul>
                <ul>
                    <li>
                        <a href="https://cmasports.sport.org.cn" target="_blank">
                            <img src="@/assets/images/combine/C_2.png" />
                        </a>
                    </li>
                    <li>
                        <a href="http://www.tup.tsinghua.edu.cn/index.html" target="_blank">
                            <img src="@/assets/images/combine/C_7.png" />
                        </a>
                    </li>
                    <li>
                        <a href="http://www.centv.cn" target="_blank">
                            <img src="@/assets/images/combine/C_12.png" />
                        </a>
                    </li>
                    <!-- <li>
                        <a href="http://v.jstv.com/ty/" target="_blank">江苏体育休闲</a>
                    </li> -->
                </ul>
                <ul>
                    <li>
                        <a href="https://www.chinasailing.org.cn" target="_blank">
                            <img src="@/assets/images/combine/C_3.png" />
                        </a>
                    </li>
                    <li>
                        <a href="http://www.ygacjh.org.cn" target="_blank">
                            <img src="@/assets/images/combine/C_8.png" />
                        </a>
                    </li>
                    <li>
                        <a  href="https://www.gdtv.cn" target="_blank">
                            <img src="@/assets/images/combine/C_13.png" />
                        </a>
                    </li>
                
                </ul>
                <ul>
                    <li>
                        <a href="http://www.cba.org.cn" target="_blank">
                            <img src="@/assets/images/combine/C_4.png" />
                        </a>
                    </li>
                    <li>
                        <a href="http://www.gdssa.com" target="_blank">
                            <img src="@/assets/images/combine/C_9.png" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.gzdaily.cn/amucsite/web/index.html#/home" target="_blank">
                            <img src="@/assets/images/combine/C_14.png" />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="https://www.sports.cn" target="_blank">
                            <img src="@/assets/images/combine/C_5.png" />
                        </a>
                    </li>
                    <li>
                        <a href="http://www.nanshamarina.com" target="_blank">
                            <img src="@/assets/images/combine/C_10.png" />
                        </a>
                    </li>
                    <li>
                        <a href="http://www.hnysjt.com" target="_blank">
                            <img src="@/assets/images/combine/C_15.png" />
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'Combine',
    components:{},
    props:[],
    data(){
        return {
            
        }
    },
    methods:{
    }
}
</script>

<style scoped>
.real_combine{
    width: 100%;
    background: #F2F2F2;
}
.combine {
  width: 1200px;
  text-align: left;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
}
.danwei{
    margin-bottom: 80px;
    font-size: 14px;
    margin-left: 0px;
    cursor: pointer;
    display: inline-block;
}

.combineCon{
    width: 1200px;
    margin: 0 auto;
}
.combine h4 {
  font-size: 22px;
  margin-bottom: 30px;
}

.combine .faqi{
    margin-left: 50px;
    width: 320px;
    border-right: 1px solid #ccc;
}
.combine .faqi h4{
    margin-bottom: 42px;
}
.combine .combineCon{
    /* margin-left: 50px; */
    display: flex;
    flex-direction: column;
    margin-left: 20px;
 }

/* 这个combineCon主要控制如果出现多个数据需要分列展示的话就是用这个属性 */
 .combine .combineCon .combineConDanwei{
  display: flex;
}
 .combine .combineCon ul{
  /* margin-right: 120px; */
  width: 25%;
}

 .combine li {
    /* margin-top: 20px; */
    /* font-size: 13px; */
    /* margin-top: 30px; */
    padding-top: 20px;
    list-style: none;
    margin: 0 auto;
}
.combine img {
  display: block;
  margin: 0 auto;
  height: 30px;
  width: auto;
  object-fit:contain;
  
}
 .combine a:link{
  text-decoration: none;
  color: black;
}

.combine a:hover{
  text-decoration: none;
  color: rgb(255,122,1) !important;
}



</style>