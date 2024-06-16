import { Response, Request } from "express";
import adminModel from "../model/adminModel";
import bcrypt from "bcryptjs";
import { createAdminMail } from "../utlis/email";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../utlis/constant";

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
    // await createAdminMail(admin);
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

export const signInAdmin = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;

    const admin = await adminModel.findOne({ email });

    if (admin) {
      const passwordCheck = await bcrypt.compare(password, admin.password);
      if (passwordCheck) {
        if (admin.verify) {
          const token = jwt.sign({ id: admin._id }, JWT_SECRET, {
            expiresIn: "1d",
          });

          return res.status(200).json({
            message: "welcome back",
            status: 200,
            data: token,
          });
        } else {
          return res.status(404).json({
            message: "go and verify from your mail",
          });
        }
      } else {
        return res.status(404).json({
          message: "password not matching",
        });
      }
    } else {
      return res.status(404).json({
        message: "error getting agent",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "error creating admin",
      status: 404,
      error: error.message,
    });
  }
};

export const verifyAdmin = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { adminID } = req.params;
    const admin = await adminModel.findById(adminID);
    if (admin) {
      const checkAdmin = await adminModel.findByIdAndUpdate(
        adminID,
        {
          verify: true,
        },
        {
          new: true,
        }
      );

      return res.status(200).json({
        message: "admin verified",
        status: 200,
        data: checkAdmin,
      });
    } else {
      return res.status(404).json({
        message: "admin does not exist",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "admin not verified",
      status: 404,
      error: error.message,
    });
  }
};

export const getAdmin = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { adminID } = req.params;
    const admin = await adminModel.findById(adminID);

    return res.status(201).json({
      message: "admin found",
      status: 200,
      data: admin,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "admin not found",
      status: 404,
      error: error.message,
    });
  }
};
