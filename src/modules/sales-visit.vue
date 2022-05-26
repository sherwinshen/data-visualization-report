<template>
  <card-wrapper :has-header="false" class="sales-visited">
    <el-tabs v-model="tab" class="demo-tabs" @tab-change="handleTabChange">
      <el-tab-pane label="销售量" :name="Tabs.SALES"></el-tab-pane>
      <el-tab-pane label="访问量" :name="Tabs.VISIT"></el-tab-pane>
    </el-tabs>
    <el-row :gutter="20">
      <el-col :span="17" class="chart-wrapper">
        <div class="title">{{ chartTitle }}</div>
        <v-chart class="chart" :option="option" autoresize></v-chart>
      </el-col>
      <el-col :span="7" class="rank-wrapper">
        <div class="title">排行榜</div>
        <template v-for="(item, index) in rankData" :key="`${index}-${item.name}`">
          <div class="list-item">
            <div :class="['list-item-no', +item.no <= 3 ? 'top-no' : '']">{{ item.no }}</div>
            <div class="list-item-name">{{ item.name }}</div>
            <div class="list-item-money">{{ item.money }}</div>
          </div>
        </template>
      </el-col>
    </el-row>
  </card-wrapper>
</template>

<script lang="ts" setup>
import CardWrapper from "@/components/card-wrapper.vue";
import chartData from "@/mocks/chartData";
import type { TabPanelName } from "element-plus";

enum Tabs {
  SALES = "sales",
  VISIT = "visit",
}
const tab = ref(Tabs.SALES as Tabs);
const handleTabChange = (name: TabPanelName) => {
  tab.value = name as Tabs;
};

const { orderRank, userRank, orderFullYear, orderFullYearAxis, userFullYear, userFullYearAxis } = chartData;
const tabData = {
  [Tabs.SALES]: {
    chartTitle: "年度销售额",
    rankData: orderRank,
    data: orderFullYear,
    axis: orderFullYearAxis,
  },
  [Tabs.VISIT]: {
    chartTitle: "年度用户访问数量",
    rankData: userRank,
    data: userFullYear,
    axis: userFullYearAxis,
  },
};
const chartTitle = computed(() => {
  return tabData[tab.value].chartTitle;
});
const rankData = computed(() => {
  return tabData[tab.value].rankData;
});
const option = computed(() => {
  const basicOption = {
    xAxis: { type: "category" },
    yAxis: {},
    series: [
      {
        type: "bar",
        encode: {
          x: 0,
          y: 1,
        },
        seriesLayoutBy: "row",
        barWidth: "35%",
      },
    ],
    grid: {
      top: 20,
      left: 35,
      right: 40,
      bottom: 35,
    },
  };
  return {
    ...basicOption,
    dataset: {
      source: [tabData[tab.value].axis, tabData[tab.value].data],
    },
  };
});
</script>

<style lang="less" scoped>
.sales-visited {
  :deep(.el-card__body) {
    padding-top: 10px;
  }
  .chart-wrapper,
  .rank-wrapper {
    margin-bottom: 0px !important;
  }
  .chart-wrapper {
    .chart {
      height: 240px;
    }
  }
  .title {
    color: #666;
    font-weight: 500;
    margin-bottom: 15px;
  }
  .list-item {
    display: flex;
    align-items: center;
    font-size: 12px;
    height: 20px;
    padding: 7px 20px 7px 0;

    .list-item-no {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      color: #333;

      &.top-no {
        background: #000;
        border-radius: 50%;
        color: #fff;
        font-weight: 500;
      }
    }

    .list-item-name {
      margin-left: 10px;
      color: #333;
    }

    .list-item-money {
      flex: 1;
      text-align: right;
    }
  }
}
</style>
