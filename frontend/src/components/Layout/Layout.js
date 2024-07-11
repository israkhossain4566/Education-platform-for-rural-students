import React from 'react';
import Header from './Header';
import Footer from './footer';
import {Helmet} from "react-helmet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout=({children,title,description,keywords,author})=> {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                
        
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords}/>
  <meta name="author" content={author} />

                <title>{title}</title>
                
      </Helmet> 
      <Header/>
      <main style={{minHeight:"70vh"}}>
      <ToastContainer />
      {children}
      </main>
      <Footer/>
      
    </div>
  );
};


Layout.defaultProps={
  title:"GUNJON- connect now",
  description:"mern stack project",
  keywords:"mern,react,node,mongodb",
  

}



export default Layout;


/*
export default function Layout({children}) {
  return (
    <div>
      <Header/>
      <main style={{minHeight:"80vh"}}>
      {children}
      </main>
      <Footer/>
      
    </div>
  );
};
*/
