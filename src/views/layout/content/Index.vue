<template>
    <div>
        <!-- 顶部 -->
        <div class="header">
            <div class="open">
                <span v-if='isCollapse' class="iconfont icon-shouqi1-copy" @click="changMenu"></span>
                <span v-else='!isCollapse'class="iconfont icon-shouqi1" @click="changMenu"></span>
            </div>
        </div>
        <!-- 内容 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props:['isCollapse'],
    methods:{
    changMenu(){
        this.$emit('changeShow')
    }
    }
}
</script>

<style>
.header {
    width:100%;
    height: 50px;
    box-shadow: 0px 10px 10px 0px rgb(199, 199, 199);
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    .open {
        .iconfont {
            font-size: 20px;
        }
        display: flex;
        align-items: center;
    }
    img {
        height: 50px;
        width: auto;
    }
}

</style>