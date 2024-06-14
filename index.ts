import express, { Application } from "express";
import cors from "cors";
// import { PORT } from "./utlis/constant";
import { IncomingMessage, ServerResponse, Server } from "node:http";
const PORT = 3434;
const app: Application = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

const server: Server<typeof IncomingMessage, typeof ServerResponse> =
  app.listen(PORT, () => {
    console.clear();
  });

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException", error);

  process.exit(1);
});

process.on("unhandleRejection", (reason: any) => {
  console.log("unhandleRejection", reason);
  server.close(() => {
    process.exit(1);
  });
});
