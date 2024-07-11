
/*
import React,{ useEffect }  from 'react';
import Layout from '../../components/Layout/Layout';
import { useAuth } from '../../Context/auth';

const Dashboard = () => {
  const [auth] = useAuth();
  useEffect(() => {
    console.log('User Object:', auth.user); // Log the entire user object
    console.log('User Question:', auth.user?.question);
    console.log('User Answer:', auth.user?.answer);
     // Log the question attribute
  }, [auth.user]); 

  return (
    <Layout title="Dashboard - Gunjon App">
       <h1>Welcome, {auth.user?.name}</h1>
      <p>Email: {auth.user?.email}</p>
      <p>Phone: {auth.user?.phone}</p>
      <p>Address: {auth.user?.address}</p>
      <p>Security Question: {auth.user?.question}</p> 
      <p>Security Answer: {auth.user?.answer}</p> 


      Dashboard Page
    </Layout>
  );
}

export default Dashboard;
*/

import React,{ useEffect }  from 'react';
import Layout from '../../components/Layout/Layout';
import { useAuth } from '../../Context/auth';
import UserMenue from '../../components/Layout/UserMenu';
const Dashboard = () => {
  const [auth] = useAuth();
  useEffect(() => {
    console.log('User Object:', auth.user); // Log the entire user object
    console.log('User Question:', auth.user?.question);
    console.log('User Answer:', auth.user?.answer);
     // Log the question attribute
  }, [auth.user]); 

  return (
    <Layout title="Dashboard - Gunjon App">
      <div className="container-fluid p-3 m-3"> 
      <div className="row">
      <div className="col-md-3"><UserMenue/></div>
      <div className="col-md-9">
             <h3>Name: {auth?.user?.name}</h3>
             <h3>Email: {auth?.user?.email}</h3>
             <h3>Address: {auth?.user?.address}</h3>

      </div>
      </div>

      </div>
      
    </Layout>
  );
}

export default Dashboard;