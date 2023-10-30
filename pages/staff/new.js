import Layout from "@/components/Layout";
import StaffForm from "@/components/StaffForm";
import Link from "next/link";

export default function StaffNew() {
  return (
    <Layout>
      <div className="mb-4 text-gray-400 text-sm">
        <Link className="hover:text-indigo-500" href={"/staff"}>
          Staff{" "}
        </Link>
        <span>\ </span>
        <span className="text-indigo-500">New Staff</span>
      </div>
      <StaffForm title={'New Staff'}/>
    </Layout>
  );
}
