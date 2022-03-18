import echarts from "echarts";

export function loadChart(myChart, chartData) {
  let datalist = [
    {
      offset: [50, 50],
      symbolSize: 74,
      opacity: 0.95,
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#04B5BC",
        },
        {
          offset: 1,
          color: "#2dc5b9",
        },
      ]),
    },
    //左上
    {
      offset: [20, 78],
      symbolSize: 45,
      opacity: 0.95,
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#35d17e",
        },
        {
          offset: 1,
          color: "#49ddb2",
        },
      ]),
    },
    {
      offset: [80, 78],
      symbolSize: 45,
      opacity: 0.95,
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#DAAF3F",
        },
        {
          offset: 1,
          color: "#e4a37f",
        },
      ]),
    },
    //右下
    {
      offset: [80, 30],
      symbolSize: 45,
      opacity: 0.95,
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#277aec",
        },
        {
          offset: 1,
          color: "#57c5ec",
        },
      ]),
    },
    //做下
    {
      offset: [20, 30],
      symbolSize: 45,
      opacity: 0.95,
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#e54948",
        },
        {
          offset: 1,
          color: "#f08456",
        },
      ]),
    },
    //右上
    {
      offset: [25, 22],
      symbolSize: 45,
      opacity: 0.7,
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#11c46e",
        },
        {
          offset: 1,
          color: "#f08456",
        },
      ]),
    },
  ];

  let data = [];
  for (let i = 0; i < chartData.length; i++) {
    let item = chartData[i];
    let itemToStyle = datalist[i];
    data.push({
      name: item.name + "\n" + item.value + "户",
      value: itemToStyle.offset,
      symbolSize: itemToStyle.symbolSize,
      label: {
        normal: {
          textStyle: {
            fontSize: 13,
            fontWeight: 700,
            lineHeight: 22,
          },
        },
      },
      itemStyle: {
        normal: {
          color: itemToStyle.color,
          opacity: itemToStyle.opacity,
        },
      },
    });
  }

  myChart.setOption({
    grid: {
      show: false,
      top: 10,
      bottom: 10,
    },
    xAxis: [
      {
        gridIndex: 0,
        type: "value",
        show: false,
        min: 0,
        max: 100,
        nameLocation: "middle",
        nameGap: 5,
      },
    ],
    yAxis: [
      {
        gridIndex: 0,
        min: 0,
        show: false,
        max: 100,
        nameLocation: "middle",
        nameGap: 30,
      },
    ],
    series: [
      {
        type: "effectScatter",
        hoverAnimation: true,
        label: {
          normal: {
            show: true,
            formatter: "{b}",
            color: "#fff",
            textStyle: {
              fontSize: "20",
            },
          },
        },
        itemStyle: {
          normal: {
            color: "#00acea",
          },
        },
        data: data,
      },
    ],
  });
}
