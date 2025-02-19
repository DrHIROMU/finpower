import { getUsers, changeUserStatus } from "~/api/user/user-api";
import { BasicTable } from "~/components/table/basic-table";
import { createColumnHelper } from "@tanstack/react-table";
import { Form, NavLink } from "react-router";
import { useState } from "react";

import type { Route } from "./+types/users-management";
import { formatDateTime } from "~/utils/date-utils";
import type { User } from "~/types/user/user";
import { AccountStatus } from "~/types/user/user";
import type { QueryUserRequest } from "~/types/user/query-user-request";
import { getFormStringValue } from "~/utils/form-utils";

export async function clientLoader() {
  const users = await getUsers();
  return users;
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  let formData = await request.formData();
  let intent = formData.get("intent");

  const queryRequest: QueryUserRequest = {
    firstName: getFormStringValue(formData, "firstName"),
    lastName: getFormStringValue(formData, "lastName"),
    email: getFormStringValue(formData, "email"),
    accountStatus: getFormStringValue(formData, "accountStatus"),
  };
  console.log(queryRequest, intent);
}

export default function UsersManagement({ loaderData }: Route.ComponentProps) {
  const [accountStatus, setAccountStatus] = useState<object | null>();
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

  const handleResetForm = () => {
    console.log("reset");
    console.log(accountStatus);
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
      <Form method="post" className="bg-gray-200">
        <label htmlFor="first-name">First Name</label>
        <input id="first-name" name="firstName" className="w-64" type="text" />
        <label htmlFor="last-name">Last Name</label>
        <input id="last-name" name="lastName" className="w-64" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" className="w-64" type="text" />
        <label htmlFor="account-status">Status</label>
        <select id="account-status" name="accountStatus" className="w-64">
          <option value="1">ACTIVE</option>
          <option value="0">INACTIVE</option>
        </select>

        <div className="flex gap-2 mt-10">
          <button type="submit" name="intent" value="query">
            Query
          </button>
          <button onClick={handleResetForm}>Reset</button>
          <button type="submit" name="intent" value="export">
            Export
          </button>
        </div>
      </Form>
      <BasicTable data={users} columns={columns} />
    </>
  );
}
