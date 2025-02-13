export function getUsers() {
  const users = fetch("http://localhost:8080/users").then(res => res.json());
  return users;
}

export function disableUser(id: string) {
  const users = fetch(`http://localhost:8080/users/${id}/disable`, {method: "PATCH"}).then(res => res.json());
  return users;
}

export function activateUser(id: string) {
  const users = fetch(`http://localhost:8080/users/${id}/activate`, {method: "PATCH"}).then(res => res.json());
  return users;
}
