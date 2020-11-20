import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from 'src/views/Home.vue';
import Blockara from 'src/views/Blockara.vue';
import Uprooted from 'src/views/Uprooted.vue';
import CropDrop from 'src/views/CropDrop.vue';
import Beegypt from 'src/views/Beegypt.vue';
import SmallerProjects from 'src/views/SmallerProjects.vue';
import DataBee from 'src/views/DataBee.vue';
import BeeQuestions from 'src/views/BeeQuestions.vue';

Vue.use(VueRouter)
const routes:Array<RouteConfig> = [
  { path: "/", name: "Home", component: Home, meta: { title: "Haunted Bees Productions" } },
  { path: "/blockara", name: "Blockara", component: Blockara, meta: { title: "Blockara - Haunted Bees Productions" } },
  { path: "/uprooted", name: "Uprooted", component: Uprooted, meta: { title: "Uprooted - Haunted Bees Productions" } },
  { path: "/cropdrop", name: "CropDrop", component: CropDrop, meta: { title: "Crop Drop - Haunted Bees Productions" } },
  { path: "/beegypt", name: "Beegypt", component: Beegypt, meta: { title: "Beegypt - Haunted Bees Productions" } },
  { path: "/miscgames", name: "SmallerProjects", component: SmallerProjects, meta: { title: "Smaller Projects - Haunted Bees Productions" } },
  // ABEUT
  { path: "/databee", name: "DataBee", component: DataBee, meta: { title: "DataBee - Haunted Bees Productions" } },
  { path: "/beequestions", name: "BeeQuestions", component: BeeQuestions, meta: { title: "Bee Questions! - Haunted Bees Productions" } },
  // SONIC
  // FOOD PORTAL
  // SAVE THE BEES
  // PRIVACY POLICIES
  // ETYMOLOGY THING MAYBE?
];

const router = new VueRouter({ mode: "history", base: process.env.BASE_URL, routes, scrollBehavior() { return { x: 0, y: 0 }; } });
router.afterEach(to => {
    Vue.nextTick(() => {
        if(to.meta.title) { document.title = to.meta.title; }
    });
});
export default router;