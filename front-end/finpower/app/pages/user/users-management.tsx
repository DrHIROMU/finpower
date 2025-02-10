import { getUsers } from "~/api/user/user-api";
import { BasicTable } from "~/components/table/basic-table";
import type { Route } from "./+types/users-management";
import { createColumnHelper } from "@tanstack/react-table";
import { Navigate } from "react-router";

export async function clientLoader() {
  const users = await getUsers();
  return users;
}

export default function UsersManagement({ loaderData }: Route.ComponentProps) {
  const columnHelper = createColumnHelper<User>();

  const columns = [
    columnHelper.accessor("firstName", {
      header: "First Name",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("lastName", {
      header: "Last Name",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("email", {
      header: "Email",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("accountStatus", {
      header: "Status",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("createdAt", {
      header: "Created Time",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("createdBy", {
      header: "Created By",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("id", {
      header: "Action",
      cell: (info) => (
        <button className="w-10 h-10 rounded bg-amber-300">Text</button>
      ),
      footer: (info) => info.column.id,
    }),
  ];

  return (
    <>
      User Management
      <BasicTable data={loaderData} columns={columns} />
    </>
  );
}
