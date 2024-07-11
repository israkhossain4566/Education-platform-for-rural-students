/*
import {useState,useEffect,useContext,createContext} from 'react';
import axios from 'axios';
const AuthContext=createContext();


const AuthProvider=({children})=>{
    const [auth,setAuth]=useState({
        user:null,
        token:""
    });
    //default axios
    axios.defaults.headers.common['Authorization']=auth?.token
    useEffect(()=>{
        const data=localStorage.getItem('auth')
        if (data){
            const parseData=JSON.parse(data)
            setAuth({
                ...parseData,
                user:parseData.user,
                token:parseData.token,

            })
        }
        //eslint-disabled-next-line
    },[])
    return(
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth=()=>useContext(AuthContext);
export {useAuth,AuthProvider};
*/
/*
import { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: ""
  });

  // Set default Authorization header when auth state changes
  useEffect(() => {
    if (auth?.token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${auth.token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [auth]);

  // Load auth data from localStorage on mount
  useEffect(() => {
    const data = localStorage.getItem('auth');
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...parseData,
        user: parseData.user,
        token: parseData.token,
      });
    }
    //eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
*/
import { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: ""
  });

  axios.defaults.headers.common['Authorization'] = `Bearer ${auth?.token}`;

  useEffect(() => {
    const data = localStorage.getItem('auth');
    if (data) {
      const parsedData = JSON.parse(data);
      console.log('Parsed Auth Data from localStorage:', parsedData); // Log the parsed data
      setAuth({
        ...parsedData,
        user: parsedData.user,
        token: parsedData.token
      });
    }
    //eslint-disabled-next-line
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };

