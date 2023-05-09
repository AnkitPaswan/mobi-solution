
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { useState } from "react";
import React from 'react';
import "./SignIn.scss";
import SignIn from "../../../assests/signin.svg";
import Profile from "../../../assests/profile.svg";
import { MdPerson2, MdLock } from "react-icons/md";
import { toast } from 'react-toastify';


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const LogIn = async (e) => {
    e.preventDefault();
    try {
      if (email === '' || password === 'null') {
        toast.warn("Please Enter email ", {
          theme: "colored",
          hideProgressBar: true,
        });
        return;
      }
      if (password === 'null' || email === '') {
        toast.warn("Please Enter password", {
          theme: "colored",
          hideProgressBar: true,

        });
        return;
      }
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
      toast.success("Login Successfull!", {
        theme: "colored",
        hideProgressBar: true,
      });
    } catch (error) {
      console.error(e);
      toast.error(error.message, {
        theme: "colored",
        hideProgressBar: true,
      });
    }
  };



  return (
    <>
      <div className="container">
        <div className="img">
          <img src={SignIn} alt="" />
        </div>
        <div className="login-container">
          <form action="" onSubmit={LogIn}>
            <img className="avatar" src={Profile} alt="" />
            <h2>Welcome</h2>
            <div className="input-div one focus ">
              <div className="i">
                <MdPerson2 />
              </div>
              <div>
                <h5>Email</h5>
                <input onChange={(e) => setEmail(e.target.value)}
                  type="email" value={email} className="input" placeholder='ankitpaswan@gmail.com' />
              </div>
            </div>
            <div className="input-div two focus">
              <div className="i">
                <MdLock />
              </div>
              <div>
                <h5>Password</h5>
                <input onChange={(e) => setPassword(e.target.value)}
                  type="password" value={password} className="input" placeholder='*****' />
              </div>
            </div>
            <span onClick={() => navigate("/SignUp")}> Register Now?</span>
            {/* <b className="error">{ErrMsg}</b> */}
            <button type="submit" className="btn" onClick={LogIn}>LogIn</button>

          </form>
        </div>
      </div>
    </>
  )
}

export default Login;

