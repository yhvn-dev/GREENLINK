import axios from "axios"
import { Sidebar } from "../../components/Global/sidebar"
import { Db_Header } from "../../components/Global/db_header"
import { Numbers } from "../../components/Dashboard/numbers" 
import { Workspace } from "../../components/Dashboard/workspace"
import { Welcome_box } from "../../components/Global/welcome_box"
import {Grid,Activity,User} from "react-feather"

import "./dashboard.css"
import "./dashboard_responsive.css"

import { useState } from "react"
import { Link } from "react-router-dom"
import { useEffect } from "react"

function Dashboard() {
  const [user,setUser] = useState(null);
  const token = localStorage.getItem("accessToken")
  
  useEffect(() =>{

    const fetchUser = async () =>{

      try{
        const res = await axios.get("http://localhost:5000/users/me",{
          headers:{Authorization : `Bearer ${token}`}
        })  
        console.log(res.data)
        setUser(res.data)
      }catch(err){
        console.error(err);
      }
    }

    fetchUser() 

  },[token])

  
  return (
    <>
        <section className="page dashboard grid grid-cols-[12fr_30fr_58fr] grid-rows-[8vh_30vh_62vh] 
        h-[100vh] w-[100%] gap-x-4 overflow-y-auto bg-[var(--pal2-whiteb)] relative">

          <Welcome_box
            text={
              <>
                <p className="font-bold ">Welcome to GREENLINK</p>
                <p className="text-sm opacity-[0.5]">Hi{" "}{user?.username || "Guest"} Start Monitoring your plant.</p>
              </>
            }
          />

          <Db_Header
            left={
                <>
                </>
            }   
              input={               
                <>
                <input type="text" placeholder='' className='border-1 p-x'/>
                <label for="">Search For Readings</label>
              </>} 
            user={user}       
          />
         
            <Sidebar
    
            />

          {/* NUMBER CONTAINER */}
          <Numbers
            data_box={
              <>
                <ol className="w-full h-full bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all moisture-box">a
                </ol>
                <ol className="w-full h-full bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all ph-level-box">b</ol>
                <ol className="w-full h-full bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all temperature-box">c</ol>
              </>
            }                
          />


             {/* WORKSPACE */}
            <Workspace      
            />
            

          </section>
    
    </>
  )
}

export default Dashboard