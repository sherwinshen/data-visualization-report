<template>
  <card-wrapper title="数据雷达图" :has-header-full="true">
    <div class="chart-wrapper">
      <v-chart class="chart" :option="option" autoresize></v-chart>
    </div>
  </card-wrapper>
</template>

<script lang="ts" setup>
import CardWrapper from "@/components/card-wrapper.vue";
import chartData from "@/mocks/chartData";

const { salesRadar = {} } = chartData;
const { indicator = [], data = [] } = salesRadar;
const option = {
  radar: {
    axisName: {
      color: "#000000",
    },
    indicator,
    axisTick: {
      show: false,
    },
  },
  series: [
    {
      name: "运营指标",
      type: "radar",
      data,
    },
  ],
};
</script>

<style lang="less" scoped>
.chart-wrapper {
  height: 360px;
  .chart {
    height: 100%;
  }
}
</style>
