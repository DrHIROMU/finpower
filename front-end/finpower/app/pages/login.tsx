import { redirect, Form } from "react-router";
import type { Route } from "./+types/login";

export default function LoginPage(){
  return <>
  <Form method="post">
    <div>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />
    </div>    
    <button type="submit">Login</button>
  </Form>
  </>
}

export async function loader(){    
  if(false){
    return redirect("/home");
  }
  return null;
}

export async function clientAction({request}:Route.ClientActionArgs){
  const formData = await request.formData();

  const credentials = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const response = await fetch("http://localhost:8080/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not authenticate user." }),
      {
        status: 500,
      }
    );
  }

  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem("token", token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());

  return redirect("/home");
}