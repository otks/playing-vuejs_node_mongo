import Vue from 'vue';

import {MainView} from './pages';
import router from './routes/routes';

new Vue({
	el: '#vuejs',
	router,
	components: {MainView},
	template: '<MainView></MainView>'
});