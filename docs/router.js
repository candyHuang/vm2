import Vue from 'vue';
import VueRouter from 'vue-router';

const routes = ['button'].map((el) => {
  /* eslint-disable import/no-dynamic-require */
  const component = resolve => require([`./views/${el}`], resolve);

  return {
    path: `/${el}`,
    component,
  };
});
routes.push({
  path: '*',
  redirect: '/button',
});

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0); // scroll to top
  next();
});

export default router;
