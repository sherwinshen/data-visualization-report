<template>
  <card-wrapper title="热门搜索">
    <v-chart class="chart" :option="option" autosize></v-chart>
  </card-wrapper>
</template>

<script lang="ts" setup>
import CardWrapper from "@/components/card-wrapper.vue";
import wordCloudData from "@/mocks/wordCloudData";

const data = wordCloudData.map((item: any) => {
  return {
    name: item.word,
    value: item.count,
  };
});
const option = {
  series: [
    {
      type: "wordCloud",
      data,
      shape: "circle",
      gridSize: 8,
      textStyle: {
        color: function () {
          return `rgb(
            ${Math.round(Math.random() * 255)}, 
            ${Math.round(Math.random() * 255)}, 
            ${Math.round(Math.random() * 255)}
          )`;
        },
        emphasis: {
          shadowBlur: 10,
          shadowColor: "#333",
        },
      },
    },
  ],
};
</script>

<style lang="less" scoped>
.chart {
  height: 190px;
}
</style>
