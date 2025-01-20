import { redirect } from "react-router";

export default function LoginPage(){
  return <>Login
  </>
}

export async function loader(){    
  if(false){
    return redirect("/home");
  }
  return null;
}