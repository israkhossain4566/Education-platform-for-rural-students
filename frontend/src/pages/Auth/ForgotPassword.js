
/*
const ForgotPassword = () => {
  return (
    
  );
}

export default ForgotPassword;
*/
/*

import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import '../../styles/AuthStyles.css';
import { useAuth } from '../../Context/auth';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [auth, setAuth] = useAuth(); // Accessing authentication context
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`, { email });
            if (res && res.data.success) {
                toast.success('Reset successfully');
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
                navigate('/reset');
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
            <div className="form-container">
                <h1>Reset Now</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputemail" placeholder="Enter your email" required />
                    </div>
                    <div><button type="submit" className="btn btn-primary">Reset</button></div>
                
                </form>
            </div>
        </Layout>
    );
}

export default ForgotPassword;
*/
import React, { useState } from 'react';
import axios from 'axios';
//import Layout from '../../components/Layout/Layout';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import '../../styles/AuthStyles.css';
//import { useAuth } from '../../Context/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/get-security-question`, { email });
      if (res.data.success) {
        setQuestion(res.data.question);
        navigate('/reset', { state: { email, question: res.data.question } });
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error('Error fetching security question:', error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className ="form-container">
      <h1>Get Security Question</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Get Question</button>
      </form>
      {question && (
        <div>
          <h3>Your Security Question:</h3>
          <p>{question}</p>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;

