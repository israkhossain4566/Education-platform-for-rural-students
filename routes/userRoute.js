
import express from 'express';
import { protectRoute } from '../middlewares/protectRoute.js';
import { getUsersForSidebar,getUserById } from '../controllers/userController.js';
import userModel from '../models/userModel.js';

const router = express.Router();
router.get('/', protectRoute, getUsersForSidebar);
router.get('/:id', protectRoute,getUserById); 


export default router;

