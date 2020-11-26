import Home from "../views/Home";
import Error from "../views/Error";

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
    component: Home
  },
  {
    path: "/Find",
    name: "Find",
    component: () => import("../views/Find")
  },
  {
    path: "/Mess",
    name: "Mess",
    component: () => import("../views/Mess")
  },
  {
    path: "/My",
    name: "My",
    component: () => import("../views/My")
  }
];
