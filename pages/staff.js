import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Tooltip } from "@material-tailwind/react";
import TableStaff from "@/components/TableStaff";

export default function Staff() {
  const [allStaff, setAllStaff] = useState([]);

  const getStaff = async () => {
    const res = await axios.get("/api/staff");
    await axios.get("/api/staff").then((response) => {
      setAllStaff(response.data);
    });
    console.log(res.data);
  };

  useEffect(() => {
    getStaff();
  }, []);

  console.log(allStaff);
  return (
    <Layout>
      <div className="mt-2 flex justify-between">
        <h4 className="block font-sans text-2xl leading-snug tracking-normal text-indigo-500 antialiased">
          Staff
        </h4>
        <Link
          className="flex w-fit rounded-md text-white p-2 hover:bg-blue-900 select-none bg-indigo-500 text-center align-middle font-sans shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          href={"/staff/new"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>
        </Link>
      </div>
      {allStaff && <TableStaff allStaff={allStaff} />}
    </Layout>
  );
}
