export function loadZpsrChart(myChart) {
  let imgSrc = require("images/index/home/rise.png");
  myChart.setOption({
    title: {
      text: "18.5%",
      textStyle: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#fff",
      },
      x: "center",
      top: "50%",
    },
    graphic: {
      elements: [
        {
          type: "image",
          z: 9,
          style: {
            image: imgSrc,
            width: 30,
          },
          left: "center",
          top: "35%",
          position: [100, 100],
        },
      ],
    },
    tooltip: {
      show: true,
      formatter: "{a}：{d}%",
    },
    series: [
      {
        name: "销量3",
        type: "pie",
        hoverAnimation: false, //鼠标移入变大
        clockWise: false,
        radius: ["65%", "80%"],
        itemStyle: {
          normal: {
            color: "#00B8EE",
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
          },
        },
        data: [
          {
            value: 50,
            name: "invisible",
            itemStyle: {
              normal: {
                color: "rgba(124,228,245,0.2)",
              },
            },
          },
          {
            value: 50,
            name: "销量3",
          },
        ],
      },
      {
        name: "销量2",
        type: "pie",
        clockWise: false,
        hoverAnimation: false, //鼠标移入变大
        radius: ["45%", "60%"],
        itemStyle: {
          normal: {
            color: "#64E0A0",
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
          },
        },

        data: [
          {
            value: 60,
            name: "invisible",
            itemStyle: {
              normal: {
                color: "rgba(124,228,245,0.2)",
              },
            },
          },
          {
            value: 40,
            name: "销量2",
          },
        ],
      },
    ],
  });
}
