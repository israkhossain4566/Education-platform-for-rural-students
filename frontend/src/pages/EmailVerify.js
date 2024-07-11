/*

import React, { useState,useEffect,Fragment} from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import { toast } from 'react-toastify';
import { Link,useParams } from 'react-router-dom';
import '../../styles/AuthStyles.css';
import { useAuth } from '../../Context/auth';

const EmailVerify = () => {
  const [validUrl,setValidUrl]=useState(false);
  const param=useParams();
  useEffect(()=>{
    const verifyEmailUrl=async()=>{
        try {
            const url=`http://localhost:8080/api/users/${param.id}/verify/${param.token}`
            const{data}=await axios.get(url);
            console.log(data);
            setValidUrl(true);
        } catch (error) {
            console.log(error)
            setValidUrl(false)
            
        }
    };
    verifyEmailUrl()
  },[param])
  return (
    <Fragment>
        { validUrl?(
            <div className={".container"}>
                <h1>Email verified successfully</h1>
                <Link to="/login">
                     <button className=".green-btn">Login</button>
                </Link>
            </div>
        ):(<h1> 404 Not Found </h1>)}
    </Fragment>
    
  )
};

export default EmailVerify;
*/
import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../styles/AuthStyles.css';

const EmailVerify = () => {
    const [validUrl, setValidUrl] = useState(false);
    const param = useParams();

    useEffect(() => {
        const verifyEmailUrl = async () => {
            const url = `http://localhost:8080/api/v1/usermail/${param.id}/verify/${param.token}`;
            try {
                console.log(`Requesting verification for URL: ${url}`);
                const { data } = await axios.get(url);
                console.log(data);
                setValidUrl(true);
            } catch (error) {
                console.error(`Error verifying URL: ${url}`, error);
                setValidUrl(false);
            }
        };
        verifyEmailUrl();
    }, [param]);

    return (
        <Fragment>
            {validUrl ? (
                <div className="container">
                    <h1>Email verified successfully</h1>
                    <Link to="/login">
                        <button className="green-btn">Login</button>
                    </Link>
                </div>
            ) : (
                <h1>404 Not Found. You are on the wrong page.</h1>
            )}
        </Fragment>
    );
};

export default EmailVerify;
