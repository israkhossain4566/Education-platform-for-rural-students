import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";
import {generateTokenAndSetCookie} from '../middlewares/authMiddleware.js';
import tokenModel from "../models/tokenModel.js";
import crypto from 'crypto';
import { sendEmail } from "../utils/sendEmail.js";
/*
export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address, question, answer, gender } = req.body;
        if (!name || !email || !password || !phone || !address || !question || !answer || !gender) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if the user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists. Please login.' });
        }

        // Hash the password
        const hashedPassword = await hashPassword(password);

        // Create a new user
        const newUser = await userModel({
            name,
            email,
            phone,
            address,
            password: hashedPassword,
            question,
            answer,
            gender
        }).save();
        const newtoken=await tokenModel({
            userId:newUser._id,
            token:crypto.randomBytes(32).toString("hex")

        }).save();
        const url=`${process.env.BASE_URL}users/${newUser._id}/verify/${newtoken.token}`
        await sendEmail(newUser.email,"Verify email",url);
        res.status(201).send({message:"An email is sent to your account"});
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error in registration' });
    }
};



export const loginController=async(req,res)=>{
     try{
        const {email,password}=req.body
        if (!email || !password){
            return res.status(404).send({
                success:false,
                message:'Invalid Username or password'
            })
        }
        const user=await userModel.findOne({email})
        if (!user){
            return res.status(404).send({
                success:false,
                message:'Email is not registered'
            })
        }
        const match =await comparePassword(password,user.password)
        if (!match){
            return res.status(200).send({
                success:false,
                message:'Invalid Password'
            })
        }
        
        if (!user.verified){
            let newtoken=await tokenModel.findOne({userId:user._id});
            if(!newtoken){
                token=await tokenModel({
                    userId:user._id,
                    token:crypto.randomBytes(32).toString("hex")
        
                }).save();

            }
            const url=`${process.env.BASE_URL}users/${user._id}/verify/${newtoken.token}`
            await sendEmail(user.email,"Verify email",url);
            return res.status(400).send({message:"An email is sent to your account"})
        }
        
        
        
        const token=await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d',})
        await generateTokenAndSetCookie(user._id, res);
        res.status(200).send({
            success:true,
            message:'login successfully',
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
                question: user.question,
                answer:user.answer,
                gender:user.gender,
                role:user.role,


            },
            token,
        })
     } catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in login',
            error
        })
     }
};
*/
export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address, question, answer, gender } = req.body;
        if (!name || !email || !password || !phone || !address || !question || !answer || !gender) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if the user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists. Please login.' });
        }

        // Hash the password
        const hashedPassword = await hashPassword(password);

        // Create a new user
        const newUser = await new userModel({
            name,
            email,
            phone,
            address,
            password: hashedPassword,
            question,
            answer,
            gender
        }).save();
        /*
        const newToken = await new tokenModel({
            userId: newUser._id,
            token: crypto.randomBytes(32).toString("hex")
        }).save();

        const url = `${process.env.BASE_URL}usermail/${newUser._id}/verify/${newToken.token}`;
        await sendEmail(newUser.email, "Verify email", url);

        res.status(201).send({ message: "An email is sent to your account" });
    */
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error in registration' });
    }
};
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: 'Invalid Username or Password'
            });
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not registered'
            });
        }

        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(400).send({
                success: false,
                message: 'Invalid Password'
            });
        }

        if (!user.verified) {
            let newToken = await tokenModel.findOne({ userId: user._id });
            if (!newToken) {
                newToken = await new tokenModel({
                    userId: user._id,
                    token: crypto.randomBytes(32).toString("hex")
                }).save();
            }

            //const url = `${process.env.BASE_URL}usermail/${user._id}/verify/${newToken.token}`;
            //await sendEmail(user.email, "Verify email", url);
            //return res.status(400).send({ message: "An email is sent to your account" });
        }

        const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.cookie('token', token, { httpOnly: true });

        res.status(200).send({
            success: true,
            message: 'Login successful',
            user: {
                _id: user._id,

                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                question: user.question,
                answer: user.answer,
                gender: user.gender,
                role: user.role,
            },
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Error in login',
            error
        });
    }
};


export const ResetController=async(req,res)=>{
    try{
        const {email,answer,newPassword}=req.body
        if (!email){
            res.status(400).send({message:'Email is required'})
        }
        if (!answer){
            res.status(400).send({message:'Question is required'})
        }
        if (!newPassword){
            res.status(400).send({message:'New password is required'})
        }
        //check
        const user=await userModel.findOne({email,answer})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Wrong Email or answer'
            })
        }
    const hashed=await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id,{password:hashed});
    res.status(200).send({
        success:true,
        message:"Password Reset Successfully",
    });
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Something went wrong',
            error,
        });
    }
};



export const testController=(req, res)=>{
    //console.log('Protected route')
    res.send('Protected Routes');

};

export const getSecurityQuestionController = async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) {
        return res.status(400).send({
          success: false,
          message: "Email is required",
        });
      }
  
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "User not found",
        });
      }
  
      res.status(200).send({
        success: true,
        question: user.question,
      });
    } catch (error) {
      console.error('Error retrieving security question:', error);
      res.status(500).send({
        success: false,
        message: "Error retrieving security question",
        error: error.message,
      });
    }
  };

export const logoutController=async(req,res)=>{
    try{
        res.cookie("JWT","",{maxAge:0});
        res.status(200).json({message:"Logged out Successfully"});
    }catch(error){
        console.log("Error in logic controller",error.message);
        res.status(500).json({error:"Interval Server Error"})
    }
};