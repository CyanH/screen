export function loadZczChart(
  myChart,
  s1,
  sN1,
  s2,
  sN2,
  s3,
  sN3,
  s4,
  sN4,
  s5,
  sN5,
  zzl
) {
  let imgSrc = require("images/home/rise.png");
  myChart.setOption({
    title: {
      text: zzl + "%",
      textStyle: {
        fontWeight: "bold",
        fontSize: 14,
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
            width: 24,
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
        type: "pie",
        name: sN1,
        hoverAnimation: false, //鼠标移入变大
        clockWise: false,
        radius: ["82%", "92%"],
        itemStyle: {
          normal: {
            color: "#01B8EE",
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
            value: 100 - s1,
            name: "invisible",
            itemStyle: {
              normal: {
                color: "rgba(124,228,245,0.2)",
              },
            },
          },
          {
            value: s1,
          },
        ],
      },
      {
        type: "pie",
        name: sN2,
        clockWise: false,
        hoverAnimation: false, //鼠标移入变大
        radius: ["70%", "80%"],
        itemStyle: {
          normal: {
            color: "#64E09E",
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
            value: 100 - s2,
            name: "invisible",
            itemStyle: {
              normal: {
                color: "rgba(124,228,245,0.2)",
              },
            },
          },
          {
            value: s2,
          },
        ],
      },
      {
        type: "pie",
        name: sN3,
        clockWise: false,
        hoverAnimation: false, //鼠标移入变大
        radius: ["59%", "68%"],
        itemStyle: {
          normal: {
            color: "#EDBE01",
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
            value: 100 - s3,
            name: "invisible",
            itemStyle: {
              normal: {
                color: "rgba(124,228,245,0.2)",
              },
            },
          },
          {
            value: s3,
          },
        ],
      },
      {
        type: "pie",
        name: sN4,
        clockWise: false,
        hoverAnimation: false, //鼠标移入变大
        radius: ["51%", "58%"],
        itemStyle: {
          normal: {
            color: "#AF5DA1",
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
            value: 100 - s4,
            name: "invisible",
            itemStyle: {
              normal: {
                color: "rgba(124,228,245,0.2)",
              },
            },
          },
          {
            value: s4,
          },
        ],
      },
      {
        type: "pie",
        name: sN5,
        clockWise: false,
        hoverAnimation: false, //鼠标移入变大
        radius: ["45%", "50%"],
        itemStyle: {
          normal: {
            color: "#23AC38",
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
            value: 100 - s5,
            name: "invisible",
            itemStyle: {
              normal: {
                color: "rgba(124,228,245,0.2)",
              },
            },
          },
          {
            value: s5,
          },
        ],
      },
    ],
  });
}
