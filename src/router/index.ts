import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from 'src/views/Home.vue';
import About from 'src/views/About.vue';
import Blockara from 'src/views/Blockara.vue';
import Uprooted from 'src/views/Uprooted.vue';
import CropDrop from 'src/views/CropDrop.vue';
import Beegypt from 'src/views/Beegypt.vue';
import SmallerProjects from 'src/views/SmallerProjects.vue';
import DataBee from 'src/views/DataBee.vue';
import BeeQuestions from 'src/views/BeeQuestions.vue';
import Sonic from 'src/views/Sonic.vue';
import FoodPortal from 'src/views/FoodPortal.vue';
import SaveTheBees from 'src/views/SaveTheBees.vue';
import PrivacyPolicy from 'src/views/PrivacyPolicy.vue';

Vue.use(VueRouter)
const routes:Array<RouteConfig> = [
  { path: "/", name: "Home", component: Home, meta: { title: "Haunted Bees Productions" } },
  { path: "/blockara", name: "Blockara", component: Blockara, meta: { title: "Blockara - Haunted Bees Productions" } },
  { path: "/uprooted", name: "Uprooted", component: Uprooted, meta: { title: "Uprooted - Haunted Bees Productions" } },
  { path: "/cropdrop", name: "CropDrop", component: CropDrop, meta: { title: "Crop Drop - Haunted Bees Productions" } },
  { path: "/beegypt", name: "Beegypt", component: Beegypt, meta: { title: "Beegypt - Haunted Bees Productions" } },
  { path: "/miscgames", name: "SmallerProjects", component: SmallerProjects, meta: { title: "Smaller Projects - Haunted Bees Productions" } },
  { path: "/abeut", name: "About", component: About, meta: { title: "Abeut Us - Haunted Bees Productions" } },
  { path: "/databee", name: "DataBee", component: DataBee, meta: { title: "DataBee - Haunted Bees Productions" } },
  { path: "/beequestions", name: "BeeQuestions", component: BeeQuestions, meta: { title: "Bee Questions! - Haunted Bees Productions" } },
  { path: "/sonic", name: "Sonic", component: Sonic, meta: { title: "Sonic - Haunted Bees Productions" } },
  { path: "/foodportal", name: "FoodPortal", component: FoodPortal, meta: { title: "Food Portal - Haunted Bees Productions" } },
  { path: "/savethebees", name: "SaveTheBees", component: SaveTheBees, meta: { title: "Save the Bees! - Haunted Bees Productions" } },
  { path: "/privacypolicy", name: "PrivacyPolicy", component: PrivacyPolicy, meta: { title: "Privacy Policy - Haunted Bees Productions" } },
  // TODO: maybe re-add the etymology thing
];

const router = new VueRouter({ mode: "history", base: process.env.BASE_URL, routes, scrollBehavior() { return { x: 0, y: 0 }; } });
router.afterEach(to => {
    Vue.nextTick(() => {
        if(to.meta.title) { document.title = to.meta.title; }
    });
});
export default router;