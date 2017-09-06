import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Login from '@/components/pages/login/login.vue';
import Home from '@/components/pages/home/home.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/hello',
			name: 'Hello',
			component: Hello
		},
		{
			path: '/',
			name: 'login',
			component: Login
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		}
	]
});
