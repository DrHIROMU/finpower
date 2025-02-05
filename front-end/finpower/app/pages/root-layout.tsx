import { Outlet } from "react-router";
import Accordion from "~/components/accordion/accordion";
import Logout from "./logout";

export default function RootLayout() {
  return (
    <div className="grid grid-rows-[8rem_1fr] grid-cols-[16rem_1fr] min-h-screen ">
      <header className="flex flex-col justify-center p-6 bg-cyan-700 col-span-2">
        <Logout />
      </header>
      <aside className="bg-sky-600">
        <Accordion />
      </aside>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
