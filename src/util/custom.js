import bus from "./bus";
import config from "./config";
import axios from "axios";
import echarts from "echarts";
import { formatDate } from "./parseTime";
import * as mars3d from "mars3d";

const custom = {
  bus,
  formatDate,
  axios,
  config,
  echarts,
  mars3d,
};

export default custom;
