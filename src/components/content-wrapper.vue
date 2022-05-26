<template>
  <div class="content-wrapper">
    <div class="title">{{ title }}</div>
    <div class="content">{{ content }}</div>
    <div class="chart">
      <slot></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    title?: string;
    content?: string;
  }>(),
  {
    title: "",
    content: "",
  }
);
</script>

<style lang="less" scoped>
.content-wrapper {
  .title {
    font-size: 12px;
    color: #999;
  }
  .content {
    font-size: 25px;
    color: #000;
    margin-top: 5px;
    letter-spacing: 1px;
  }
  .chart {
    height: 56px;
    padding: 4px 0px 10px 0px;
  }
  .footer {
    border-top: 1px solid #eee;
    padding-top: 10px;
    color: #666;
    font-size: 12px;
  }
}
</style>
