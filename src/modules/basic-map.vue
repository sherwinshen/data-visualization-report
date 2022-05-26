<template>
  <card-wrapper title="商家地图" :has-header-full="true">
    <div class="chart-wrapper">
      <v-chart class="chart" :option="state.option" autoresize></v-chart>
    </div>
  </card-wrapper>
</template>

<script lang="ts" setup>
import CardWrapper from "@/components/card-wrapper.vue";
import axios from "axios";
import { registerMap } from "echarts/core";
import chartData from "@/mocks/chartData";

const { businessMapData } = chartData;
const state = reactive({
  option: {} as any,
});

const init = async () => {
  try {
    const response = (await axios.get("https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json")) as any;
    registerMap("chinaMap", response.data);
    const legendArr = businessMapData.map((item: any) => item.name);
    const seriesArr = businessMapData.map((item: any) => {
      return {
        type: "effectScatter",
        rippleEffect: {
          scale: 5,
          brushType: "stroke",
        },
        name: item.name,
        data: item.children,
        coordinateSystem: "geo",
      };
    });
    state.option = {
      geo: {
        type: "map",
        map: "chinaMap",
        top: "5%",
        bottom: "5%",
        itemStyle: {
          areaColor: "#f5f8ff",
          borderColor: "#333",
        },
      },
      legend: {
        left: "5%",
        bottom: "5%",
        orient: "vertical",
        data: legendArr,
      },
      series: seriesArr,
    };
  } catch (error) {
    console.error(error);
  }
};

init();
</script>

<style lang="less" scoped>
.chart-wrapper {
  height: 360px;
  .chart {
    height: 100%;
  }
}
</style>
