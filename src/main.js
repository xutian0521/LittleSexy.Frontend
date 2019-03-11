import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import navmenu from './module/navMenu.vue';
import banner from './module/banner.vue';

Vue.use(ElementUI);


new Vue({
    el:'#app',
    components:{'navmenu':navmenu,'banner':banner},
     //render: h => h(navmenu)
});