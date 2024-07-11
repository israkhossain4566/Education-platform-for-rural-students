
import './App.css';
import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from  './pages/Contact';
import Policy from  './pages/Policy';
import Pagenotfound from  './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import ForgotPassword from './pages/Auth/ForgotPassword';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/user/Dashboard';
import Reset from './pages/Auth/Reset';
import PrivateRoute from './components/Routes/Private';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminRoute from './components/Routes/AdminRoute';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import Profile from './pages/user/Profile';
import Orders from './pages/user/Orders';
import EmailVerify from './pages/EmailVerify';
import ChatPage from './pages/Message/ChatPage';


function App() {
  return (
    
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>

      <Route path="/dashboard" element={<PrivateRoute/>}>
        <Route path="user" element={<Dashboard/>}/>
        <Route path="user/profile" element={<Profile/>}/>
        <Route path="user/orders" element={<Orders/>}/>
        </Route>
      
      <Route path="/dashboard" element={<AdminRoute/>}>
        <Route path="admin" element={<AdminDashboard/>}/>
        <Route path="admin/create-category" element={<CreateCategory/>}/>
        <Route path="admin/create-product" element={<CreateProduct/>}/>
        <Route path="admin/users" element={<Users/>}/>
        </Route>
      <Route path='/reset' element={<Reset/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path="/chat" element={<ChatPage/>} />
      <Route path='/policy' element={<Policy/>}/>
      <Route path='/:id/verify/:token' element={<EmailVerify/>}></Route>
      <Route path='*' element={<Pagenotfound/>}/>

      

    </Routes>

    
    </>
     
  );
}

export default App;

