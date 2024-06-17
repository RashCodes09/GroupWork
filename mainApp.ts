import { Application, NextFunction } from "express";
import { Request, Response } from "express";
import router from "./router/adminRouter";
import routerDelivery from "./router/deliveryRouter";

import { mainError } from "./error/mainError";
import { HTTP } from "./utlis/enum";
import { errorHandler } from "./error/errorHandler";

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

  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(
      new mainError({
        name: "Route Error",
        message: `This: "${req.originalUrl}" is not a valid route`,
        status: HTTP.BAD_RESPONSE,
        success: false,
      })
    );
  });

  app.use(errorHandler);

  app.use("/api", router);
  app.use("/api", routerDelivery);
};
