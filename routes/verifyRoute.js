import express from 'express';
import { verifyEmail } from '../controllers/userController.js'; 
const router = express.Router();
router.get('/:id/verify/:token', verifyEmail);

export default router;