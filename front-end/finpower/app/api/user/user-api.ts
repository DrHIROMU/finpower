export function getUsers() {
  const users = fetch("http://localhost:8080/users").then(res => res.json());
  return users;
}
