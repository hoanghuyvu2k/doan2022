// import Home from "./view/Home";
// import Cart from "./view/Cart";
// import ProductDetail from "./view/ProductDetail";
import React from "react";
import Single from "../pages/single/Single";

const Home = React.lazy(() => import("../pages/home/Home"));

const defaultRoutes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/Home", name: "Home", component: Home, exact: true },
  { path: "/post/:postId", name: "Single", component: Single, exact: true },
];
export default defaultRoutes;
