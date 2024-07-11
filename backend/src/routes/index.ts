import { Router } from "express";
import chatRoutes from "./chats-routes.js";
import userRoutes from "./user-routes.js";
const userRouter = Router();

userRouter.use("/user", userRoutes); //domain/api/v1/user
userRouter.use("/chats", chatRoutes); //domain/api/v1/chats


export default userRouter;
