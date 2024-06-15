import { iAdmin } from "../utlis/interface";
import { Schema, Document, model, Types } from "mongoose";

interface iAdminData extends iAdmin, Document {}

const adminModel = new Schema<iAdminData>({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
  },
  addressName: {
    type: String,
  },
  password: {
    type: String,
  },
  deliveries: [
    {
      type: Types.ObjectId,
      ref: "deliveries",
    },
  ],
});

export default model("admins", adminModel);
