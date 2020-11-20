import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import ResponsiveImage from 'src/components/ResponsiveImage.vue';
import ContentWarnings from 'src/components/ContentWarnings.vue';
import ExternalIcons from 'src/components/ExternalIcons.vue';
import PageLinks from 'src/components/PageLinks.vue';
import ExternalAnchor from 'src/components/ExternalAnchor.vue';

Vue.config.productionTip = false
Vue.component("rimg", ResponsiveImage);
Vue.component("cw", ContentWarnings);
Vue.component("ext", ExternalIcons);
Vue.component("links", PageLinks);
Vue.component("ax", ExternalAnchor);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')