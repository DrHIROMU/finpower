import { Form, redirect } from "react-router";

import { getJWT } from "~/utils/auth";

export async function clientLoader() {
  const token = getJWT();

  if (!token) {
    return redirect("/login");
  }
  return null;
}

export default function Home() {
  return <>Home</>;
}
