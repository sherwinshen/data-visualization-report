<template>
  <el-card :class="['card-wrapper', isFull ? 'full-screen' : '']">
    <!-- header 内容-->
    <template v-if="hasHeader" #header>
      <div class="card-header">
        <span class="card-header-left">{{ title }}</span>
        <div class="card-header-right">
          <template v-if="hasHeaderFull">
            <el-icon size="16px" @click="handleFullScreen">
              <template v-if="!isFull"><i-ep-fullScreen /></template>
              <template v-else><i-ep-close /></template>
            </el-icon>
          </template>
          <slot name="header-right"></slot>
        </div>
      </div>
    </template>
    <!-- content 内容-->
    <slot></slot>
    <!-- footer 内容-->
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </el-card>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    hasHeader?: boolean;
    hasHeaderFull?: boolean;
    title?: string;
  }>(),
  {
    hasHeader: true,
    hasHeaderFull: false,
    title: "",
  }
);

const isFull = ref(false);
const handleFullScreen = () => {
  isFull.value = !isFull.value;
};
</script>

<style lang="less" scoped>
.card-wrapper {
  &.full-screen {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card-header-left {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
  }
  .card-header-right {
    :deep(.el-icon) {
      cursor: pointer;
      &:hover {
        color: #409eff;
      }
    }
  }
}
</style>
