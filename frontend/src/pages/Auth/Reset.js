

import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../styles/AuthStyles.css';
//import { useAuth } from '../../Context/auth';

const Reset = () => {
  const location = useLocation();
  const { email, question } = location.state || {};
  const [answer, setAnswer] = useState("");
  const [newPassword, setPassword] = useState("");
  //const [auth, setAuth] = useAuth(); // Accessing authentication context
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/reset`, { email, newPassword, answer });
      if (res && res.data.success) {
        toast.success('Password reset successfully');
        navigate('/login');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Reset Password - Gunjon App">
      <div className="form-container">
        <h1>Reset Now</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              placeholder={question}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter your new password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Reset</button>
        </form>
      </div>
      <h1>Reset Password</h1>
      {email && (
        <div>
          <p>Email: {email}</p>
          <p>Security Question: {question}</p>
        </div>
      )}
      {!email && <p>No security question found. Please go back and try again.</p>}
    </Layout>
  );
};

export default Reset;
