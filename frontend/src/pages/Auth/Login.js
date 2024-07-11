
/*
import React,{useState} from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import {toast}  from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import '../../styles/AuthStyles.css';
import { useAuth } from '../../Context/auth';
const Login = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const [auth,setAuth]=useAuth();
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(email,password);
        try{
            const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password});
            if(res && res.data.success){
                toast.success('Login successfully');
                toast.success(res.data && res.data.message);
                setAuth({...auth,user:res.data.user,token:res.data.token});
                localStorage.setItem('auth',JSON.stringify(res.data));
                navigate('/')
            } else{
                toast.error(res.data.message)
            }

        }catch(error){
             console.log(error)
             toast.error("Something went wrong")
        }
    };

    return (
        <Layout title="Login - Gunjon App">
       <div className ="form-container">
          <h1>Login Now</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputemail" placeholder="Enter your email" required  />
            </div>
            <div className="mb-3">
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Enter your password" required />
            </div>
            <div><button type="submit" className="btn btn-primary">Login</button></div>
            <button type="button" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>Forgot password?</button>
            </form>

       </div>
      
    </Layout>
    );
    }

export default Login;
*/


import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import '../../styles/AuthStyles.css';
import { useAuth } from '../../Context/auth';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth(); // Accessing authentication context
    const navigate = useNavigate();
    /*
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, { email, password });
            if (res && res.data.success) {
                toast.success('Login successfully');
                toast.success(res.data && res.data.message);
                // Update auth state and save to local storage
                setAuth({
                    user: res.data.user,
                    token: res.data.token,
                    // Include question attribute if available in response
                    // This assumes that your backend includes the question attribute in the response
                    question: res.data.user.question ,
                    answer:res.data.user.answer// Adjust this line based on your backend response structure
                });
                localStorage.setItem('auth', JSON.stringify(res.data)); // Save auth data to local storage
                navigate('/');
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    */

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, { email, password });
          if (res && res.data.success) {
            toast.success('Login successfully');
            toast.success(res.data && res.data.message);
            console.log('Login Response:', res.data); // Log the entire response
            setAuth({
              user: res.data.user,
              token: res.data.token,
            });
            localStorage.setItem('auth', JSON.stringify(res.data)); // Save auth data to local storage
            console.log('Saved Auth Data:', JSON.parse(localStorage.getItem('auth'))); // Log saved data to confirm
            navigate('/');
          } else {
            toast.error(res.data.message);
          }
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong");
        }
      };
      
    return (
        
        <Layout title="Login - Gunjon App">
       <div className ="form-container">
          <h1>Login Now</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputemail" placeholder="Enter your email" required  />
            </div>
            <div className="mb-3">
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Enter your password" required />
            </div>
            <div><button type="submit" className="btn btn-primary">Login</button></div>
            <button type="button" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>Forgot Password?</button>
            </form>

       </div>
      
    </Layout>
    );
}

export default Login;
