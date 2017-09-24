// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App/App.vue';
import Axios from 'axios';
import VueAxios from 'vue-axios';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

import router from './router';

Axios.defaults.baseURL = 'http://localhost:8080';
Vue.use(VueAxios, Axios);
Vue.use(VueMaterial);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {App}
});
