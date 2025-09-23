import { useNavigate } from "react-router-dom"
import { Sidebar } from "../../components/Dashboard/sidebar"
import { Header } from "../../components/Dashboard/header"
import { Numbers } from "../../components/Dashboard/numbers" 
import { Workspace } from "../../components/Dashboard/workspace"

import {Grid,Activity,User,LogOut} from "react-feather"


import "./dashboard.css"
import { useState } from "react"
import { Link } from "react-router-dom"



function Dashboard() {
  const [show,setShow] = useState("dashboard");
 
  return (
    <>
        <section className="page dashboard  bg-white overflow-y-auto ">

            <Header
      
                left={
                   <>
                
                   </>
                }
                right={
                  < >

                  </>
                }

            />
   
            <Sidebar

              children={ <>
                <Link className="sb-btn btn-a"> 
                  <svg className="svg-icons"><Grid size={16}/></svg>Dashboard     
                </Link>


                <Link className="sb-btn ">  
                 <svg className="svg-icons" ><Activity size={16}/></svg>  Reports
                </Link>


                <Link className="sb-btn" to="/users">
                  <svg className="svg-icons"><User size={16}/></svg>  
                   Users
                </Link>

                <Link className="sb-btn logout-btn" to="/login">
                  <svg className="svg-icons"><LogOut size={16}/></svg>  
                   Logout
                </Link>


              </>}
        
            />

          {/* NUMBER CONTAINER */}
          <Numbers
          />




             {/* WORKSPACE */}
            <Workspace      
            />



          </section>
    
    </>
  )
}

export default Dashboard