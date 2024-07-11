/*

import React from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
const CreateProduct = () => {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-3"></div>
            <AdminMenu/>
        <div className="col-md-9">
            <h1>Create Products</h1>
        </div>


      </div>    
    </Layout>
  );
}

export default CreateProduct;
*/
import React from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';

const CreateProduct = () => {
  return (
    <Layout title={"Dashboard-  Create Products"}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Products</h1>
            {/* Add your form or other content for creating products here */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CreateProduct;

