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
        <el-col :span="6">1</el-col>
        <el-col :span="6">2</el-col>
        <el-col :span="6">3</el-col>
        <el-col :span="6">4</el-col>
        <el-col :span="24">5</el-col>
        <el-col :span="12">6</el-col>
        <el-col :span="12">7</el-col>
        <el-col :span="18">8</el-col>
        <el-col :span="6">
          <el-row>
            <el-col :span="24">9</el-col>
            <el-col :span="24">10</el-col>
          </el-row>
        </el-col>
        <el-col :span="8">11</el-col>
        <el-col :span="8">12</el-col>
        <el-col :span="8">13</el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import dayjs from "dayjs";

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
