
import express from "express"
import { sendMessage,getMessage } from "../controllers/messageController.js";
import {protectRoute} from  '../middlewares/protectRoute.js';

const router=express.Router();
router.get("/:_id",protectRoute,getMessage);
router.post("/send/:_id",protectRoute,sendMessage);
export default router;
