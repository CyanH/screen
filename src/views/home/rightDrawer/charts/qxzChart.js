import echarts from "echarts";
import { formatDate } from "@/util/parseTime";
export function loadQxzChart(myChart, data, f) {
  var dataIPSxAxis = [];
  var dataIPS = [];
  var dataEC = [];
  var dataPH = [];
  data.map((v) => {
    dataIPS.push(v.temp);
    dataEC.push(v.ec);
    dataPH.push(v.pH);
    if (f == 1) {
      dataIPSxAxis.push(
        formatDate(new Date(v.date), "yyyy-MM-dd hh:mm:ss").slice(11, 16)
      );
    } else {
      dataIPSxAxis.push(v.date.slice(5));
    }
  });
  myChart.setOption({
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      textStyle: {
        fontSize: 12,
        color: "#fff",
      },
      itemGap: 5,
      selectedMode: "single",
    },
    color: ["rgb(6, 246, 253)", "#4cd5ce"],
    grid: {
      left: "0%",
      right: "5%",
      top: "12%",
      bottom: 0,
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: dataIPSxAxis,
        axisLabel: {
          show: true,
          textStyle: {
            color: "#fff",
            fontSize: 10,
          },
          formatter: function (value) {
            var ret = ""; //拼接加\n返回的类目项
            var maxLength = 5; //每项显示文字个数
            var valLength = value.length; //X轴类目项的文字个数
            var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
            if (rowN > 1) {
              //如果类目项的文字大于3,
              for (var i = 0; i < rowN; i++) {
                var temp = ""; //每次截取的字符串
                var start = i * maxLength; //开始截取的位置
                var end = start + maxLength; //结束截取的位置
                //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                temp = value.substring(start, end) + "\n";
                ret += temp; //凭借最终的字符串
              }
              return ret;
            } else {
              return value;
            }
          },
        },
        axisLine: {
          lineStyle: {
            color: "#0a2b52",
            width: 0.5, //这里是为了突出显示加上的
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "°C",
        axisLine: {
          onZero: false,
          lineStyle: {
            color: "#fff",
            width: 1, //这里是为了突出显示加上的
          },
        },
        min: function (value) {
          return value.min;
        },
        axisLabel: {
          formatter: function (val) {
            return val + "";
          },
          show: true,
          textStyle: {
            color: "#fff", //字体颜色
            fontSize: 10,
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
          },
        },
      },
    ],
    series: [
      {
        name: "水温",
        type: "line",
        smooth: true,
        //  symbol: "none", //去掉折线点
        stack: 100,
        itemStyle: {
          normal: {
            lineStyle: {
              // 系列级个性化折线样式
              width: 2,
              type: "solid",
              color: "rgb(6, 246, 253)",
            },
          },
        }, //线条样式
        symbolSize: 9, //折线点的大小
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(6, 246, 253,0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(6, 246, 253,0)",
                },
              ],
              false
            ),
            shadowColor: "rgba(6, 246, 253, 0.9)",
            shadowBlur: 20,
          },
        },
        data: dataIPS,
      },

      {
        name: "电导率",
        type: "line",
        smooth: true,
        //  symbol: "none", //去掉折线点
        stack: 100,
        itemStyle: {
          normal: {
            //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#64CAFA", // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: "#64CAFA", // 100% 处的颜色
              },
              {
                offset: 1,
                color: "#0078D7", // 100% 处的颜色
              },
            ]), //背景渐变色
            lineStyle: {
              // 系列级个性化折线样式
              width: 2,
              type: "solid",
              color: "#0078D7",
            },
          },
          emphasis: {
            color: "#02675f",
            lineStyle: {
              // 系列级个性化折线样式
              width: 0.5,
              type: "dotted",
              color: "#02675f", //折线的颜色
            },
          },
        }, //线条样式
        symbolSize: 9, //折线点的大小
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 120, 215,0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(0, 120, 215,0)",
                },
              ],
              false
            ),
            shadowColor: "rgba(0, 120, 215, 0.9)",
            shadowBlur: 20,
          },
        },
        data: dataEC,
      },

      {
        name: "pH",
        type: "line",
        smooth: true,
        //  symbol: "none", //去掉折线点
        stack: 100,
        itemStyle: {
          normal: {
            lineStyle: {
              // 系列级个性化折线样式
              width: 2,
              type: "solid",
              color: "rgb(6, 246, 253)",
            },
          },
        }, //线条样式
        symbolSize: 9, //折线点的大小
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(6, 246, 253,0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(6, 246, 253,0)",
                },
              ],
              false
            ),
            shadowColor: "rgba(6, 246, 253, 0.9)",
            shadowBlur: 20,
          },
        },
        data: dataPH,
      },

      {
        name: "溶解氧",
        type: "line",
        smooth: true,
        //  symbol: "none", //去掉折线点
        stack: 100,
        itemStyle: {
          normal: {
            //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#64CAFA", // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: "#64CAFA", // 100% 处的颜色
              },
              {
                offset: 1,
                color: "#0078D7", // 100% 处的颜色
              },
            ]), //背景渐变色
            lineStyle: {
              // 系列级个性化折线样式
              width: 2,
              type: "solid",
              color: "#0078D7",
            },
          },
          emphasis: {
            color: "#02675f",
            lineStyle: {
              // 系列级个性化折线样式
              width: 0.5,
              type: "dotted",
              color: "#02675f", //折线的颜色
            },
          },
        }, //线条样式
        symbolSize: 9, //折线点的大小
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 120, 215,0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(0, 120, 215,0)",
                },
              ],
              false
            ),
            shadowColor: "rgba(0, 120, 215, 0.9)",
            shadowBlur: 20,
          },
        },
        data: dataEC,
      },

      {
        name: "浊度",
        type: "line",
        smooth: true,
        //  symbol: "none", //去掉折线点
        stack: 100,
        itemStyle: {
          normal: {
            lineStyle: {
              // 系列级个性化折线样式
              width: 2,
              type: "solid",
              color: "rgb(6, 246, 253)",
            },
          },
        }, //线条样式
        symbolSize: 9, //折线点的大小
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(6, 246, 253,0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(6, 246, 253,0)",
                },
              ],
              false
            ),
            shadowColor: "rgba(6, 246, 253, 0.9)",
            shadowBlur: 20,
          },
        },
        data: dataPH,
      },

      {
        name: "悬浮物",
        type: "line",
        smooth: true,
        //  symbol: "none", //去掉折线点
        stack: 100,
        itemStyle: {
          normal: {
            //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#64CAFA", // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: "#64CAFA", // 100% 处的颜色
              },
              {
                offset: 1,
                color: "#0078D7", // 100% 处的颜色
              },
            ]), //背景渐变色
            lineStyle: {
              // 系列级个性化折线样式
              width: 2,
              type: "solid",
              color: "#0078D7",
            },
          },
          emphasis: {
            color: "#02675f",
            lineStyle: {
              // 系列级个性化折线样式
              width: 0.5,
              type: "dotted",
              color: "#02675f", //折线的颜色
            },
          },
        }, //线条样式
        symbolSize: 9, //折线点的大小
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 120, 215,0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(0, 120, 215,0)",
                },
              ],
              false
            ),
            shadowColor: "rgba(0, 120, 215, 0.9)",
            shadowBlur: 20,
          },
        },
        data: dataEC,
      },
    ],
  });

  myChart.on("legendselectchanged", (e) => {
    let option = myChart.getOption();
    if (e.name === "水温") {
      option.yAxis[0].name = "°C";
    } else if (e.name === "电导率") {
      option.yAxis[0].name = "μS/cm";
    } else if (e.name === "pH") {
      option.yAxis[0].name = "";
    } else if (e.name === "溶解氧") {
      option.yAxis[0].name = "mg/L";
    } else if (e.name === "浊度") {
      option.yAxis[0].name = "NTU";
    } else if (e.name === "悬浮物") {
      option.yAxis[0].name = "mg/L";
    }
    myChart.setOption(option);
  });
}
