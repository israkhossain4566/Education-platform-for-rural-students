
import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js';

export const requireSignIn=async(req,res,next)=>{
    //const decode=JWT.verify(req.headers.authorization,process.env.JWT_SECRET)
    try{
        const decode=JWT.verify(req.headers.authorization,process.env.JWT_SECRET);
        req.user=decode;
        next();

    } catch(error){
        console.log(error);
    }

};


export const isAdmin=async(req,res,next)=>{
    try{
        const user=await userModel.findById(req.user._id)
        if (user.role!==1){
            return res.status(401).send({
                  success:false,
                  message:'UnAuthorized Access',
            })
        }else{
            next();
        }
        
    }catch(error){
        console.log(error);
        res.status(401).send({
            success:false,
            error,
            message:"Error in admin middleware"
        })
    }
}

export const generateTokenAndSetCookie = async (_id, res) => {
    try {
        
        console.log("starts_her", _id )
        const token = JWT.sign({_id }, process.env.JWT_SECRET, {
            expiresIn: "15d",
        });

        // Log the generated token
        //console.log("Generated JWT token:", token);

        // Set the cookie
        res.cookie("JWT", token, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "development",
        });

        // Log cookie details
        //console.log("Cookie set:", res.getHeaders()["set-cookie"]);
    } catch (error) {
        console.error("Error generating token and setting cookie:", error);
    }
};




