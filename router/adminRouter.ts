import { Router } from "express";
import { createAdmin } from "../controller/adminController";

const router = Router();
router.route("/create-admin").post(createAdmin);
export default router;
