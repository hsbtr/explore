import Home from "@/views/Home";
// import * as path from "path";
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
      title: "首页",
      types: "TabBar",
      keys: 0
    },
    component: Home
  },
  {
    path: "/Find",
    name: "Find",
    meta: {
      title: "发现",
      types: "TabBar",
      keys: 1
    },
    component: () => import(/* webpackChunkName: "find" */ "../views/Find.vue")
  },
  {
    path: "/Mess",
    name: "Mess",
    meta: {
      title: "消息",
      types: "TabBar",
      keys: 2
    },
    component: () => import(/* webpackChunkName: "mess" */ "../views/Mess.vue"),
    redirect: "/Mess/SessionList",
    children: [
      {
        path: "SessionList",
        name: "SessionList",
        meta: {
          types: "TabBar",
          keys: 2
        },
        component: () =>
          import(
            /* webpackChunkName: "mess" */ "../components/Mess/SessionList.vue"
          )
      },
      {
        path: "Dynamic",
        name: "Dynamic",
        meta: {},
        component: () =>
          import(
            /* webpackChunkName: "mess" */ "../components/Mess/Dynamic.vue"
          )
      }
    ]
  },
  {
    path: "/My",
    name: "My",
    meta: {
      title: "我的",
      types: "TabBar",
      keys: 3
    },
    component: () => import(/* webpackChunkName: "my" */ "../views/My.vue")
  },
  {
    path: "/ChatRoom",
    name: "ChatRoom",
    meta: {},
    component: () =>
      import(/* webpackChunkName: "chatroom" */ "../views/ChatRoom.vue")
  },
  {
    path: "/Call",
    name: "Call",
    meta: {},
    component: () => import(/* webpackChunkName: "Call" */ "../views/Call.vue")
  }
];
