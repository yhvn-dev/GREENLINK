import { useNavigate } from "react-router-dom"
import { Sidebar } from "../../components/Dashboard/sidebar"
import { Header } from "../../components/Dashboard/header"
import { Numbers } from "../../components/Dashboard/numbers" 
import { Workspace } from "../../components/Dashboard/workspace"
import { Logout } from "../../components/Global/logout"
import { LogoutModal } from "../../components/Global/logoutModal"
import {Grid,Activity,User,LogOut} from "react-feather"

import "./dashboard.css"
import { useState } from "react"
import { Link } from "react-router-dom"


function Dashboard() {
  const [isOpen,setModal] = useState(false);
 
  return (
    <>
        <section className="page dashboard  bg-white overflow-y-auto relative">

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

              // btn div a
              btn_div_a={ <>
                <Link className="sb-btn btn-a "> 
                  <svg className="svg-icons"><Grid size={16}/></svg>Dashboard     
                </Link>
                <Link className="sb-btn">  
                 <svg className="svg-icons" ><Activity size={16}/></svg>  Reports
                </Link>
                <Link className="sb-btn" to="/users">
                  <svg className="svg-icons"><User size={16}/></svg>  
                   Users
                </Link>
                </>
                }
            />

          {/* NUMBER CONTAINER */}
          <Numbers

            data_box={
              <>
                <ol class="data_boxes">a</ol>
                <ol class="data_boxes">b</ol>
                <ol class="data_boxes">c</ol>
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