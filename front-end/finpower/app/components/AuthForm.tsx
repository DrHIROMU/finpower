import { Form, useActionData } from "react-router";
import { Button, TextField } from "@mui/material";

import classes from "./AuthForm.module.scss";

export default function AuthForm() {
  const data = useActionData();
  console.log(data);

  return (
    <div className={classes.authFormContainer}>
      <Form className={classes.authForm} method="post">
        {data && data.errors && (
          <ul>
            {Object.values(data.errors as string[]).map((error: string) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <div>
          <TextField
            required
            id="email"
            name="email"
            type="email"
            label="Email"
            variant="standard"
          />
        </div>
        <div>
          <TextField
            required
            id="password"
            name="password"
            type="password"
            label="Password"
            variant="standard"
          />
        </div>
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
