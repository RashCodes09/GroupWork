import { Router } from "express";
import {
  createAdmin,
  signInAdmin,
  verifyAdmin,
  getAdmin,
} from "../controller/adminController";

const router = Router();
router.route("/create-admin").post(createAdmin);
router.route("/verify-admin/:adminID").patch(verifyAdmin);
router.route("/sign-admin").post(signInAdmin);
router.route("/get-admin/:adminID").get(getAdmin);
export default router;
