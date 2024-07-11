import React from 'react';
import {Link} from "react-router-dom"
const  footer=()=> {
  return (
    <div className="footer">
        <h4 className="text-center">All Rights Reserved © </h4>
        <p className="text-center mt-3">
        <Link to="/about">About</Link>
        |
        <Link to="/contact">Contact</Link>
        |
        <Link to="/policy">Privacy Policy</Link>
        
        </p>
      
    </div>
  );
};
export default footer;


/*
export default function footer() {
  return (
    <div className="bg-dark text-light p-3">
        <h4 className="text-center">All Rights Reserved © </h4>
      
    </div>
  );
}
*/

