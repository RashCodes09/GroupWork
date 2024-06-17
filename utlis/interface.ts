import { Document } from "mongoose";
import { HTTP } from "./enum";

export interface iAdmin {
  firstName: string;
  lastName: string;
  email: string;
  verify: boolean;
  addressName: string;
  password: string;
  role: string;
  deliveries: Array<string>;
}

export interface iAdminData extends iAdmin, Document {}

export interface iDelivery {
  firstName: string;
  lastName: string;
  email: string;
  addressName: string;
  avatar: string;
  role: string;
  admin: {};
}

export interface iError {
  name: string;
  message: string;
  status: HTTP;
  success: boolean;
}
