import { mongooseConnect } from "@/lib/mongoose";
import { StaffModel } from "@/models/Staff";

export default async function handle(req, res) {
  await mongooseConnect();
  // await isAdminRequest(req, res)

  const {
    file,
    company,
    admission,
    lastName,
    name,
    birthdate,
    civilStatus,
    dni,
    cuil,
    home,
    location,
    gender,
    mo,
    condition,
    departament,
    sector,
    hierarchy,
    _id,
  } = req.body;
  await StaffModel.updateOne(
    { _id },
    {
      file,
      company,
      admission: new Date(admission),
      lastName,
      name,
      birthdate: new Date(birthdate),
      civilStatus,
      dni,
      cuil,
      home,
      location,
      gender,
      mo,
      condition,
      departament,
      sector,
      hierarchy,
    }
  );
  res.json(true);
}
