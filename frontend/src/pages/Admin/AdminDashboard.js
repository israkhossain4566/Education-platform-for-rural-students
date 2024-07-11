
/*
import React from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';

const AdminDashboard = () => {
  return (
    <Layout>
        <div className="container-fluid">
          <div className="row">
             <div className="col-md-3"></div>
             <AdminMenu/>
             <div className="col-md-9">content</div>
          </div>
        </div>
      
    </Layout>
  );
}

export default AdminDashboard;
*/
import React from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import {useAuth} from "../../Context/auth";

const AdminDashboard = () => {
  const[auth]=useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3" >
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>Admin Name : {auth?.user?.name}</h3>
              <h3>Admin Email : {auth?.user?.email}</h3>
              
              <h3>Admin Contact : {auth?.user?.phone}</h3>
              <h3>Admin Question : {auth?.user?.question}</h3>
              <h3>Admin Answer : {auth?.user?.answer}</h3>


              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AdminDashboard;

