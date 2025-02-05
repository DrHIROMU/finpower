import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("pages/root-layout.tsx", [
    index("pages/home.tsx"),
    route("user-management", "pages/user/user-management.tsx"),
  ]),
  route("logout", "pages/logout.tsx"),
  route("login", "pages/login.tsx"),
] satisfies RouteConfig;
