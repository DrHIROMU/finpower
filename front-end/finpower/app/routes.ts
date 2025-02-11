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
    ...prefix("users", [
      index("pages/user/users-management.tsx"),
      ...prefix(":userId", [
        index("pages/user/user-detail.tsx"),
        route("edit", "pages/user/edit-user.tsx"),
      ]),
    ]),
  ]),
  route("logout", "pages/logout.tsx"),
  route("login", "pages/login.tsx"),
] satisfies RouteConfig;
