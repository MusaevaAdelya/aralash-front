import { Chart } from "react-google-charts";

export const data = [
  ["Month", "Количество запросов в месяц"],
  ["June", 50],
  ["July", 30],
  ["August", 25],
  ["September", 11]
];

export const options = {
  chart: {
    title: "Cтатистика по использованию API",
  },
};

function LineChart() {
  return (
    <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default LineChart;
