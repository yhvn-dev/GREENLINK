import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Sidebar } from "../../components/Global/sidebar"
import { Db_Header } from "../../components/Global/db_header"
import { Workspace } from "../../components/Users/workspace"
import { Numbers } from "../../components/Users/numbers"
import { Chart } from "../../components/Users/chart"

import { Link} from "react-router-dom"
import {Grid,Activity,User} from "react-feather"
import "./users.css"


function Users() {
  const [user,setUser] = useState(false)
  const token = localStorage.getItem("accessToken")

  // Fetch Login User
  useEffect(() =>{
    const fetchUser =  async () =>{
      try{
        const res = await axios.get("http://localhost:5000/users/me",
          {headers:{Authorization:`Bearer ${token}`}})
        console.log(res.data)
        setUser(res.data)

      }catch(err){
        console.error("Error Fetching Users")
      }
    } 
    fetchUser()
  },[token])

  return (
    <section className="page users relative">

      <Db_Header
      left={<></>}  
      user={user}
      />
  
      <Sidebar
          // btn div a
        btn_div_a={ <>
          <Link className="sb-btn" to="/dashboard"> 
            <svg className="svg-icons"><Grid size={16}/></svg>Dashboard     
          </Link>
          <Link className="sb-btn btn-a" to="/users">
            <svg className="svg-icons"><User size={16}/></svg>  
              Users
          </Link>
           <Link className="sb-btn ">  
            <svg className="svg-icons" ><Activity size={16}/></svg>  Reports
          </Link>
          </>
          }
        />

      {/* Data like graphs and charts */}
      <Numbers
        data_boxes={
          <>

            <div className='num_card'></div>
            <div className='num_card'>b</div>
            <div className='num_card'><Chart/></div>

          </>
        }
      />

      {/* Users Table with navigations and filters */}
      <Workspace />

    </section>
  )
}

export default Users