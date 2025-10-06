import axios from "axios"
import { Sidebar } from "../../components/Global/sidebar"
import { Db_Header } from "../../components/Global/db_header"
import { Numbers } from "../../components/Dashboard/numbers" 
import { Workspace } from "../../components/Dashboard/workspace"
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
        <section className="page dashboard  bg-white overflow-y-auto relative">

          <Db_Header
            left={
                <>
                </>
            }   
            user={user}       
          />
         
            <Sidebar
              // btn div a
              btn_div_a={ <>
                <Link className="sb-btn btn-a "> 
                  <svg className="svg-icons"><Grid size={16}/></svg>
                  <p className="link-text">Dashboard</p>   
                </Link>
                <Link className="sb-btn" to="/users">
                  <svg className="svg-icons"><User size={16}/></svg>
                  <p className="link-text">Users</p>               
                </Link>       
                 <Link className="sb-btn" to="/analytics">  
                 <svg className="svg-icons" ><Activity size={16}/></svg>  
                 <p className='link-text'>Analytics</p>
                </Link>
                </>
                }
            />

          {/* NUMBER CONTAINER */}
          <Numbers
            data_box={
              <>
                <ol className="data_boxes moisture-box">a
                </ol>
                <ol className="data_boxes ph-level-box">b</ol>
                <ol className="data_boxes ">c</ol>
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