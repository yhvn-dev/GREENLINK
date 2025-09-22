import { useNavigate } from "react-router-dom"
import { Sidebar } from "../../components/Dashboard/sidebar"
import { Header} from "../../components/Dashboard/header"

import "./dashboard.css"

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () =>{
      localStorage.removeItem("acessToken")
  }

  return (
    <>
        <section className="page dashboard bg-white">

            <Sidebar

            />

            <Header
            
            
            />

        </section>
    
    </>
  )
}

export default Dashboard