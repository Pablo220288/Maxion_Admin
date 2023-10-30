import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import StaffForm from "@/components/StaffForm";

export default function EditStaffPage() {
  const [staffInfo, setStaffInfo] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/staff?id=" + id).then((response) => {
      setStaffInfo(response.data);
    });
  }, [id]);
  return (
    <Layout>
      <div className="mb-4 text-gray-400 text-sm">
        <Link className="hover:text-black" href={"/staff"}>
          Staff{" "}
        </Link>
        <span>\ </span>
        <span className="text-black">Edit Staff</span>
      </div>
      {staffInfo && <StaffForm {...staffInfo} title={'Edit Staff'}/>}
    </Layout>
  );
}