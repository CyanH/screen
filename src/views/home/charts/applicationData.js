export function loadApplyChart(myChart, data, fontSizes) {
  var colors = ["#00ffff", "#63E09E", "#B785DE", "#FFD203", "#00B8EE"];
  var dataPie = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].type === 0) {
      dataPie.push({
        value: data[i].value,
        name: data[i].name,
        itemStyle: {
          normal: {
            borderWidth: 5,
            shadowBlur: 20,
            borderColor: colors[i / 2],
            shadowColor: colors[i / 2],
          },
        },
      });
    } else {
      dataPie.push({ name: "border", value: 0.2 });
    }
  }
  myChart.setOption({
    title: {
      text: "成果",
      subtext: "13",
      textStyle: {
        color: "#fff",
        fontSize: fontSizes,
        align: "center",
      },
      subtextStyle: {
        color: "#0ff",
        fontSize: fontSizes + 1,
        align: "center",
        fontFamily: "electronicFont",
      },
      x: "center",
      top: "30%",
    },

    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    legend: false,
    series: [
      {
        type: "pie",
        radius: ["58%", "80%"],
        hoverAnimation: false,
        label: {
          show: false,
        },
        data: dataPie,
        itemStyle: {
          normal: {
            color: function (params) {
              var colorList = colors;
              return params.dataIndex % 2
                ? "rgba(0,0,0,0)"
                : colorList[params.dataIndex / 2];
            },
            labelLine: {
              length: 80,
              length2: 120,
            },
            shadowBlur: 40,
            shadowColor: "#22ff33",
          },
        },
      },
      {
        animation: false,
        type: "pie",
        radius: ["39%", "41%"],
        data: data,
        itemStyle: {
          normal: {
            color: function (params) {
              colors;
              return params.dataIndex % 2 ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.1)";
            },
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
          },
        },
      },
      {
        type: "pie",
        zlevel: 4,
        silent: true,
        radius: ["86%", "87%"],
        label: {
          normal: {
            show: false,
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: _pie3(),
      },
    ],
  });
  function _pie3() {
    let dataArr = [];
    for (var i = 0; i < 15; i++) {
      if (i % 2 === 0) {
        dataArr.push({
          name: (i + 1).toString(),
          value: 25,
          itemStyle: {
            normal: {
              color: "rgb(126,190,255, 0.4)",
              borderWidth: 0,
              borderColor: "rgba(0,0,0,0)",
            },
          },
        });
      } else {
        dataArr.push({
          name: (i + 1).toString(),
          value: 10,
          itemStyle: {
            normal: {
              color: "rgba(0,0,0,0)",
              borderWidth: 0,
              borderColor: "rgba(0,0,0,0)",
            },
          },
        });
      }
    }
    return dataArr;
  }
  var timer;
  timer;
  function doing() {
    let option = myChart.getOption();
    option.series[0].startAngle = option.series[0].startAngle + 1;
    option.series[2].startAngle = option.series[2].startAngle - 1;
    myChart.setOption(option);
  }

  function startTimer() {
    timer = setInterval(doing, 100);
  }
  setTimeout(startTimer, 500);
}
