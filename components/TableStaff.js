import { Tooltip } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

export default function TableStaff({ allStaff }) {
  return (
    <table className="basic mt-4">
      <thead>
        <tr>
          <td>File</td>
          <td>Name</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {allStaff &&
          allStaff.map((staff, index) => (
            <tr key={staff._id}>
              <td>{staff.file}</td>
              <td>
                {staff.name[0].toUpperCase() +
                  staff.name.substring(1) +
                  " " +
                  staff.lastName[0].toUpperCase() +
                  staff.lastName.substring(1)}
              </td>
              <td>
                <div className="flex gap-2 justify-end mt-2">
                  <Tooltip
                    content="Edit"
                    className="border text-indigo-500 border-blue-gray-50 bg-backgroud-body px-2 py-1.5 shadow-xl shadow-black/10"
                  >
                    <Link
                      href={"/staff/edit/" + staff._id}
                      className="flex w-fit rounded-md text-white p-2 hover:bg-blue-900 select-none bg-indigo-500 text-center align-middle font-sans shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      data-ripple-light="true"
                      data-tooltip-target="tooltip-animation"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </Link>
                  </Tooltip>
                  <Tooltip
                    content="Delete"
                    className="border text-indigo-500 border-blue-gray-50 bg-backgroud-body px-2 py-1.5 shadow-xl shadow-black/10"
                  >
                    <Link
                      href={"/staff/delete/" + staff._id}
                      className="flex w-fit rounded-md text-white p-2 hover:bg-pink-600 select-none bg-pink-500 text-center align-middle font-sans shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </Link>
                  </Tooltip>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
