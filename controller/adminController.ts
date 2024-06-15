import { Response, Request } from "express";
import adminModel from "../model/adminModel";
import bcrypt from "bcryptjs";

export const createAdmin = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { firstName, lastName, email, addressName, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const admin = await adminModel.create({
      firstName,
      lastName,
      email,
      addressName,
      role: "admin",
      password: hashed,
    });
    return res.status(200).json({
      message: "admin created",
      status: 200,
      data: admin,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error creating admin",
      status: 404,
      error: error.message,
    });
  }
};
