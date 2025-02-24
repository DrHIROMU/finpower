import { getUsers, changeUserStatus, searchUsers } from "~/api/user/user-api";
import { BasicTable } from "~/components/table/basic-table";
import { createColumnHelper } from "@tanstack/react-table";
import { Form, NavLink, useActionData } from "react-router";
import { useEffect, useState } from "react";

import type { Route } from "./+types/users-management";
import { formatDateTime } from "~/utils/date-utils";
import type { User } from "~/types/user/user";
import { AccountStatus } from "~/types/user/user";
import type { SearchUserRequest } from "~/types/user/search-user-request";
import { getFormStringValue } from "~/utils/form-utils";

export async function clientLoader() {
  const users = await getUsers();
  return users;
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  let formData = await request.formData();
  let intent = formData.get("intent");

  const conditions: SearchUserRequest = {
    firstName: getFormStringValue(formData, "firstName"),
    lastName: getFormStringValue(formData, "lastName"),
    email: getFormStringValue(formData, "email"),
    accountStatus: getFormStringValue(formData, "accountStatus"),
  };

  if(intent === "query"){
    return await searchUsers(conditions);
  }else if(intent === "export"){

  }
}

export default function UsersManagement({ loaderData }: Route.ComponentProps, ) {
  const [users, setUsers] = useState<User[]>(loaderData);
  const columnHelper = createColumnHelper<User>();
  const actionData = useActionData<User[]>();

  useEffect(() => {
    if(actionData){
      setUsers(actionData);
    }    
  }, [actionData]);

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
            className="px-4 py-1 bg-rose-700 text-white text-center text-base font-semibold rounded hover:bg-red-800 cursor-pointer"
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
      <Form
        method="post"
        className="bg-gray-100 max-w-6xl mx-auto p-6 shadow-md rounded-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              id="first-name"
              name="firstName"
              className="w-full p-2 border bg-white hover:bg-gray-50 border-gray-300 rounded-md focus:outline-none focus:border-gray-400 focus:ring focus:ring-gray-300 
"
              type="text"
            />
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              id="last-name"
              name="lastName"
              className="w-full p-2 border bg-white hover:bg-gray-50 border-gray-300 rounded-md focus:outline-none focus:border-gray-400 focus:ring focus:ring-gray-300 "
              type="text"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              className="w-full p-2 border bg-white hover:bg-gray-50 border-gray-300 rounded-md focus:outline-none focus:border-gray-400 focus:ring focus:ring-gray-300 "
              type="text"
            />
          </div>

          <div>
            <label
              htmlFor="account-status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              id="account-status"
              name="accountStatus"
              className="w-full p-2 border bg-white hover:bg-gray-50 border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            >
              <option value="">ALL</option>
              <option value="1">ACTIVE</option>
              <option value="0">INACTIVE</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          <button
            type="submit"
            name="intent"
            value="query"
            className="px-4 py-2 bg-cyan-700 text-white rounded-md hover:bg-cyan-800 cursor-pointer"
          >
            Query
          </button>
          <button
            type="submit"
            name="intent"
            value="export"
            className="px-4 py-2 bg-cyan-700 text-white rounded-md hover:bg-cyan-800 cursor-pointer"
          >
            Export
          </button>
        </div>
      </Form>
      <BasicTable data={users} columns={columns} />
    </>
  );
}
