import React from 'react'
import { useNavigate } from "react-router-dom" 
import { LogOut } from 'react-feather'
import { useState } from 'react'

import axios from 'axios'


export function Logout() {

  const navigate = useNavigate();
  const [msg,setMsg]  = useState("");  
  const [errorMsg,setErrorMsg] = useState("")

const handleLogout = async (e) =>{
    e.preventDefault();

     try {
      await axios.delete("http://localhost:5000/users/logout-all",   { withCredentials: true }
      );

   
      localStorage.removeItem("accessToken")
      navigate("/login");

    } catch (err) {
      console.error("Logout error:", err.response?.data?.message || err.message);
    }
  };



return (
    <button className="sb-btn logout-btn" onClick={handleLogout}>
         <svg className="svg-icons"><LogOut size={16}/></svg> Logout
    </button>
)
}
