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
    name: "Home",
    component: Home
  }
];
