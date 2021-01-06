import Home from "@/views/Home";
// import Error from "@/views/Error";

export default [
  {
    path: "*",
    name: "Error",
    component: () => import(/* webpackChunkName: "common" */ "../views/Error")
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
    component: () => import(/* webpackChunkName: "find" */ "../views/Find.vue")
  },
  {
    path: "/Mess",
    name: "Mess",
    meta: {
      types: "TabBar",
      keys: 2
    },
    component: () => import(/* webpackChunkName: "mess" */ "../views/Mess.vue")
  },
  {
    path: "/My",
    name: "My",
    meta: {
      types: "TabBar",
      keys: 3
    },
    component: import(/* webpackChunkName: "my" */ "../views/My.vue")
  }
];
