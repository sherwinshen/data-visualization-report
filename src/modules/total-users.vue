<template>
  <card-wrapper :has-header="false">
    <content-wrapper title="累计用户数" :content="orderUser">
      <template #default>
        <v-chart :option="option" autoresize></v-chart>
      </template>
      <template #footer>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphasis">{{ userGrowthLastDay }}</span>
          <div class="increase" />
          <span class="month">月同比</span>
          <span class="emphasis">{{ userGrowthLastMonth }}</span>
          <div class="decrease" />
        </div>
      </template>
    </content-wrapper>
  </card-wrapper>
</template>

<script lang="ts" setup>
import CardWrapper from "@/components/card-wrapper.vue";
import ContentWrapper from "@/components/content-wrapper.vue";
import chartData from "@/mocks/chartData";
import { wrapperNumber } from "./utils";

const orderUser = wrapperNumber("orderUser");
const userGrowthLastDay = wrapperNumber("userGrowthLastDay");
const userGrowthLastMonth = wrapperNumber("userGrowthLastMonth");
const { userLastMonth, userToday } = chartData;
const option = {
  xAxis: {
    type: "value",
    show: false,
    max: userToday,
  },
  yAxis: {
    type: "category",
    show: false,
  },
  series: [
    {
      type: "bar",
      data: [userLastMonth],
      barWidth: 10,
      itemStyle: {
        color: "green",
      },
      emphasis: {
        disabled: true,
      },
      showBackground: true,
      backgroundStyle: {
        color: "#eee",
      },
    },
    {
      type: "custom",
      data: [userLastMonth],
      renderItem: (params: any, api: any) => {
        const value = api.value(0);
        const endPoint = api.coord([value, 0]);
        return {
          type: "group",
          position: endPoint,
          children: [
            {
              type: "path",
              shape: {
                d: "M1024 255.996 511.971 767.909 0 255.996 1024 255.996z", // svg的内容，表示三角形
                x: -5,
                y: -20,
                width: 10,
                height: 10,
                layout: "cover",
              },
              style: {
                fill: "green",
              },
            },
            {
              type: "path",
              shape: {
                d: "M0 767.909l512.029-511.913L1024 767.909 0 767.909z", // svg的内容，表示三角形
                x: -5,
                y: 10,
                width: 10,
                height: 10,
                layout: "cover",
              },
              style: {
                fill: "green",
              },
            },
          ],
        };
      },
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

<style lang="less" scoped>
.total-users-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 8px;
  }
}
</style>
