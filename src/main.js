import Vue from 'vue';
import App from './MiApp.vue';
import './registerServiceWorker';
import router from './router/router';
import store from './store/store';
import 'styles/base.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // h 是 createElement的一个简写，这里通过createElement来创建一个组件，并在页面中渲染
  render: h => h(App)
}).$mount('#app');
