import { Outlet, Form } from "react-router";
import Button from "@mui/material/Button";

import classes from "./root-layout.module.scss";

export default function RootLayout() {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Form method="post" action="/logout">
          <Button variant="contained" type="submit">
            Logout
          </Button>
        </Form>
      </header>
      <aside className={classes.sidebar}>Side Bar</aside>
      <main className={classes.main}>
        <Outlet />
      </main>
    </div>
  );
}
