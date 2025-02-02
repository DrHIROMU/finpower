import { Form, redirect } from "react-router";

export async function clientLoader() {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/login");
  }
  return null;
}

export default function Home() {
  return <>Home</>;
}
