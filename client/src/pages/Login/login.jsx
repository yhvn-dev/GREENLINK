import {React, useState,useRef} from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Header } from "../../components/header"
import { User,Lock } from "react-feather";
import { colors } from "../../utils/colors.Js"
import Bush1 from "../../assets/Images/Bush 1.png"

import * as validate from "../../utils/userValidations"

function Login() {
  const loginInputRef = useRef(null)
  const passwordRef = useRef(null)
  const [errorMsg,setErrorMsg] = useState({});
  const [sucessMsg,setsucessMsg] = useState("")
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
        
        <div className="hero header_hero flex justify-center items-center ">

              <form onSubmit={handleSubmit} className="forms card ">

                  <ul className="form_part down left w-1/2 h-full bg-[var(--pal2-whiteb)]">

                      <img className="bushes" src={Bush1}></img>
                      <span>Take care of your plants</span>
                      <p></p>
                  
                  </ul>
                  <ul className="form_part down right  w-1/2 h-full ">
                                                                
                      <div class="form_box title_box h-[20%] w-full">

                        <span className="title form_title" >LOGIN</span>
                        <p className="descrp">Water Your Plants Login Here</p>
                      </div>



                      <ul class="input_box_frame down justify-centerw-full h-[80%] w-full">

                        {/* username */}
                          <div className="form_box input_box">

                            <input ref={loginInputRef} className="form-inp" name="username-email-inp" placeholder=""/>
                            <label>Username or Email</label>
                            <svg className="form-svg"><User size={16} color={colors.accDarkc}/></svg>                           
                          </div>
                            <ol className="formMsg_box flex">
                             {errorMsg.loginInput && <p className="formMsg errMsg justify-start">{errorMsg.loginInput}</p>}
                            </ol>
                            

                          {/* password */}
                          <div className="form_box input_box">
                            <input ref={passwordRef} className="form-inp" type="password" name="password-inp" placeholder=""/>
                            <label>Password</label>
                            <svg className="form-svg"><Lock size={16} color={colors.accDarkc}/></svg>
                          </div>
                          <ol className="formMsg_box flex">
                                {errorMsg.password && <p className="formMsg errMsg justify-start">{errorMsg.password}</p>} 
                            </ol>
                        
                          
                          <div className="form_box btn_box">
                            <button  className="btn-p-full" type="submit">Login</button>
                          </div>
                          <ol className="formMsg_box successMsgBox">
                              {errorMsg.server && <p className="formMsg errMsg justify-start">{errorMsg.server}</p>}
                              {sucessMsg && <p className="formMsg succMsg">{sucessMsg}</p>}
                          </ol>

                          <div className="form_box social_login_box"></div>
                            
                      </ul>
                     
                    
                  </ul>

              </form>

        </div>
    </section>
  )
  
  
  
}

export default Login