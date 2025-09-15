import {React, useState} from "react"

function Login() {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  const handleSubmit = async (e) =>{
    e.preventDefault()
  }

  


  return (
    <section className="page login flex justify-center items-center h-[100vh] w-full bg-green-200">
            

    <form className="flex justify-center items-center flex-col gap-[1rem]" action="#" >

        <input type="text" className="inputs email_username border-2"/>
        <input type="text" className="inputs password border-2"/>

        <button className='buttons bg-red-400'>Login</button>

    </form>
       
    </section>
  )
  
  
}

export default Login