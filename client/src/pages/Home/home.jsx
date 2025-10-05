import { useState } from 'react'
import { Link } from "react-router-dom"

import { Header } from '../../components/Global/header'
import { Hero } from '../../components/Global/hero'

import { Home as HomeIcon} from "react-feather"
import {Phone,Info,LogIn} from "react-feather"


import "./home.css"
import "./home.responsive.css"
import Login from '../Login/login'

function Home() {
  const [showNav, setShowNav] = useState(false); // start hidden

  return (
    <>
      <section className="page home">
        <div className="bd_wrapper"></div>
        <div className="front_wrapper">
    
          {/* Header */}
          <Header

            navChildren={

              <>
                
                {/* Nav group */}
                <div 
                  className={`links_box w-full flex items-center justify-center`}>
                    
                  <Link to="/" className="links">  
                      <p>Home</p>
                      <svg className='home-icons'><HomeIcon size={18}/></svg>
                  </Link>
                  
                  <Link to="" className="links">
                     <p>About</p>
                     <svg className='home-icons'><Phone size={18}/></svg>
                  </Link>

                  <Link to="/contacts" className="links">     
                     <p>Contact</p>
                     <svg className='home-icons'><Info size={18}/></svg>
                  </Link>  

                  <Link to="/login" className="links btn-p" >
                     <p className='text-white'>Login</p>
                     <svg className='home-icons'><LogIn size={18}/></svg>
                  </Link>

                </div>

            </>

          }

        />  

            <Hero
        
            />

        </div>
        
      </section>

    </>
  )
}

export default Home
