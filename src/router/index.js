import Vue from 'vue';
Vue.use(VueRouter);

const routes = [

];

const router = new VueRouter({
    mode: 'history',
    routes,
});
router.beforeEach((to, from, next) => {
    const isLoggedIn = Cookies.get("token");
    const requiresAuth = ['/shopping-cart', '/admin', '/admin/dashboard', '/admin/product', '/admin/category'];
    if (requiresAuth.some(route => to.path.startsWith(route)) && !isLoggedIn) {
        Vue.prototype.$toast.error("Vui lòng đăng nhập để tiếp tục.");
        next('/login');
    } else {
        next();
    }
});


export default router;
