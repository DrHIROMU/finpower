import { getUsers, disableUser, activateUser } from "~/api/user/user-api";
import { BasicTable } from "~/components/table/basic-table";
import type { Route } from "./+types/users-management";
import { createColumnHelper } from "@tanstack/react-table";
import { NavLink } from "react-router";
import { formatDateTime } from "~/utils/date-utils";

export async function clientLoader() {
  const users = await getUsers();
  return users;
}

export default function UsersManagement({ loaderData }: Route.ComponentProps) {
  const columnHelper = createColumnHelper<User>();

  const handleUserStatusChange = async (id: string, userStatus: string) => {
    let users;
    if(userStatus === "ACTIVE"){
      users = await disableUser(id);
    }else if(userStatus === "INACTIVE"){
      users = await activateUser(id);
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
            className="inline-block px-4 py-1 bg-sky-600 text-white text-center text-base font-semibold rounded hover:bg-sky-700"
            to={`${info.getValue()}/edit`}
          >
            Edit
          </NavLink>
          <button
            type="button"
            className="px-4 py-1 bg-rose-500 text-white text-center text-base font-semibold rounded hover:bg-red-700 cursor-pointer"
            onClick={() => {
              handleUserStatusChange(info.getValue(), info.row.getValue("accountStatus"));
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
      <BasicTable data={loaderData} columns={columns} />
    </>
  );
}
