const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const cesiumSource = "node_modules/mars3d-cesium/Build/Cesium/";

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  productionSourceMap: false,
  devServer: {
    port: 8028,
  },
  chainWebpack: (config) => {
    config.optimization.minimize(true);
    config.optimization.splitChunks({
      chunks: "all",
    });
    config.externals({
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
      axios: "axios",
      echarts: "echarts",
      "element-ui": "ELEMENT",
    });
    config.module
      .rule("css")
      .test(/\.css$/)
      .oneOf("vue")
      .resourceQuery(/\?vue/)
      .use("px2rem")
      .loader("px2rem-loader")
      .options({
        remUnit: 192,
      });
    config.resolve.alias.set("images", resolve("src/assets/images"));
    config.plugin("html").tap((args) => {
      args[0].title = process.env.VUE_APP_TITLE;
      return args;
    });
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap((options) =>
        Object.assign(options, {
          limit: 1,
        })
      );
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify("static"),
      }),
      new CopyWebpackPlugin([
        { from: path.join(cesiumSource, "Workers"), to: "static/Workers" },
      ]),
      new CopyWebpackPlugin([
        { from: path.join(cesiumSource, "Assets"), to: "static/Assets" },
      ]),
      new CopyWebpackPlugin([
        {
          from: path.join(cesiumSource, "ThirdParty"),
          to: "static/ThirdParty",
        },
      ]),
      new CopyWebpackPlugin([
        { from: path.join(cesiumSource, "Widgets"), to: "static/Widgets" },
      ]),
    ],
  },
};
