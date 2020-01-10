import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ArticleDetailComponent from "../components/ArticleDetailComponent";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/article/:id",
    name: "detail",
    component: ArticleDetailComponent
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
