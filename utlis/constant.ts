import env from "dotenv";
env.config();

export const PORT = parseInt(process.env.PORT!);
export const URL = process.env.MONGODB_LOCAL! as string;
