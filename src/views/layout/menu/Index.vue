<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#112f50"
      text-color="#fff"
      active-text-color="red"
      router
      :collapse ='isCollapse'
      >
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">发起申请</span>
      </el-menu-item>
      <el-menu-item index="/myApplication">
        <i class="el-icon-menu"></i>
        <span slot="title">我的申请</span>
      </el-menu-item>
      <el-menu-item index="/approval">
        <i class="el-icon-document"></i>
        <span slot="title">审   批</span>
      </el-menu-item>
      <el-submenu index="/products">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>产品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/products/list">产品列表</el-menu-item>
          <el-menu-item index="/products/category">产品分类</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/order">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/order/order-list">订单列表</el-menu-item>
          <el-menu-item index="/order/collect">订单汇总</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/advert">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>广告管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/advert/advert-list">广告列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/log" style="margin-top:40px">
        <i class="el-icon-date"></i>
        <span slot="title">日   志</span>
      </el-menu-item>
      <el-menu-item index="user">
        <i class="el-icon-user"></i>
        <span slot="title">个人中心</span>
      </el-menu-item>
      <el-menu-item index="/introduction">
        <i class="el-icon-warning-outline"></i>
        <span slot="title">使用说明</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props:['isCollapse']
}
</script>

<style scoped>
.el-menu{
  border-right:0;
  top:40px;
  text-align: center;
  .is-active{
    background:#AFAEAE !important;
    color:white !important;
  }
  i{
    color:white;
  }
  hr{
    color:#AFAEAE;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>