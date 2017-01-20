import Vue from 'vue';
import Button from './components/button';

const components = {
  Button,
};
const install = function install() {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
};
// auto install
if (typeof window !== 'undefined' && window.Vue) install(window.Vue);

module.exports = {
  ...components,
  install,
};
