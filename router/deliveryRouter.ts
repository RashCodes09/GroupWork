import { Router } from "express";
import {
  createDelivery,
  deleteDelivery,
  viewAllDelivery,
} from "../controller/deliveryController";

const routerDelivery: Router = Router();

routerDelivery.route("/create-delivery/:adminID").post(createDelivery);
routerDelivery
  .route("/delete-delivery/:adminID/:deliveryID")
  .delete(deleteDelivery);
routerDelivery.route("/view-all-delivery").delete(viewAllDelivery);

export default routerDelivery;
