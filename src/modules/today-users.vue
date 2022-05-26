<template>
  <card-wrapper :has-header="false">
    <content-wrapper title="今日交易用户数" :content="userToday">
      <v-chart :option="option" autoresize></v-chart>
      <template #footer>
        <span>退货率</span>
        <span class="emphasis">{{ returnRate }}</span>
      </template>
    </content-wrapper>
  </card-wrapper>
</template>

<script lang="ts" setup>
import CardWrapper from "@/components/card-wrapper.vue";
import ContentWrapper from "@/components/content-wrapper.vue";
import chartData from "@/mocks/chartData";
import { wrapperNumber, wrapperPercentage } from "./utils";

const userToday = wrapperNumber("userToday");
const returnRate = wrapperPercentage("returnRate");
const { orderUserTrendAxis, orderUserTrend } = chartData;
const option = {
  xAxis: {
    type: "category",
    data: orderUserTrendAxis,
    show: false,
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      name: "用户实时交易量",
      type: "bar",
      data: orderUserTrend,
      barWidth: "60%",
    },
  ],
  tooltip: {
    trigger: "axis",
  },
  grid: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
};
</script>
