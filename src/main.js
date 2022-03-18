import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import custom from "./util/custom";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import "lib-flexible";
import "./assets/css/reset.css";
import jkMap from "jk-map";
import scroll from "vue-seamless-scroll";
import "mars3d/dist/mars3d.css";

Vue.use(scroll);
Vue.use(jkMap.vue);
Vue.config.productionTip = false;

Object.keys(custom).forEach((key) => {
  Vue.prototype["$" + key] = custom[key];
});

const requireComponent = require.context(
  // 其组件目录的相对路径
  "./components",
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /\.vue$/
);
requireComponent.keys().forEach((fileName) => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName);

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录无关的文件名
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
