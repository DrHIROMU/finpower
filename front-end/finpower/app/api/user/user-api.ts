export function getUsers() {
  const users = fetch("http://localhost:8080/users").then((res) => res.json());
  return users;
}

export async function changeUserStatus(id: string, userStatus: string) {
  const response = await fetch(`http://localhost:8080/users/${id}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ accountStatus: userStatus }),
  });
  const users = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }

  return users;
}

export function disableUser(id: string) {
  const users = fetch(`http://localhost:8080/users/${id}/disable`, {
    method: "PATCH",
  }).then((res) => res.json());
  return users;
}

export function activateUser(id: string) {
  const users = fetch(`http://localhost:8080/users/${id}/activate`, {
    method: "PATCH",
  }).then((res) => res.json());
  return users;
}
