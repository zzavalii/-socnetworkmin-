import React from 'react';
import  {Routes, Route, Navigate} from "react-router-dom"
import './App.css';
import Profile from './components/profile/Profile'
import Navigation from './components/navigation/Navigation';
import Dialogs from './components/dialogue/Dialogs'
import Dating from './components/dating/Dating';
import DialogsContainer from './components/dialogue/DialogsContainer';
import{connect} from 'react-redux';
import DatingContainer from './components/dating/DatingContainer';
import LoginForm from "./components/auth/login/LoginForm";
import RegisterForm from "./components/auth/register/RegisterForm";


function App(props) {
  return (
    
    <div className='container'>
      <div className="left">
       <Navigation/>
      </div>
      
      <div className= "right">
        {
          props.isAuthenticated ?
        <Routes>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/dialogue' element={<DialogsContainer/>} />
          <Route path='/dating' element={<DatingContainer/>}/>
        </Routes>
        :
        <Routes>
          <Route path='/login' element={<LoginForm />}/>
          <Route path='/register' element={<RegisterForm />} />
          <Route path='*' element={<Navigate to="/login"/>}/>
        </Routes>
         }
      </div>
    </div>
   
    
  );
}
const mapStateToProps = (state) => {
  return{
          isAuthenticated: state.auth.isAuthenticated
  }
    }
  
export default connect(mapStateToProps)(App);
