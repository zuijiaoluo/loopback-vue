import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home }
  ]
});

export default router
