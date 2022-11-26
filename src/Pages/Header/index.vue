<template>
    <!-- 头部 -->
    <div class="true_head">
      <div class="box1"></div>
      <header class="header">
        <div class="backgroundImg">
          <img src="@/assets/images/background.png" />
        </div>
          <h1 class="logoArea">
              <a class="logo" title="青年体育文化季" href="###" target="_blank">
                  <img src="@/assets/images/logo.png" alt="">
              </a>
          </h1>
          <div class="searchArea">
              <div class="searchForm">
                  <!-- <el-input v-model="searchContent" 
                  placeholder="" 
                  type="text" 
                  id="autocomplete" 
                  class="input-error input-xxlarge" :fetch-suggestions="querySearch"
                  /> -->
                  <!-- placeholder="请输入内容" -->
                  <!-- :trigger-on-focus="false" : 这个属性表示是在输入前弹出提示还是输入后弹出提示 -->
                  <el-autocomplete
                      class="inline-input"
                      v-model="state2"
                      :fetch-suggestions="querySearch"
                      :trigger-on-focus="true"
                      @select="handleSelect"
                    ></el-autocomplete>
                  <button @click="alert(1)" class="searchButton" type="button">
                      <svg t="1667723140849" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2532" width="20" height="30"><path d="M756.565333 697.258667c2.133333 1.493333 4.224 3.157333 6.101334 5.12l241.664 241.621333c16.256 16.256 16.512 43.52-0.128 60.16a42.453333 42.453333 0 0 1-60.202667 0.170667l-241.664-241.664a41.429333 41.429333 0 0 1-5.034667-6.101334A424.917333 424.917333 0 0 1 426.666667 853.333333C191.018667 853.333333 0 662.314667 0 426.666667S191.018667 0 426.666667 0s426.666667 191.018667 426.666666 426.666667c0 102.698667-36.266667 196.949333-96.768 270.592zM426.666667 768a341.333333 341.333333 0 1 0 0-682.666667 341.333333 341.333333 0 0 0 0 682.666667z" fill="#ffffff" p-id="2533"></path></svg>
                  </button>
              </div>
          </div>
      </header>
  </div>
</template>

<script>
export default{
    name:'Header',
    components:{},
    data(){
      return {
        searchContent:'',
        // querySearch:[
        // { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
        // ],
        restaurants: [],
        state1: '',
        state2: '',
      }
    },
    methods:{
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "今年夏天的广州南沙，让我们一起扬帆出海吧！" },
          { "value": "冬奥落幕，展亮首博。一泪一汗挥洒奥运赛场，一笔一画传承体育精神。迎冬奥·冰雪绘画展演顺利结束~！"},
          { "value": "献礼冬奥！全国青少年儿童体育文化季·迎冬奥冰雪绘画展演" },
          { "value": "全国青少年儿童体育文化季 正式开幕啦！" },
          { "value": "全国青少年儿童体育文化季 正式开幕啦！" },
          { "value": "全国青少年儿童体育文化季 正式开幕啦！" },
          { "value": "全国青少年儿童体育文化季 正式开幕啦！" },
          { "value": "全国青少年儿童体育文化季 正式开幕啦！" },
          { "value": "全国青少年儿童体育文化季 正式开幕啦！" },
          { "value": "全国青少年儿童体育文化季 正式开幕啦！" },
        ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted(){
      this.restaurants = this.loadAll();
    }
}
</script>

<style scoped>
.true_header{
  width: 100%;
  height: 170px;
}
.backgroundImg{
  /* left: 1535px; */
  position: absolute;
  right: -5px;
  z-index: -1;
}
.backgroundImg img{
  opacity: 0.7;
  width: 240px;
  height: 120px;
  z-index:-1;
}
.box1 {
  position: absolute;
  left: 0;
    width: 100%;
    height: 260px;
    z-index:-1;
    background-image: linear-gradient(180deg, rgba(255, 168, 75, 0.2) 0%, rgba(255, 168, 75, 0.05) 22.56%, rgba(255, 168, 75, 0) 100%);
}
 .header  {
  width: 1000px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;
  /* padding: ; */
}
 .header  .logoArea {
  float: left;
  position: relative;
}
.header  .logoArea a{
  line-height: 20px;
  position: absolute;
}
 .header  .logoArea .logo img {
  width: 272px;
  height: 117px;
  /* margin: 10px; */
  margin-top: 12px;
  margin-bottom: 20px;
}
 .header  .searchArea {
  float: right;
  margin-top: 40px;
  /* margin-right: 50px; */
}
 .header  .searchArea .searchForm {
  overflow: hidden;
  width: 480px;
  height: 38px;
  margin-top: 33px;
  border: #FF7A01 2px solid;
  border-radius: 24px;
  margin-bottom: 18px;

}

 .header  .searchArea .searchForm .el-autocomplete {
  box-sizing: border-box;
  width: 417px !important;
  height: 38px;
  padding: 0px 4px;
  font-size: 20px;
  float: left;
}
.el-autocomplete >>> input{
  outline: none !important;
  border: 0 !important;
}
/* .el-autocomplete >>> .el-input__inner {
  outline: none !important;
  border: 0 !important;
}
.el-autocomplete >>> .el-input__inner :focus {
  outline: none !important;
  border: 0 !important;
}
.el-autocomplete >>> .el-input__inner :hover {
  outline: none !important;
  border: 0 !important;
} */
 .header  .searchArea .searchForm button {
  z-index:12;
  height: 34px;
  width: 60px;
  background-color: #FF7A01;
  border-radius: 23px;
  border: none;
  color: #fff;
  float: left;
  margin-top: 2px ;
  cursor: pointer;
}
button{
  cursor: pointer;
}
 .header  .searchArea .searchForm button:focus {
  outline: none;
}
</style>