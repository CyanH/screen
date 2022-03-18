export function loadDayChart(myChart, content) {
  let Ydata = [];
  content.map((v) => {
    Ydata.push(v.t);
  });
  let max = Math.max(...Ydata) + 0.5;
  let min = Math.min(...Ydata) - 1;
  myChart.setOption({
    tooltip: {
      trigger: "axis",
    },
    grid: {
      top: "10%",
      left: "6%",
      right: "9%",
      bottom: "3%",
      height: "80%",
      containLabel: true,
    },
    calculable: true,
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisTick: {
          show: false, //隐藏X轴刻度
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
    ],
    yAxis: {
      type: "value",
      max: max,
      min: min,
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        type: "line",
        min: 10,
        max: 40,
        data: Ydata,
        lineStyle: {
          normal: {
            width: 5,
            color: {
              type: "linear",

              colorStops: [
                {
                  offset: 0,
                  color: "#AAF487", // 0% 处的颜色
                },
                {
                  offset: 0.4,
                  color: "#47D8BE", // 100% 处的颜色
                },
                {
                  offset: 1,
                  color: "#47D8BE", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
            shadowColor: "rgba(71,216,190, 0.5)",
            shadowBlur: 10,
            shadowOffsetY: 7,
          },
        },
        itemStyle: {
          normal: {
            color: "#AAF487",
            borderWidth: 10,
            borderColor: "#AAF487",
          },
        },
        smooth: true,
      },
    ],
  });
}
