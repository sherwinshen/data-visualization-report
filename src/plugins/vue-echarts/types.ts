import { ComposeOption } from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import {
  BarSeriesOption,
  PieSeriesOption,
  LineSeriesOption,
  CustomSeriesOption,
  SunburstSeriesOption,
  MapSeriesOption,
  RadarSeriesOption,
} from "echarts/charts";
import {
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption,
  LegendComponentOption,
} from "echarts/components";

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = ComposeOption<
  | BarSeriesOption
  | PieSeriesOption
  | LineSeriesOption
  | CustomSeriesOption
  | SunburstSeriesOption
  | MapSeriesOption
  | RadarSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | LegendComponentOption
>;
