<template>
  <card-wrapper title="数据旭日图" :has-header-full="true">
    <div class="chart-wrapper">
      <v-chart class="chart" :option="option" autoresize></v-chart>
    </div>
  </card-wrapper>
</template>

<script lang="ts" setup>
import CardWrapper from "@/components/card-wrapper.vue";
import chartData from "@/mocks/chartData";

const { salesSun = {} } = chartData;
const formatData = (data: any[]) => {
  for (let j = 0; j < data.length; ++j) {
    const level1 = data[j].children;
    for (let i = 0; i < level1.length; ++i) {
      const block = level1[i].children;
      const bookScore = [] as any[];
      let bookScoreId: number;
      for (let star = 0; star < block.length; ++star) {
        block[star].label = {
          downplay: {
            opacity: 0.5,
          },
        };
        if (block[star].children) {
          block[star].children.forEach(function (book: any) {
            book.value = 1;
            book.itemStyle = {
              opacity: 1,
            };

            let value = 1;
            if (bookScoreId === 0 || bookScoreId === 3) {
              value = 5;
            }

            if (bookScore[bookScoreId]) {
              bookScore[bookScoreId].value += value;
            } else {
              bookScore[bookScoreId] = {
                value: value,
              };
            }
          });
        }
      }
    }
  }
  return data;
};
const option = {
  series: [
    {
      type: "sunburst",
      center: ["50%", "50%"],
      data: formatData(salesSun),
      sort: (a: any, b: any) => {
        if (a.depth === 1) {
          return b.getValue() - a.getValue();
        } else {
          return a.dataIndex - b.dataIndex;
        }
      },
      label: {
        rotate: "radial",
      },
      itemStyle: {
        borderWidth: 2,
      },
      levels: [
        {},
        {
          r0: 0,
          r: 40,
          label: {
            rotate: 0,
          },
        },
        {
          r0: 40,
          r: 105,
        },
        {
          r0: 115,
          r: 140,
          label: {
            rotate: "tangential",
            fontSize: 10,
          },
        },
        {
          r0: 140,
          r: 145,
          label: {
            position: "outside",
          },
          downplay: {
            label: {
              opacity: 0.5,
            },
          },
        },
      ],
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
