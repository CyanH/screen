export function loadChart(myChart) {
  myChart.setOption({
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "5%",
      bottom: "5%",
      textStyle: {
        color: "#fff",
      },
    },
    color: [
      "rgb(100,217,80)",
      "rgb(78,172,184)",
      "rgb(248,215,72)",
      "rgb(117,251,253)",
    ],
    series: [
      {
        name: "优势产业",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          formatter: "{b} {c}亿\n占{d}%",
          lineHeight: 18,
          color: "#fff",
        },
        data: [
          { value: 12, name: "西瓜" },
          { value: 15, name: "水稻" },
          { value: 18, name: "蔬菜" },
          { value: 24, name: "生猪" },
        ],
      },
    ],
  });
}
