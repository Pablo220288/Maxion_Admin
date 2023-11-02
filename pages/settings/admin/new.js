import AdminForm from "@/components/AdminForm";
import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

export default function AdminNew() {
  return (
    <Layout>
      <div className="mb-4 text-gray-400 text-sm">
        <Link className="hover:text-indigo-500" href={"/settings"}>
          Settings{" "}
        </Link>
        <span>\ </span>
        <Link className="hover:text-indigo-500" href={"/settings/admin"}>
          Admin Configuration{" "}
        </Link>
        <span>\ </span>
        <span className="text-indigo-500">New</span>
      </div>
       <AdminForm title={'New Admin'}/> 
    </Layout>
  );
}
