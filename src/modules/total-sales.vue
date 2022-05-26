<template>
  <card-wrapper :has-header="false">
    <content-wrapper title="累计销售额" :content="salesToday">
      <template #default>
        <div class="compare-wrapper">
          <div class="compare">
            <span>日同比</span>
            <span class="emphasis">{{ salesGrowthLastDay }}</span>
            <div class="increase" />
          </div>
          <div class="compare">
            <span>月同比</span>
            <span class="emphasis">{{ salesGrowthLastMonth }}</span>
            <div class="decrease" />
          </div>
        </div>
      </template>
      <template #footer>
        <span>昨日销售额</span>
        <span class="emphasis">{{ salesLastDay }}</span>
      </template>
    </content-wrapper>
  </card-wrapper>
</template>

<script lang="ts" setup>
import CardWrapper from "@/components/card-wrapper.vue";
import ContentWrapper from "@/components/content-wrapper.vue";
import { wrapperMoney, wrapperPercentage } from "./utils";

const salesToday = wrapperMoney("salesToday");
const salesLastDay = wrapperMoney("salesLastDay");
const salesGrowthLastDay = wrapperPercentage("salesGrowthLastDay");
const salesGrowthLastMonth = wrapperPercentage("salesGrowthLastMonth");
</script>

<style lang="less" scoped>
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  .compare {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #666;
    margin: 4px 0px;
  }
}
</style>
