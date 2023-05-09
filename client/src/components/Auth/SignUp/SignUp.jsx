
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from 'react';
import "./SignUp.scss";
import Register from "../../../assests/register.svg";
import Profile from "../../../assests/profile.svg";
import { MdPerson2, MdLock } from "react-icons/md";
import { toast } from 'react-toastify';

const SignUp = () => {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [ErrMsg, SetErrMsg] = useState();

  const SignUp = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !password) {
        toast.warn("Fill all fields !", {
          theme: "colored",
          hideProgressBar: true,
        });
        // SetErrMsg("Fill all fields");
        return;
      }
      // SetErrMsg("");
      var userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name })
      navigate('/Login');
      toast.success("Registeration Successfull!", {
        theme: "colored",
        hideProgressBar: true,
      });
      toast(name)
      // alert("success")
    } catch (error) {
      console.error(e);
      toast.error(error.message, {
        theme: "colored",
        hideProgress: true
      })
      // SetErrMsg(e.message);
    }
  };

  return (
    <>
      <div className="container">
        <div className="img">
          <img src={Register} alt="" />
        </div>
        <div className="login-container">
          <form action="" onSubmit={SignUp}>
            <img className="avatar" src={Profile} alt="" />
            <h2>Create Account</h2>
            <div className="input-div one focus ">
              <div className="i">
                <MdPerson2 />
              </div>
              <div>
                <h5>Username</h5>
                <input onChange={(e) => setName(e.target.value)}
                  type="name" value={name} className="input" placeholder='ankitpaswan' />
              </div>
            </div>
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
                  type="password" value={password} className="input" placeholder='******' />
              </div>
            </div>
            <p onClick={() => navigate("/Login")}>Already have an account? SignIn</p>
            {/* <b className="error">{ErrMsg}</b> */}
            <input type="submit" className="btn" value="SignUp" onClick={SignUp} />
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp;

