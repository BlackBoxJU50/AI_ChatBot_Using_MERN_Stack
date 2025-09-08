import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find();
    return res.status(200).json({ Message: "OK", users });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ Message: "ERROR", cause: error.message });
  }
};
