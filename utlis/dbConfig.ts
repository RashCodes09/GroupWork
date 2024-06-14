import { connect } from "mongoose";
import { URL } from "./constant";

export const dbConfig = async () => {
  try {
    await connect(URL).then(() => {
      console.log("group server done");
    });
  } catch (error: any) {
    console.log(error);
  }
};
