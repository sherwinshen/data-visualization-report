<template>
  <card-wrapper title="关键词搜索" class="key-search">
    <div class="card-content">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="title">搜索用户数</div>
          <div class="num">{{ userCount }}</div>
          <v-chart class="chart" autoresize :option="userChartOption"></v-chart>
        </el-col>
        <el-col :span="12">
          <div class="title">搜索量</div>
          <div class="num">{{ searchCount }}</div>
          <v-chart class="chart" autoresize :option="searchChartOption"></v-chart>
        </el-col>
      </el-row>
      <el-table class="table" :data="tableData">
        <el-table-column prop="rank" label="排名" />
        <el-table-column prop="keyword" label="关键词" />
        <el-table-column prop="count" label="总搜索量" />
        <el-table-column prop="users" label="搜索用户数" />
        <el-table-column prop="range" label="搜索占比" />
      </el-table>
      <el-pagination
        class="pagination"
        v-model:current-page.sync="page"
        :total="wordCloud.length"
        :page-size="pageSize"
        layout="prev, pager, next"
      />
    </div>
  </card-wrapper>
</template>

<script lang="ts" setup>
import CardWrapper from "@/components/card-wrapper.vue";
import chartData from "@/mocks/chartData";
import { format } from "@/modules/utils";

const { wordCloud } = chartData;
const basicChartOption = {
  xAxis: {
    type: "category",
    show: false,
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      type: "line",
      encode: { x: 0, y: 1 },
      seriesLayoutBy: "row",
      areaStyle: {
        opacity: 1,
      },
      lineStyle: {
        color: "#3c57ab",
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
const xAxis = wordCloud.map((item: any) => item.word);
const userCount = format(wordCloud.reduce((s: number, i: any) => i.user + s, 0));
const userData = wordCloud.map((item: any) => item.user);
const userChartOption = {
  ...basicChartOption,
  dataset: {
    source: [xAxis, userData],
  },
};
const searchCount = format(wordCloud.reduce((s: number, i: any) => i.count + s, 0));
const searchData = wordCloud.map((item: any) => item.count);
const searchChartOption = {
  ...basicChartOption,
  dataset: {
    source: [xAxis, searchData],
  },
};
const formatTableData = (data: any) => {
  return data.map((item: any, index: number) => {
    return {
      id: index + 1,
      rank: index + 1,
      keyword: item.word,
      count: item.count,
      users: item.user,
      range: `${((item.user / item.count) * 100).toFixed(2)}%`,
    };
  });
};
const pageSize = 5;
const page = ref(1);
const tableData = computed(() => {
  return formatTableData(wordCloud.slice((page.value - 1) * pageSize, (page.value - 1) * pageSize + pageSize) || []);
});
</script>

<style lang="less" scoped>
.key-search {
  .card-content {
    .title {
      color: #999;
      font-size: 14px;
    }
    .num {
      font-size: 22px;
      color: #333;
      font-weight: 500;
      letter-spacing: 2px;
    }
    .chart {
      height: 50px;
    }
    .table {
      height: 240px;
    }
    .pagination {
      margin-top: 10px;
      display: flex;
      justify-content: flex-end;
      padding: 0px;
    }
  }
}
</style>
