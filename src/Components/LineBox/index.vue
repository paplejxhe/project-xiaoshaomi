<template>
    <div class="lineBox">
        <div class="line" v-for="num in length" :key="num"></div>
    </div>
</template>

<script>
export default {
    name:'LineBox',
    props:['length']
}
</script>

<style scoped>
.lineBox{
    margin-left: 18px ;
    display: flex;
    /* padding-left: 1px; */
}
.lineBox .line{
    /* line-height: 60px; */
    margin-top: 22px;
    width: 15px;
    height: 1px;
    transform: rotate(-60deg);
    border-bottom: 2px solid rgb(44,152,206);
    /* border-radius: 10px; */
}
</style>