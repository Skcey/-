<!-- 布局内容 -->
<template>
    <div class="layout">
        <!-- 左侧导航 -->
        <div class="menu">
            <Menu :isCollapse="isCollapse"></Menu>
        </div>
        <!-- 右侧内容 -->
        <div class="content">
            <Content :isCollapse="isCollapse" @changeShow="changeShow"></Content>
        </div>
    </div>
</template>

<script>
import Content from './content/Index.vue'
import Menu from './menu/Index.vue'
export default {
    components:{
        Menu,
        Content
    },
    data(){
        return{
        isCollapse:false
        }
    },
    methods:{
        changeShow(){
            this.isCollapse=!this.isCollapse;
        }
    }
}
</script>

<style  scoped>
.layout{
    display:flex;
    width: 100%;
    height:100%;
    .menu{
        /* width: 200px; */
        background-color:  #112f50;
        height:100%vh;
    }
    .content{
        width:100%;
    }
}
</style>