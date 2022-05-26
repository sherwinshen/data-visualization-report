<template>
  <card-wrapper :has-header="false">
    <el-tabs v-model="tab" class="demo-tabs" @tab-change="handleTabChange">
      <el-tab-pane label="销售量" :name="Tabs.SALES"></el-tab-pane>
      <el-tab-pane label="访问量" :name="Tabs.VISIT"></el-tab-pane>
    </el-tabs>
  </card-wrapper>
</template>

<script lang="ts" setup>
import CardWrapper from "@/components/card-wrapper.vue";
import type { TabPanelName } from "element-plus";

enum Tabs {
  SALES = "sales",
  VISIT = "visit",
}
const tab = ref(Tabs.SALES as Tabs);
const handleTabChange = (name: TabPanelName) => {
  tab.value = name as Tabs;
};
</script>
