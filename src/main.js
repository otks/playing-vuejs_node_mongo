// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

import Helpers from './components/plugins/helpers.js';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueMaterial);
Vue.use(Helpers);

Vue.material.registerTheme('default', {
	primary: {
		color: 'green',
		hue: '800'
	},
	accent: {
		color: 'green',
		hue: 'A200'
	},
	warn: 'orange',
	background: 'white'
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {App}
});
