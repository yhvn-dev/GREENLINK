import React, { useEffect, useState } from 'react'
import axios from "axios";

import * as userService from "../../data/userService"

import { Sidebar } from "../../components/Global/sidebar"
import { Db_Header } from "../../components/Global/db_header"
import { Workspace } from "../../components/Users/workspace"
import { Numbers } from "../../components/Users/numbers"
import * as Chart from "../../components/Users/chart"

import { Link} from "react-router-dom"
import {Grid,Activity,User} from "react-feather"
import "./users.css"
import "./users_responsive.css"

function Users() {
  const [user,setUser] = useState(false)
  const [chartData,setChartData] = useState({count: { total_users: 0}, roleCount: []})
  const token = localStorage.getItem("accessToken")

  // Fetch Login User
  const fetchUser =  async () =>{
    try{
      const res = await axios.get("http://localhost:5000/users/me",
        {headers:{Authorization:`Bearer ${token}`}})
        setUser(res.data)

    }catch(err){
      console.error("Error Fetching Users")
    }
  } 

  // fetch chart data
  const fetchChartData = async () =>{
    try {
        const [userCount,userCountByRole] = await Promise.all([
          userService.getUsersCount(),
          userService.getUsersCountByRole()
        ]);
        
        setChartData({
          count:userCount,
          roleCount:userCountByRole.map(rc => 
            ({ 
              role:rc.role,
              total_users:Number(rc.total_users)
            }))
        })

        // console.log("User Count:",userCount.total_users)
        // console.log("User Roles:",userCountByRole.map((rc) => rc.role))
        // console.log("User Count By Role:",userCountByRole.map((rc) => rc.total_users))

    } catch (err) {
        console.error("Error Fetching Chart")
    }
  }

  useEffect(() =>{
    fetchUser();
    fetchChartData();
  },[token])

  return (
    <section className="page users relative">

      <Db_Header  left={<></>} 
       user={user}
      />
  
      <Sidebar
          // btn div a
        btn_div_a={ <>
          <Link className="sb-btn" to="/dashboard"> 
            <svg className="svg-icons"><Grid size={16}/></svg>
            <p className='link-text'>Dashboard</p>
          </Link>
          <Link className="sb-btn btn-a" to="/users">
            <svg className="svg-icons"><User size={16}/></svg>  
            <p className='link-text'>Users</p>
            
          </Link>
           <Link className="sb-btn ">  
            <svg className="svg-icons" ><Activity size={16}/></svg> 
            <p className='link-text'>Reports</p>
          </Link>
          </>
          }
        />

      {/* Data like graphs and charts */}
      <Numbers        
        data_boxes={
          <>
            <div className='num_card logs_card col-start-1 col-end-1
            bg-transparent backdrop-blur-[100px]'>Logs Card</div>
            <div className='num_card chart_card col-start-2 col-end-2
            bg-transparent backdrop-blur-[80px]'><Chart.RoleChart chartData={chartData}/></div>
          </>
        }
      />

      {/* Users Table with navigations and filters */}
      <Workspace chartData={chartData} refreshChart={fetchChartData} />

    </section>
  )
}

export default Users