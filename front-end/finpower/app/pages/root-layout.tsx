import { Outlet } from "react-router"

export default function RootLayout(){
  return <>
  <header>Header</header>
  <aside>Side Bar</aside>
  <main>
    <Outlet />
  </main>
  </>
}