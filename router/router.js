import Vue from 'vue';
import Router from 'vue-router';
import scrollBehavior from '../.nuxt/router.scrollBehavior';

import '~/layouts/default.vue';

Vue.use(Router);

function interopDefault(promise) {
  return promise.then(m => m.default || m);
}

const Main = () => interopDefault(import('~/views/Main'));
const Project = () => interopDefault(import('~/views/Project'));
const Projects = () => interopDefault(import('~/views/Projects'));
const Contacts = () => interopDefault(import('~/views/Contacts'));
const About = () => interopDefault(import('~/views/About'));

export function createRouter(ssrContext) {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    fallback: false,
    routes: [
      {
        path: '/',
        component: Main,
        name: 'index',
      },
      {
        path: '/project',
        component: Project,
        name: 'project',
      },
      {
        path: '/projects',
        component: Projects,
        name: 'projects',
      },
      {
        path: '/contacts',
        component: Contacts,
        name: 'contacts',
      },
      {
        path: '/about',
        component: About,
        name: 'about',
      },
    ]
  });
};
