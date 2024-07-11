import { NextFunction } from "express";

export const getAllUsers = async (
    req: Request, 
    res: Response, 
    next : NextFunction
    
)=> {

  try {
      const users = await User.find();

      return 
  } catch (error) {
    
  }

};