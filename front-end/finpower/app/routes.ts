import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  route("login", "pages/login.tsx"),
  layout("pages/root-layout.tsx", [ 
    route("home", "pages/home.tsx"),
  ]),
] satisfies RouteConfig;
