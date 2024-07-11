/*

import React from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';

const Users = () => {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-3"></div>
            <AdminMenu/>
        <div className="col-md-9">
            <h1>All Users</h1>
        </div>


      </div>
    </Layout>
  );
}

export default Users;
*/
import React from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';

const Users = () => {
  return (
    <Layout title={"Dashboard- All Users"}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
            {/* Add your content for displaying all users here */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Users;

