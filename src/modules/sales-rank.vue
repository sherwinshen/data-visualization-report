<template>
  <card-wrapper title="分类销售排行" class="sales-rank">
    <template #header-right>
      <el-radio-group v-model="rankType" size="small">
        <el-radio-button :label="RankType.CATEGORY">品类</el-radio-button>
        <el-radio-button :label="RankType.GOODS">商品</el-radio-button>
      </el-radio-group>
    </template>
    <v-chart class="card-content" :option="option" autoresize></v-chart>
  </card-wrapper>
</template>

<script lang="ts" setup>
import CardWrapper from "@/components/card-wrapper.vue";
import chartData from "@/mocks/chartData";

enum RankType {
  CATEGORY = 1,
  GOODS = 2,
}
const rankType = ref(RankType.CATEGORY);
const { category = {} } = chartData;
const { data1 = {}, data2 = {} } = category;
const dataMap = {
  [RankType.CATEGORY]: {
    title: "品类分布",
    data: data1.data1,
    axis: data1.axisX,
    total: data1.data1.reduce((s: number, i: number) => s + i, 0),
  },
  [RankType.GOODS]: {
    title: "商品分布",
    data: data2.data1,
    axis: data2.axisX,
    total: data2.data1.reduce((s: number, i: number) => s + i, 0),
  },
};
const option = computed(() => {
  const chartData = dataMap[rankType.value].data.map((item: any, index: number) => {
    const percent = `${((item / dataMap[rankType.value].total) * 100).toFixed(2)}%`;
    const axis = dataMap[rankType.value].axis;
    return {
      legendName: axis[index],
      value: item,
      percent,
      itemStyle: {},
      name: `${axis[index]} | ${percent}`,
    };
  });
  return {
    title: [
      {
        text: dataMap[rankType.value].title,
        textStyle: {
          fontSize: 14,
        },
        left: 20,
        top: 20,
      },
      {
        subtext: dataMap[rankType.value].total,
        text: "累计订单量",
        right: "54%",
        top: 170,
        textStyle: {
          fontSize: 14,
          color: "#999",
        },
        subtextStyle: {
          fontSize: 28,
          color: "#333",
        },
        textAlign: "center",
      },
    ],
    series: [
      {
        data: chartData,
        name: "品类分布",
        type: "pie",
        label: {
          show: true,
          formatter: function (params: any) {
            return params.data.legendName;
          },
        },
        right: 200,
        radius: ["45%", "60%"],
        clockwise: false,
        itemStyle: {
          borderWidth: 4,
          borderColor: "#fff",
        },
      },
    ],
    legend: {
      type: "scroll",
      orient: "vertical",
      height: 250,
      right: "8%",
      top: "middle",
      textStyle: {
        color: "#8c8c8c",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: function (params: any) {
        return (
          params.seriesName +
          "<br />" +
          params.marker +
          params.data.legendName +
          "<br />" +
          "数量：" +
          params.data.value +
          "<br />" +
          "占比：" +
          params.data.percent +
          "%"
        );
      },
    },
  };
});
</script>

<style lang="less" scoped>
.sales-rank {
  :deep(.el-radio-button__original-radio:checked + .el-radio-button__inner) {
    background-color: #5470c6;
    border-color: #5470c6;
  }
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card-content {
    height: 403px;
  }
}
</style>
