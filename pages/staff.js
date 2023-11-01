import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import TableStaff from "@/components/TableStaff";
import Spinner from "@/components/Spinner";

export default function Staff() {
  const [allStaff, setAllStaff] = useState([]);
  const [isStaff, setIsStaff] = useState(false);

  const getStaff = async () => {
    try {
      setIsStaff(true);
      const response = await axios.get("/api/staff");
      setAllStaff(response.data);
    } catch (error) {
      console.error("Error fetching staff data:", error);
    } finally {
      setIsStaff(false);
    }
  };

  useEffect(() => {
    getStaff();
  }, []);

  return (
    <Layout>
      <div className="mt-2 flex justify-between">
        <div className="flex items-center gap-2">
          <h4 className="block font-sans text-2xl leading-snug tracking-normal text-indigo-500 antialiased">
            Staff
          </h4>
          {isStaff && <Spinner color={"#eeeeee"} />}
        </div>
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
      {allStaff.length > 0 && <TableStaff allStaff={allStaff} />}
    </Layout>
  );
}
