import { Application } from "express";

export const MainApp = (app: Application) => {
  try {
    app.use("/api");
  } catch (error: any) {
    console.log(error);
    console.log();
  }
};
