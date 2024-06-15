import { Router } from "express";
import {
  createAdmin,
  signInAdmin,
  verifyAdmin,
} from "../controller/adminController";

const router = Router();
router.route("/create-admin").post(createAdmin);
router.route("/verify-admin/:adminID").patch(verifyAdmin);
router.route("/sign-admin").post(signInAdmin);
export default router;
