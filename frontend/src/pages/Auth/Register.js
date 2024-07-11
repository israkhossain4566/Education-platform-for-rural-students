import React,{useState} from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import {toast}  from 'react-toastify';
//import {Link} from 'react-router-dom';
import '../../styles/AuthStyles.css';
import GenderCheckbox from './GenderCheckbox';
const Register = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[phone,setPhone]=useState("")
    const[question,setQuestion]=useState("")
    const[answer,setAnswer]=useState("")
    const[address,setAddress]=useState("")
    const[gender,setGender]=useState("")

    const [msg,setMsg]=useState("");
    //const navigate=useNavigate()
    //form function
    const handleCheckboxChange = (selectedGender) => {
        setGender(selectedGender);
    };
    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(name,email,password,question,answer,address,phone,gender);
        toast.success('Register successfully');
        try{
            const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,question,answer,address,gender});
            
            if(res.data.success){
                //toast.success(res.data.message)
                //navigate('/login')
                setMsg(res.message)
            } else{
                toast.error(res.data.message)
            }

        }catch(error){
             console.log(error)
             toast.error("Something went wrong")
        }
    };
  return (
    <Layout title="Register - Gunjon App">
       <div className ="form-container">
          <h1>Register Now</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputname" placeholder="Enter your name" required/>
            </div>
            <div className="mb-3">
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputemail" placeholder="Enter your email" required  />
            </div>
            <div className="mb-3">
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Enter your password" required />
            </div>
            <div className="mb-3">
                <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" id="exampleInputPhone" placeholder="Enter your phone" required />
            </div>
            <div className="mb-3">
                <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control" id="exampleInputAddress" placeholder="Enter your address" required />
            </div>
            <div className="mb-3">
                <input type="text" value={question} onChange={(e)=>setQuestion(e.target.value)} className="form-control" id="exampleInputQuestion" placeholder="Enter your question" required />
            </div>
            <div className="mb-3">
                <input type="text" value={answer} onChange={(e)=>setAnswer(e.target.value)} className="form-control" id="exampleInputAnswer" placeholder="Enter your answer " required />
            </div>
            <div className="mb-3">
                        <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={gender} />
                    </div>


            {msg && <div className="success-msg">{msg}</div>}
            <button type="submit" className="btn btn-primary">Register</button>
            </form>

       </div>
      
    </Layout>
  );
}

export default Register;
