import chartData from "@/mocks/chartData";

export const format = (v: number) => {
  const reg = /\d{1,3}(?=(\d{3})+$)/g;
  return `${v}`.replace(reg, "$&,");
};

export const wrapperMoney = (k: string) => {
  return chartData[k] ? `¥ ${format(chartData[k])}` : "¥ 0.00";
};

export const wrapperPercentage = (k: string) => {
  return chartData[k] ? `${chartData[k]}%` : "0%";
};

export const wrapperNumber = (k: string) => {
  return chartData[k] ? format(chartData[k]) : "0";
};

export const wrapperArray = (k: string) => {
  return chartData[k] ? chartData[k] : [];
};
