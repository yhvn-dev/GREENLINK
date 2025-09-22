import {React, useState,useRef} from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Header } from "../../components/header"
import { Form } from "../../components/Login/form"
 

import * as validate from "../../utils/userValidations"
import "./login.css"

function Login() {
  const loginInputRef = useRef(null)
  const passwordRef = useRef(null)
  const [errorMsg,setErrorMsg] = useState({});
  const [successMsg,setsuccessMsg] = useState("")
  const [mode,setMode] = useState("notLoggedIn");

  const [showNav,setShowNav] = useState(false);
  const navigate = useNavigate(); 
  
  const handleSubmit = async (e) =>{
    e.preventDefault()

    const loginInput = loginInputRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    
    const errors = validate.loginValidation({loginInput,password}) || {};
    if(Object.keys(errors).length > 0){
      setErrorMsg(errors)
      return
    }
    
    try{

      const { data } = await axios.post("http://localhost:5000/login",{
        loginInput,
        password
      });

      console.log(data)
      localStorage.setItem("accessToken",data.accessToken)
      localStorage.setItem("refreshToken",data.refreshToken)
      
    
      setsuccessMsg("Login Sucessfull!");
      setMode("loggedIn")
      setTimeout(() => {
        navigate("/dashboard")       
      }, 1500);
 
      setErrorMsg({}) 
      

    }catch(err){

      if(err.response){
        setErrorMsg({server: err.response.data.message || "Invalid username or password"});
      }else if(err.request){      
        setErrorMsg({server: "Login failed or server is not reachable!"})
      }else{
        setErrorMsg({server: "An Unexpected Error Occured"})
        }

      setsuccessMsg("") 
    }
  
  }
    
  return (
    <section className="page login grid grid-cols-1 grid-rows-[8vh_92vh] h-[100vh] w-full bg-white">

        <Header
        
          navChildren={

            <>

              { /* Hamburger icon */}
                <div 
                className="links icon_frame hamburger md:hidden" 
                onClick={() => setShowNav(prev => !prev)}>
                <svg className="icons" xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"/>
                </svg> 
              </div>          
              
              {/* Nav group */}
              <div 
                className={`links_box w-full  ${showNav ? "flex" : "hidden"} md:flex`} >
                  
                <Link to="/" className="btnl links ">Home</Link>
                <Link to="" className="btnl links">About</Link>
                <Link to="/contacts" className="btnl links">Contacts</Link>  
                
              </div>

            </>  
        }              
        
        />


        {/* hero */}        
        <div className="hero flex justify-center items-center ">

            <Form handleSubmit={handleSubmit} errorMsg={errorMsg} successMsg={successMsg} loginInputRef={loginInputRef} passwordRef={passwordRef}
            />

        </div>

    </section>
  )
  
  
  
}

export default Login