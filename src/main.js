import Vue from 'vue';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/global.css';
import navmenu from './components/navMenu.vue';

import banner from './components/banner.vue';
import home from './router/home.vue';
import movie from './router/movie.vue';
import test from './router/test.vue';

Vue.use(ElementUI);
Vue.use(VueRouter);


const routes = [
     { path: '/', component: home },
     { path: '/home', component: home },
     { path: '/movies', component: movie },
     { path: '/test', component: test }
   ]
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
     routes // (缩写) 相当于 routes: routes
   });
   new Vue({
     el: '#app',
     router,
     components: {
          'navmenu': navmenu,
          'home': home,
          'movie': movie,
          'banner': banner
     },
     //render: h => h(navmenu)
});


