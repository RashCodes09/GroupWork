import { iDelivery } from "../utlis/interface";
import { Schema, Document, model } from "mongoose";

interface iDeliveryData extends iDelivery, Document {}

const deliveryModel = new Schema<iDeliveryData>({
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
  addressName: {
    type: String,
  },
  avatar: {
    type: String,
  },
});
export default model("deliverys", deliveryModel);
