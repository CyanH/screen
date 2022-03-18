import echarts from "echarts";

export function loadChart(myChart) {
  let dataAxis = ["蔬菜", "水稻", "西瓜", "砂糖橘", "汶朗蜜柚"];

  let data = [220, 182, 191, 234, 290];
  let yMax = 500;
  let dataShadow = [];
  for (let i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
  }
  myChart.setOption({
    grid: {
      show: false,
      top: 50,
      bottom: 30,
    },
    title: {
      text: "品种种植总面积：1117亩",
      left: "center",
      textStyle: {
        color: "#fff",
      },
    },
    xAxis: {
      data: dataAxis,
      axisLabel: {
        color: "#fff",
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      z: 10,
    },
    yAxis: {
      name: "亩",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#fff",
      },
    },

    series: [
      {
        type: "bar",
        barWidth: 30,
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" },
          ]),
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#2378f7" },
              { offset: 0.7, color: "#2378f7" },
              { offset: 1, color: "#83bff6" },
            ]),
          },
        },
        data: data,
      },
    ],
  });
}
