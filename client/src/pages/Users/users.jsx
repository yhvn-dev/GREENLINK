import { useEffect, useState } from 'react'

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
    } catch (err) {
        console.error("Error Fetching Chart")
    }
  }

  useEffect(() =>{
    fetchUser();
    fetchChartData();
  },[token])

  return (
    <section className="page users grid grid-cols-[12fr_88fr] grid-rows-[8vh_40vh_52vh] 
        h-[100vh] w-[100%] gap-x-4 overflow-y-auto  bg-[var(--pal2-whiteb)]
        relative">

      <Db_Header  
      left={<>
      </>}
      input={

      <>
        <input type="text" placeholder='' className='border-1 p-x'/>
        <label for="">Search For Users</label>
      </>} 

      middle={<>
      
      
        <div class="form_box scenter h-full">
          <input type="text" placeholder='' className='border-1 p-x'/>
          <label for="">Search  For Users</label>
        </div>    
     
       </>}
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
           <Link className="sb-btn" to="/analytics">  
            <svg className="svg-icons" ><Activity size={16}/></svg> 
            <p className='link-text'>Analytics</p>
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
      <Workspace chartData={chartData} refreshChart={fetchChartData}/>


          
    </section>
  )
}

export default Users