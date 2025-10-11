import {useState,useRef} from "react"
import api from "../../utils/api"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { Form } from "../../components/Login/form"
import { Hero } from "../../components/Global/hero.jsx"
import { Header } from "../../components/Global/header.jsx" 

import {Home as HomeIcon} from "react-feather"
import {Phone,Info} from "react-feather"

import * as validate from "../../utils/userValidations"

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

      const { data } = await api.post("http://localhost:5000/auth/login",{
        loginInput,
        password
      });
 
      localStorage.setItem("accessToken",data.accessToken)
    
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
    <section className="page  login grid grid-cols-1 grid-rows-[8vh_92vh] h-[100vh] w-full bg-white">

        <Header
        
          navChildren={

            <>     
              {/* Nav group */}
              <div 
                className={`lgn-link_box links_box w-full flex items-center justify-center`} >
                    
                  <Link to="/" className="links border-1 rounded-[10px]">  
                      <p>Home</p>
                      <svg className='home-icons border-1 rounded-[10px]'><HomeIcon size={18}/></svg>
                  </Link>
                  
                  <Link to="" className="links border-1 rounded-[10px]">
                      <p>About</p>
                      <svg className='home-icons'><Phone size={18}/></svg>
                  </Link>

                  <Link to="/contacts" className="links border-1 rounded-[10px]">     
                      <p>Contact</p>
                      <svg className='home-icons'><Info size={18}/></svg>
                  </Link>    
              </div>

            </>  
        }              
        
        />

        {/* hero */}  
           
            <Hero
              children={<Form handleSubmit={handleSubmit} errorMsg={errorMsg} successMsg={successMsg} loginInputRef={loginInputRef} passwordRef={passwordRef} />}
            />
         
        
    </section>


  )
  
  
  
}

export default Login