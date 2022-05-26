<template>
  <card-wrapper title="分类销售排行">
    <template #header-right>
      <el-radio-group v-model="rankType" size="small">
        <el-radio-button :label="RankType.CATEGORY">品类</el-radio-button>
        <el-radio-button :label="RankType.GOODS">商品</el-radio-button>
      </el-radio-group>
    </template>
  </card-wrapper>
</template>

<script lang="ts" setup>
import CardWrapper from "@/components/card-wrapper.vue";

enum RankType {
  CATEGORY = 1,
  GOODS = 2,
}
const rankType = ref(RankType.CATEGORY);
</script>
