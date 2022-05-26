<template>
  <card-wrapper title="用户月同比增长">
    <v-chart class="chart" :option="option" autosize></v-chart>
  </card-wrapper>
</template>

<script lang="ts" setup>
import CardWrapper from "@/components/card-wrapper.vue";

const option = {
  series: [
    {
      type: "liquidFill",
      data: [0.6],
      radius: "90%",
      backgroundStyle: {
        color: "#fff",
      },
      label: {
        fontSize: 30,
        color: "#000",
        fontWeight: "normal",
      },
      outline: {
        show: true,
        borderDistance: 4,
        itemStyle: {
          color: "none",
          borderWidth: 2,
          shadowBlur: 20,
          shadowColor: "rgba(0, 0, 0, 0.25)",
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
