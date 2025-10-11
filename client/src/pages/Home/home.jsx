import { Link } from "react-router-dom"

import { Header } from '../../components/Global/header'
import { Hero } from '../../components/Global/hero'

import { Home as HomeIcon} from "react-feather"
import {Phone,Info,LogIn} from "react-feather"
import "./home.css"
import "./home.responsive.css"

function Home() {
  return (
    <>
      <section className="page home grid grid-cols-[1fr] grid-rows-[100vh_100vh] overflow-x-hidden">
        <div className="bd_wrapper"></div>
        
        <div className="front_wrapper grid grid-cols-[1fr] grid-rows-[8vh_92vh_100vh] 
        h-full w-full col-start-1 col-end-1  row-start-1 row-end-2">
    
          {/* Header */}
          <Header
            navChildren={
              <>
                {/* Nav group */}
                <div 
                  className="links_box w-full flex items-center justify-center">
                    
                  <Link to="/" className="links relative 
                items-center justify-center p-x text-sm border-1 rounded-[10px]">  
                      <p>Home</p>
                      <svg className='home-icons'><HomeIcon size={18}/></svg>
                  </Link>
                  
                  <Link to="" className="links relative 
                  items-center justify-center p-x text-sm border-1 rounded-[10px]">
                     <p>About</p>
                     <svg className='home-icons'><Phone size={18}/></svg>
                  </Link>

                  <Link to="/contacts" className="links relative 
                  items-center justify-center p-x text-sm border-1 rounded-[10px]">     
                     <p>Contact</p>
                     <svg className='home-icons'><Info size={18}/></svg>
                  </Link>  

                  <Link to="/login" className="links relative 
                  items-center justify-center btn-p p-x" >
                     <p>Login</p>
                     <svg className='home-icons'><LogIn size={18}/></svg>
                  </Link>

                </div>

            </>

          }

        />  

            <Hero 
               children={
                <>
               
                </>
               }
            />

        </div>
        
      </section>

    </>
  )
}

export default Home
