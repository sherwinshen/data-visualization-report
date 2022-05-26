<template>
  <el-container class="container">
    <el-header class="header-wrapper">
      <div class="left">
        <span class="author">@sherwin</span>
      </div>
      <div class="center">
        <span class="title">数据可视化-报表示例（ECharts）</span>
      </div>
      <div class="right">
        <span class="datetime">{{ time }}</span>
      </div>
    </el-header>
    <el-main class="main-wrapper">
      <el-row :gutter="20">
        <el-col :span="6"><total-sales></total-sales></el-col>
        <el-col :span="6"><total-orders></total-orders></el-col>
        <el-col :span="6"><today-users></today-users></el-col>
        <el-col :span="6"><total-users></total-users></el-col>
        <el-col :span="24"><sales-visit></sales-visit></el-col>
        <el-col :span="12"><key-search></key-search></el-col>
        <el-col :span="12"><sales-rank></sales-rank></el-col>
        <el-col :span="18"><map-data></map-data></el-col>
        <el-col :span="6">
          <el-row>
            <el-col :span="24"><growth-liquidfill></growth-liquidfill></el-col>
            <el-col :span="24"><search-hot></search-hot></el-col>
          </el-row>
        </el-col>
        <el-col :span="8"><sales-radar></sales-radar></el-col>
        <el-col :span="8"><basic-map></basic-map></el-col>
        <el-col :span="8"><sales-sun></sales-sun></el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import TotalSales from "@/modules/total-sales.vue";
import TotalOrders from "@/modules/total-orders.vue";
import TodayUsers from "@/modules/today-users.vue";
import TotalUsers from "@/modules/total-users.vue";
import SalesVisit from "@/modules/sales-visit.vue";
import KeySearch from "@/modules/key-search.vue";
import SalesRank from "@/modules/sales-rank.vue";
import GrowthLiquidfill from "@/modules/growth-liquidfill.vue";
import SearchHot from "@/modules/search-hot.vue";
import MapData from "@/modules/map-data.vue";
import SalesRadar from "@/modules/sales-radar.vue";
import SalesSun from "@/modules/sales-sun.vue";
import BasicMap from "@/modules/basic-map.vue";

const time = ref("");
const timer = ref(null) as any;
const setTime = () => {
  time.value = dayjs().format("YYYY-MM-DD HH:mm:ss");
};
onMounted(() => {
  setTime();
  timer.value = setInterval(() => {
    setTime();
  }, 1000);
});
onBeforeUnmount(() => {
  timer.value && clearInterval(timer.value);
});
</script>

<style lang="less">
body {
  margin: 0px;
  padding: 0px;
  font-size: 12px;
}
#app {
  min-width: 1440px;
  .header-wrapper {
    height: 60px;
    padding: 0px;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    background-size: cover;
    background-position: center center;
    font-size: 14px;
    background-image: url("./assets/imgs/header_border_light.png");
    .left,
    .right {
      width: 220px;
      margin-top: -10px;
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .theme {
        margin-right: 10px;
      }
      .datetime {
        width: 150px;
      }
    }
    .center {
      font-size: 16px;
    }
  }
  .main-wrapper {
    min-height: calc(100vh - 60px);
    padding: 10px 20px;
    margin: 0px;
    .el-col {
      margin: 10px 0px;
    }
  }
}
</style>
