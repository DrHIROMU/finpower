import { Form, useActionData } from "react-router";

export default function AuthForm() {
  const data = useActionData();
  console.log(data);

  return (
    <Form
      className="flex flex-col justify-center gap-4 bg-blue-300 h-72 w-80 rounded p-2"
      method="post"
    >
      {data && data.errors && (
        <ul>
          {Object.values(data.errors as string[]).map((error: string) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <div className="flex flex-row items-center bg-gray-200 h-12 rounded p-1">
        <label htmlFor="email" className="basis-1/3">Email</label>
        <input id="email" type="email" name="email" className="basis-2/3" required />
      </div>
      <div className="flex flex-row items-center bg-gray-200 h-12 rounded p-1">
        <label htmlFor="password" className="basis-1/3">Password</label>
        <input id="password" type="password" name="password" className="basis-2/3" required />
      </div>
      <div className="flex flex-row items-center justify-center h-12">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Login
        </button>
      </div>
    </Form>
  );
}
