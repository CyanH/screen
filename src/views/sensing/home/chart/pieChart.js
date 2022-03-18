export function loadTdChart(myChart) {
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
        name: "土地统计",
        type: "pie",
        radius: ["35%", "55%"],
        avoidLabelOverlap: false,
        label: {
          formatter: "{b} {c}亩\n占{d}%",
          lineHeight: 18,
          color: "#fff",
        },
        data: [
          { value: 3632, name: "水田" },
          { value: 815, name: "旱地" },
          { value: 2118, name: "林地" },
          { value: 5412, name: "其他用地" },
        ],
      },
    ],
  });
}
