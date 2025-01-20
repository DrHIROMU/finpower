import { type RouteConfig, index, route, layout, prefix } from "@react-router/dev/routes";

export default [
  index("pages/login.tsx"),
  layout("pages/root-layout.tsx", [
    route("home", "pages/home.tsx", { id: "route-home" }),
  ]),
] satisfies RouteConfig;
