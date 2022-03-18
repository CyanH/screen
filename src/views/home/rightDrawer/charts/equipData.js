export function loadChart(myChart) {
  let data = [
    {
      value: 3,
      name: "气象站",
    },
    {
      value: 3,
      name: "墒情",
    },
    {
      value: 4,
      name: "摄像头",
    },
  ];

  myChart.setOption({
    title: {
      top: "38%",
      left: "center",
      text: "76%",
      textStyle: {
        color: "#FF0",
        fontFamily: "electronicFont",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 24,
      },
      subtext: "覆盖率",
      subtextStyle: {
        color: "#fff",
        fontSize: 14,
      },
    },
    tooltip: {
      trigger: "item",
      formatter: function (res) {
        console.log(res);

        if (res.componentSubType == "liquidFill") {
          return (
            res.seriesName + ": " + ((res.value * 10000) / 100).toFixed(2) + "%"
          );
        } else {
          return (
            '<span class="ii" style="background:' +
            res.color +
            ' "></span>' +
            res.name +
            ": " +
            res.data.value +
            "台"
          );
        }
      },
    },
    legend: {
      data: ["气象站", "墒情", "摄像头"],
      icon: "circle",
      orient: "vertical",
      left: "5%",
      bottom: "5%",
      textStyle: {
        color: "#fff",
      },
    },
    series: [
      {
        type: "liquidFill",
        itemStyle: {
          normal: {
            opacity: 0.4,
            shadowBlur: 0,
            shadowColor: "blue",
          },
        },
        name: "覆盖率",
        data: [
          {
            value: 0.76,
            itemStyle: {
              normal: {
                color: "#53d5ff",
                opacity: 0.6,
              },
            },
          },
        ],
        color: ["#53d5ff"],
        center: ["50%", "50%"],
        label: {
          normal: {
            formatter: "",
            textStyle: {
              fontSize: 12,
            },
          },
        },
        outline: {
          itemStyle: {
            borderColor: "#aaa",
            borderWidth: 0,
          },
          borderDistance: 0,
        },
      },
      {
        type: "pie",
        radius: ["60%", "80%"],
        color: [
          "#c487ee",
          "#deb140",
          "#49dff0",
          "#034079",
          "#6f81da",
          "#00ffb4",
        ],
        hoverAnimation: false, ////设置饼图默认的展开样式
        label: {
          show: true,

          normal: {
            formatter: "{b}：{d}%",
            show: true,
          },
        },

        itemStyle: {
          // 此配置
          normal: {
            borderWidth: 2,
            borderColor: "#fff",
          },
          emphasis: {
            borderWidth: 0,
            shadowBlur: 2,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        data,
      },
    ],
  });
}
