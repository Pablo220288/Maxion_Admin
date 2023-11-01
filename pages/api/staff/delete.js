import { mongooseConnect } from "@/lib/mongoose";
import { StaffModel } from "@/models/Staff";

export default async function handle(req, res) {
  await mongooseConnect();
  // await isAdminRequest(req, res)

  await StaffModel.deleteOne({ _id: req.query?.id });
  res.json(true);
}
