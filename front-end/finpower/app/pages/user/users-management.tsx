import { getUsers, changeUserStatus } from "~/api/user/user-api";
import { BasicTable } from "~/components/table/basic-table";
import { createColumnHelper } from "@tanstack/react-table";
import { NavLink } from "react-router";
import { useState } from "react";

import type { Route } from "./+types/users-management";
import { formatDateTime } from "~/utils/date-utils";
import type { User } from "~/types/user/user";
import { AccountStatus } from "~/types/user/user";

export async function clientLoader() {
  const users = await getUsers();
  return users;
}

export default function UsersManagement({ loaderData }: Route.ComponentProps) {
  const [users, setUsers] = useState<User[]>(loaderData);
  const columnHelper = createColumnHelper<User>();

  const handleUserStatusChange = async (id: string, userStatus: string) => {
    try {
      const newStatus: AccountStatus =
        userStatus === AccountStatus.ACTIVE
          ? AccountStatus.INACTIVE
          : AccountStatus.ACTIVE;

      let updatedUser = await changeUserStatus(id, newStatus);

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id
            ? { ...user, accountStatus: updatedUser.accountStatus }
            : user
        )
      );
    } catch (error) {
      console.log(error);
      //TODO modal to show error
    }
  };

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
      cell: (info) => <>{formatDateTime(info.getValue())}</>,
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
        <div className="flex gap-2">
          <NavLink
            className="inline-block px-4 py-1 bg-teal-700 text-white text-center text-base font-semibold rounded hover:bg-sky-700"
            to={`${info.getValue()}/edit`}
          >
            Edit
          </NavLink>
          <button
            type="button"
            className="px-4 py-1 bg-rose-700 text-white text-center text-base font-semibold rounded hover:bg-red-700 cursor-pointer"
            onClick={() => {
              handleUserStatusChange(
                info.getValue(),
                info.row.getValue("accountStatus")
              );
            }}
          >
            {info.row.getValue("accountStatus") === "ACTIVE"
              ? "Disable"
              : "Activate"}
          </button>
        </div>
      ),
      footer: (info) => info.column.id,
    }),
  ];

  return (
    <>
      User Management
      <BasicTable data={users} columns={columns} />
    </>
  );
}
