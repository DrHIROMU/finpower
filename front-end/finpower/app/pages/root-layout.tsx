import { Outlet, Form } from "react-router";
import Accordion from "~/components/accordion/accordion";

export default function RootLayout() {
  return (
    <div className="grid grid-rows-[8rem_1fr] grid-cols-[16rem_1fr] min-h-screen ">
      <header className="flex flex-col justify-center p-6 bg-green-200 col-span-2">
        <Form method="post" action="/logout" className="flex justify-end">
          <button type="submit" className="bg-red-600 text-white h-12 w-24 rounded p-2">
            Logout
          </button>
        </Form>
      </header>
      <aside className="bg-blue-200">
        <Accordion />
      </aside>
      <main className="bg-yellow-200">
        <Outlet />
      </main>
    </div>
  );
}
