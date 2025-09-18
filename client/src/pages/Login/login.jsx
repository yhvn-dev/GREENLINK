import {React, useState,useRef} from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Header } from "../../components/header"
import { Nav } from "../../components/nav"
import * as Logos from "../../components/logo" 

import * as validate from "../../utils/userValidations"

function Login() {
  const loginInputRef = useRef(null)
  const passwordRef = useRef(null)
  const [errorMsg,setErrorMsg] = useState({});
  const [sucessMsg,setsucessMsg] = useState("")
  const [mode,setMode] = useState("notLoggedIn");

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
      
      setsucessMsg("Login Sucessfull!");
      setMode("loggedIn")
      setTimeout(() => {
        navigate("/dashboard")       
      }, 1500);
 
      setErrorMsg({}) // clear error when sucess

    }catch(err){

      if(err.response){
        setErrorMsg({server: err.response.data.message || "Invalid username or password"});
      }else if(err.request){      
        setErrorMsg({server: "Login failed or server is not reachable!"})
      }else{
        setErrorMsg({server: "An Unexpected Error Occured"})
      }

      setsucessMsg("") 
    }
  
    
  }
    
  
  return (
    <section className="page login grid grid-cols-1 grid-rows-[10vh_90vh] h-[100vh] w-full bg-green-200">

        <Header>


            <nav className="flex justify-between items-center bg-red-400 h-full">

              <div className="header_part left flex justify-start items-center bg-fuchsia-200 h-full w-1/2">
                <Logos.Text_Logo/>
              </div>
              <div className="header_part right flex justify-end items-center h-full w-1/2 bg-red-500">

                   <ul className="h_part h_right flex justify-end items-center w-1/2 h-full">
                  
                  
                    <Nav>     
                      
                      {/* Hamburger icon */}
                      {/* <div 
                        className="links icon_frame hamburger md:hidden" 
                        onClick={() => setShowNav(prev => !prev)}>
                        <svg className="icons" xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"/>
                        </svg>
                      </div>    */}
                          
                      {/* Nav group */}
                      {/* <div 
                        className={`links_box w-full  ${showNav ? "flex" : "hidden"} md:flex`} >
                          
                        <Link to="" className="btnl links btn-u">Home</Link>
                        <Link to="" className="btnl links">About</Link>
                        <Link to="/contacts" className="btnl links">Contacts</Link>  
                        <Link to="/login" className="btnl links btn-p" >Login</Link>
    
                      </div> */}
    
                    </Nav>
                  
                </ul>

              </div> 
                
            </nav>
          
        </Header>

        <div className="hero header_hero bg-amber-300">

              hero
      
        </div>
{/* 
        <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col gap-[1rem]">
          <input ref={loginInputRef} type="text" className="inputs email_username border-2"/>
          {errorMsg.loginInput && <p className="text-red-500">{errorMsg.loginInput}</p>}
          
          <input ref={passwordRef} type="password" className="inputs password border-2"/>
          {errorMsg.password && <p className="text-red-500">{errorMsg.password}</p>}
          
          <button type="submit"
          className={`buttons btn-p
          ${mode === "notLoggedIn" ? "btn-p" : "btn-animate" }`}>Login</button>

          {errorMsg.server && <p className="text-red-500">{errorMsg.server}</p>}    
          {sucessMsg && <p className="text-green-500">{sucessMsg}</p>}

        </form>   */}

       
    </section>
  )
  
  
  
}

export default Login