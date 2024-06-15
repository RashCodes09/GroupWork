import { Router } from "express";
import {
  createDelivery,
  deleteDelivery,
} from "../controller/deliveryController";

const routerDelivery: Router = Router();

routerDelivery.route("/create-delivery/:adminID").post(createDelivery);
routerDelivery
  .route("/delete-delivery/:adminID/:deliveryID")
  .delete(deleteDelivery);

export default routerDelivery;
