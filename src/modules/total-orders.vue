<template>
  <card-wrapper :has-header="false">
    <content-wrapper title="累计订单量" :content="salesToday">
      <template #default>
        <v-chart :option="option" autoresize></v-chart>
      </template>
      <template #footer>
        <span>昨日订单量</span>
        <span class="emphasis">{{ orderLastDay }}</span>
      </template>
    </content-wrapper>
  </card-wrapper>
</template>

<script lang="ts" setup>
import CardWrapper from "@/components/card-wrapper.vue";
import ContentWrapper from "@/components/content-wrapper.vue";
import chartData from "@/mocks/chartData";
import { wrapperNumber } from "./utils";

const salesToday = wrapperNumber("salesToday");
const orderLastDay = wrapperNumber("orderLastDay");
const orderTrend = chartData.orderTrend;
const option = {
  xAxis: {
    type: "category",
    show: false,
    boundaryGap: false,
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      type: "line",
      data: orderTrend,
      areaStyle: {
        color: "purple",
      },
      lineStyle: {
        width: 0,
      },
      itemStyle: {
        opacity: 0,
      },
      smooth: true,
    },
  ],
  grid: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
};
</script>
