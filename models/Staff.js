import { Schema, model, models } from "mongoose";

const StaffSchema = new Schema(
  {
    file: { type: String, required: true },
    company: { type: String, required: true },
    admission: { type: Date, required: true },
    lastName: { type: String, required: true },
    name: { type: String, required: true },
    birthdate: { type: Date, required: true },
    civilStatus: { type: String, required: true },
    dni: { type: String, required: true },
    cuil: { type: String, required: true },
    home: { type: String, required: true },
    location: { type: String, required: true },
    gender: { type: String, required: true },
    mo: { type: String, required: true },
    condition: { type: String, required: true },
    departament: { type: String, required: true },
    sector: { type: String, required: true },
    hierarchy: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Staff = models?.Staff || model("Staff", StaffSchema);