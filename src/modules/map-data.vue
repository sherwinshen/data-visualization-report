<template>
  <v-chart class="map-data" :option="option" autosize></v-chart>
</template>

<script lang="ts" setup>
import "echarts/extension-src/bmap/bmap";
import mapScatterData from "@/mocks/mapScatterData";

const { data, geo } = mapScatterData;
const convertData = (data: any, geo: any) => {
  const res = [] as any[];
  data.forEach((item: any) => {
    const { name, value } = item;
    const coord = geo[name];
    res.push({
      name,
      value: [...coord, value],
    });
  });
  return res;
};
const option = {
  // 需要借助 bmap 扩展
  bmap: {
    key: "你的密钥",
    center: [104.114129, 34.550339],
    zoom: 6,
    roam: false,
  },
  title: {
    text: "外卖销售数据大盘",
    subtext: "销售趋势统计",
    left: "center",
  },
  series: [
    {
      name: "销售额",
      type: "scatter",
      coordinateSystem: "bmap",
      data: convertData(data, geo),
      itemStyle: {
        color: "#5470c6",
      },
      symbolSize: (val: number[]) => {
        return val[2] / 10;
      },
      label: {
        show: false,
        position: "right",
        formatter: (v: any) => {
          return `${v.data.name} - ${v.data.value[2]}`;
        },
      },
      emphasis: {
        label: {
          show: true,
        },
      },
    },
    {
      name: "Top 10",
      type: "effectScatter",
      coordinateSystem: "bmap",
      data: convertData(
        data.sort(function (a, b) {
          return b.value - a.value;
        }),
        geo
      ).slice(0, 10),
      symbolSize: (val: number[]) => {
        return val[2] / 10;
      },
      encode: {
        value: 2,
      },
      label: {
        formatter: (v: any) => {
          return `${v.data.name} - ${v.data.value[2]}`;
        },
        position: "right",
        show: true,
      },
      emphasis: {
        scale: 1.2,
      },
      rippleEffect: {
        brushType: "stroke",
      },
      itemStyle: {
        color: "#5470c6",
        shadowBlur: 10,
        shadowColor: "#333",
      },
    },
  ],
};
</script>

<style lang="less" scoped>
.map-data {
  height: 606px;
  position: relative;
}
</style>
