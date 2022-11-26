<template>
    <!-- 底部 -->
    <div class="copyright">
        <p>Copyright © 2022 国家体育总局</p>
        <p>xxxxx提供技术支持</p>
    </div>
</template>

<script>
export default {
    name:'Footer',
    components:{},
    props:[],
    data(){
        return {}
    },
    methods:{

    }
}
</script>

<style scoped>
.copyright{
    /* border-top: 1px solid #ddd; */
    padding: 20px;
    background: #F2F2F2;
    height: 200px;
}
.copyright p {
  margin: 15px 0;
  text-align: center;
  color:rgb(151, 150, 150);
  line-height: 30px;
  font-size: 16px;
}

</style>