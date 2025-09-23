import React, { useState } from 'react'
import { Link } from "react-router-dom"

import { Header } from '../../components/Global/header'
import { Hero } from '../../components/Global/hero'

import "./home.css"
import "./home.responsive.css"

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

                {/* Hamburger icon */}
                  <div 
                  className="links icon_frame hamburger md:hidden" 
                  onClick={() => setShowNav(prev => !prev)}>
                  <svg className="icons" xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"/>
                  </svg> 
                </div>          
                
                {/* Nav group */}
                <div 
                  className={`links_box w-full  ${showNav ? "flex" : "hidden"} md:flex`} >
                    
                  <Link to="/" className="btnl links btn-u">Home</Link>
                  <Link to="" className="btnl links">About</Link>
                  <Link to="/contacts" className="btnl links">Contacts</Link>  
                  <Link to="/login" className="btnl links btn-p" >Login</Link>

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
