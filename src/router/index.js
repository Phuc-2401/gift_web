import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from '../views/auth/LoginPage.vue';
import RegisterPage from '../views/auth/RegisterPage.vue';
import HomePage from '../views/user/Home.vue';
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/login',
            name: 'LoginPage',
            component: LoginPage
        },
        {
            path: '/register',
            name: 'RegisterPage',
            component: RegisterPage
        },
        {
            path: '/home',
            name: 'HomePage',
            component: HomePage
        }
    ]
});
