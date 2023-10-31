import { mongooseConnect } from "@/lib/mongoose";
import { StaffModel } from "@/models/Staff";

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();
  // await isAdminRequest(req, res)

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await StaffModel.findOne({ _id: req.query.id }));
    } else {
      res.json(await StaffModel.find());
    }
  }

  if (method === "POST") {
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
    } = req.body;
    const StaffDoc = await StaffModel.create({
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
    });
    res.json(StaffDoc);
  }

  if (method === "PUT") {
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

  /*if (method === "DELETE") {
      if (req.query?.id) {
        await Staff.deleteOne({ _id: req.query?.id });
        res.json(true);
      }
    } */
}
