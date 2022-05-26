import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/main.less";
import VueECharts from "@/plugins/vue-echarts/index";


createApp(App).use(VueECharts).mount("#app");
