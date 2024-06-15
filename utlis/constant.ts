import env from "dotenv";
env.config();

export const PORT = parseInt(process.env.PORT!);
export const URL = process.env.MONGODB_LOCAL! as string;
export const GOOGLE_ID = process.env.GOOGLE_ID! as string;
export const GOOGLE_SECRET = process.env.GOOGLE_SECRET! as string;
export const GOOGLE_URL = process.env.GOOGLE_URL! as string;
export const GOOGLE_REFRESH = process.env.GOOGLE_REFRESH! as string;
export const JWT_SECRET = process.env.JWT_SECRET! as string;
