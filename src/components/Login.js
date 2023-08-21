import React, { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
function Login({setUserData}) {

  const [data,setData] = useState({
    email:"",
    password:""
  })
  function handleFormData(e){
    setData({
       ...data,[e.target.name]:e.target.value
    })   
  }
  return (
    <div className="border h-screen mx-auto">
    <div className="grid md:grid-cols-[.4fr_.6fr] h-full">
      <div className="bg-black text-white text-5xl sm:text-7xl flex justify-center items-center">
        Board.
      </div>
      <div className="flex items-center justify-center bg-[#F5F5F5] overflow-hidden">
        <div className="flex flex-col gap-4 p-3">
          <div>
            <h1 className="sm:text-4xl text-2xl font-bold">Sign In</h1>
            <p>sign in to your account</p>
          </div>
    
          <div className="grid sm:grid-cols-2 gap-2 justify-between">
           
          <GoogleLogin
                    onSuccess={credentialResponse => {
                       const data =  jwt_decode(credentialResponse.credential);
                       console.log(data);
                       setUserData(data);
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />
           
            <div className="flex gap-2 items-center px-4 py-1 rounded-[3px] border-slate-300 border bg-white hover:bg-[#f8fcff] duration-100">
              {/* <!-- apple icon --> */}
              <i className="fa-brands fa-apple fa-xs"></i>
              <p className="text-xs text-[#858585] font-medium">Sign in with Apple</p>
            </div>
          </div>
    
          {/* <!-- form --> */}
    
          <div>
            <form className="flex gap-2 flex-col rounded-lgPlus bg-white p-4" onSubmit={(e)=> {
               e.preventDefault();
               console.log(data,"data");
            }}>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  required={true}
                  onChange={handleFormData}
                  className="focus:outline-none border border-slate-300 rounded-lgPlus px-4 py-1 bg-[#F5F5F5]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required={true}
                  value={data.password}
                  onChange={handleFormData}
                  className="focus:outline-none border border-slate-300 rounded-lgPlus px-4 py-1 bg-[#F5F5F5]"
                />
              </div>
    
              <span className="text-[#346BD4]"> Forgot Password? </span>
    
              <div>
                <button
                  className="bg-black font-bold text-white w-full rounded-lgPlus py-1"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="text-center mt-3 text-[#858585]">
              Don't have an account?
              <a href="#" className="text-[#346BD4]">
                Register here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Login