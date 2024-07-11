import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    question:{
        type:String,
        required:true,

    },

    answer:{
        type:String,
        required:true,

    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"],
    },
    profilePic:{
        type:String,
        default:"",
    },

    role:{
        type:Number,
        default:0,
    },
    verified:{
        type:Boolean,
        default:false,
    },
 },
 {timestamps:true}
);
export default mongoose.model('users',userSchema); 