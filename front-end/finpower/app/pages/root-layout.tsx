import { Outlet, Form } from "react-router";

export default function RootLayout() {
  return (
    <div className="">
      <header className="">
        <Form method="post" action="/logout">
          <button type="submit">
            Logout
          </button>
        </Form>
      </header>
      <aside className="">Side Bar</aside>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
