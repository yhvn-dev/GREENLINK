import {React, useState,useRef} from "react"
import axios from "axios"


function Login() {
  const loginInputRef = useRef(null)
  const passwordRef = useRef(null)
  const [msg,setMsg] = useState("");
  
  const handleSubmit = async (e) =>{
    e.preventDefault()

    const loginInput = loginInputRef.current.value;
    const password = passwordRef.current.value;

    try{
      const { data } = await axios.post("http://localhost:5000/login",{
        loginInput,password,
      });
      
      setMsg("Login Sucessfull!")
      console.log("User:",data.user)
      
    }catch(err){
      if(err.response){
          setMsg(err.response.data.message || "Login failed");  
      }else{
           setMsg("Server is not Reachable");
      }
    }

  }

  
  return (
    <section className="page login flex justify-center items-center h-[100vh] w-full bg-green-200">
            
      <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col gap-[1rem]" action="#" >

          <input ref={loginInputRef} type="text" className="inputs email_username border-2"/>
          <input ref={passwordRef} type="text" className="inputs password border-2"/>

          <button type="submit" className='buttons btn-p'>Login</button>
          {msg && <p>{msg}</p>}
      </form>
       
    </section>
  )
  
  
}

export default Login