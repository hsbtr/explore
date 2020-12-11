import Home from "@/views/Home";
import Error from "@/views/Error";

const Find = () => import(/* webpackChunkName: "find" */ "../views/Find.vue");
const Mess = () => import(/* webpackChunkName: "mess" */ "../views/Mess.vue");
const My = () => import(/* webpackChunkName: "my" */ "../views/My.vue");

export default [
  {
    path: "*",
    name: "Error",
    component: Error
  },
  {
    path: "/",
    name: "/",
    redirect: "/Home"
  },
  {
    path: "/Home",
    name: "Home",
    meta: {
      types: "TabBar",
      keys: 0
    },
    component: Home
  },
  {
    path: "/Find",
    name: "Find",
    meta: {
      types: "TabBar",
      keys: 1
    },
    component: Find
  },
  {
    path: "/Mess",
    name: "Mess",
    meta: {
      types: "TabBar",
      keys: 2
    },
    component: Mess
  },
  {
    path: "/My",
    name: "My",
    meta: {
      types: "TabBar",
      keys: 3
    },
    component: My
  }
];
