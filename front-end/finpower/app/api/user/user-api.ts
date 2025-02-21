import type { SearchUserRequest } from "~/types/user/search-user-request";

export async function getUsers() {
  const response = await fetch("http://localhost:8080/users");
  const users = await response.json();
  return users;
}

export async function searchUsers(conditions: SearchUserRequest) {
  const response = await fetch("http://localhost:8080/users/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(conditions),
  });
  const users = await response.json();
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
