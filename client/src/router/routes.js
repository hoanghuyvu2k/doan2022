// import Home from "./view/Home";
// import Cart from "./view/Cart";
// import ProductDetail from "./view/ProductDetail";
import React from "react";
import Single from "../pages/single/Single";
import Write from "../pages/write/Write";
import Settings from "../pages/settings/Settings";
const Home = React.lazy(() => import("../pages/home/Home"));

const routes = [
  { path: "/Write", name: "Write", component: Write, exact: true },
  {
    path: "/Settings",
    name: "Settings",
    component: Settings,
    exact: true,
  },
];
export default routes;
