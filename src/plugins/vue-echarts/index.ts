import VueECharts from "vue-echarts";
import { use } from "echarts/core";
import { BarChart, PieChart, LineChart, CustomChart, SunburstChart, MapChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

// 扩展
import "echarts-liquidfill";
import "echarts-wordcloud";

// 注册组件
use([
  BarChart,
  PieChart,
  LineChart,
  CustomChart,
  SunburstChart,
  MapChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);

export default {
  install: (app: any) => {
    app && app.component("v-chart", VueECharts);
  },
};
