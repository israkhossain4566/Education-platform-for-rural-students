import express from "express"
import userModel from "../models/userModel.js";
import tokenModel from "../models/tokenModel.js";
import {registerController,logoutController,loginController,testController,getSecurityQuestionController,ResetController} from "../controllers/authController.js"
import { requireSignIn,isAdmin} from '../middlewares/authMiddleware.js';
//router object
const router=express.Router()

//routing
router.post('/register',registerController)

/*
router.get("/:id/verify/:token", async (req, res) => {
    try {
        console.log(`Received verification request for id: ${req.params.id}, token: ${req.params.token}`);

        const user = await userModel.findOne({ _id: req.params.id });
        if (!user) {
            console.log("User not found");
            return res.status(400).send({ message: "Invalid link" });
        }

        const token = await tokenModel.findOne({
            userId: user._id,
            token: req.params.token
        });
        if (!token) {
            console.log("Token not found");
            return res.status(400).send({ message: "Invalid link" });
        }

        user.verified = true;
        await user.save();
        await token.remove();

        console.log("Email verified successfully");
        res.status(200).json({
            success: true,
            message: 'Email verified successfully',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                question: user.question,
                answer: user.answer,
                gender: user.gender
            },
        });
    } catch (error) {
        console.error("Error in verification:", error);
        res.status(500).json({ success: false, message: 'Error in verification' });
    }
});
*/
router.post('/login',loginController)

router.post('/logout',logoutController)


router.get('/test',requireSignIn,isAdmin,testController)

router.get('/user-auth',requireSignIn,(req,res)=>{
     res.status(200).send({ok:true})
});
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
});
router.post('/get-security-question', getSecurityQuestionController);

router.post('/reset', ResetController);
export default router