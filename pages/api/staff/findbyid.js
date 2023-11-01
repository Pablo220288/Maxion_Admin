import { mongooseConnect } from "@/lib/mongoose";
import { StaffModel } from "@/models/Staff";

export default async function handle(req, res) {
  await mongooseConnect();
  // await isAdminRequest(req, res)
  res.json(await StaffModel.findOne({ _id: req.query.id }));
}
