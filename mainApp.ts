import { Application } from "express";
import { Request, Response } from "express";
import router from "./router/adminRouter";

export const mainApp = async (app: Application) => {
  // default route

  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "Welcome to cleaning api",
      });
    } catch (error: any) {
      return res.status(404).json({
        message: "error loading",
        error: error.message,
      });
    }
  });
  app.use("/api", router);
};
