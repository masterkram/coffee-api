import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faLeaf, faFire, faBlender, faTags } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router';
import MyCoffee from './components/MyCoffee';
import Varieties from './components/Varieties';
import CreateCoffee from './components/CreateCoffee';

Vue.use(VueRouter);

library.add(faCoffee, faLeaf, faFire, faBlender, faTags);
const routes = [
  { path:'/my-coffee', component: MyCoffee },
  { path:'/varieties', component: Varieties },
  { path: '/create', component: CreateCoffee },
];

const router = new VueRouter({
  routes
})

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
