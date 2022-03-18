import echarts from "echarts";

export function loadNtChart(myChart) {
  let dataAxis = [
    "梁村镇",
    "大岗镇",
    "岗坪镇",
    "冷坑镇",
    "马宁镇",
    "蓝钟镇",
    "怀城街道",
    "幸福街道",
    "坳仔镇",
    "汶朗镇",
    "甘洒镇",
    "凤岗镇",
    "洽水镇",
    "中洲镇",
    "连麦镇",
    "下帅壮族瑶族乡",
    "永固镇",
    "诗洞镇",
    "桥头镇",
  ];

  let data = [
    220, 182, 191, 234, 290, 330, 310, 123, 142, 178, 206, 128, 205, 172, 152,
    145, 89, 153, 182,
  ];

  let yMax = 500;
  let dataShadow = [];
  for (let i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
  }
  myChart.setOption({
    grid: {
      show: false,
      top: 50,
      bottom: 50,
    },
    title: {
      text: "农田总面积：3632亩",
      left: "center",
      textStyle: {
        color: "#fff",
      },
    },
    tooltip: {
      trigger: "axis",
      formatter: "{b}：{c}亩",
    },
    xAxis: {
      data: dataAxis,
      axisLabel: {
        color: "#fff",
        rotate: 45,
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
        barWidth: 15,
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
