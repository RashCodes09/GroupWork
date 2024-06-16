import { Request, Response } from "express";
import deliveryModel from "../model/deliveryModel";
import adminModel from "../model/adminModel";
import { Types } from "mongoose";

export const createDelivery = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { adminID } = req.params;
    const { email, firstName, lastName, addressName } = req.body;

    const admin: any = await adminModel.findById(adminID);
    if (admin) {
      const delivery: any = await deliveryModel.create({
        email,
        firstName,
        lastName,
        addressName,
        admin: admin,
      });

      await admin?.deliveries.push(new Types.ObjectId(delivery?._id!));
      await admin?.save();

      return res.status(200).json({
        message: "delivery guy created",
        status: 200,
        data: delivery,
      });
    } else {
      return res.status(404).json({
        message: "Invalid Admin ID",
        status: 404,
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "error creating delivery",
      status: 404,
      error: error.message,
    });
  }
};
export const deleteDelivery = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { adminID, deliveryID } = req.params;

    const admin: any = await adminModel.findById(adminID);
    const findDelivery: any = await deliveryModel.findById(deliveryID);
    if (admin && findDelivery) {
      const delivery: any = await deliveryModel.findByIdAndDelete(deliveryID);

      await admin?.deliveries.pull(new Types.ObjectId(delivery?._id!));
      await admin?.save();

      return res.status(200).json({
        message: "delivery guy deleted",
        status: 200,
      });
    } else {
      return res.status(404).json({
        message: "Invalid Admin ID",
        status: 404,
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "error creating delivery",
      status: 404,
      error: error.message,
    });
  }
};
export const viewAllDelivery = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const delivery = await deliveryModel.find();

    return res.status(200).json({
      message: "all delvery found",
      status: 201,
      data: delivery,
    });
  } catch (error) {
    return res.status(404).json({
      message: "error getting delivery",
    });
  }
};
