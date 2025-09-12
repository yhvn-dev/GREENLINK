import React from 'react'
import {Header} from '../../components/header.jsx'
import {Hero} from '../../components/hero.jsx'
import {Nav} from "../../components/nav.jsx"

import "./home.css"
import "./home.responsive.css"


function Home() {
  return (

      <>
 
      <section className="page home">

            <div className="bd_wrapper"></div>
            <div className="front_wrapper">
       


              {/* Header */}
                <Header>  
                  
                    <nav className='h_nav flex justify-between items-center h-full'>

                      <ul className='h_part h_left flex justify-start items-center h_left w-1/2 h-full'>
                          <span className='logo_text '>GREENLINK</span>
                      </ul>
   

                      <ul  className='h_part h_right flex justify-end items-center h_left w-1/2 h-full'>

                          <Nav>     

                              <div className="links icon_frame ">
                                    <svg className="icons none"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
                              </div>           
                            
                              <div class="links_box flex flex-row items-end justify-starth-full w-full">

                                <a href="#" className='btnl links btn-u'>Home</a>
                                <a href="#" className='btnl links '>More</a>
                                <a href="#" className='btnl links '>Contact</a>  
                                <a href="#" className='btnl links btn-p'>Login</a>
                              
                              </div>
                             
                                          
                          </Nav>
                         
                      </ul>
                            
                    </nav>
                  
                </Header>


              {/* Hero */}
                <Hero> 

                    <div class="hero_box">

                        .hero_box

                    </div>
            
                          
                </Hero>


            
            </div>

      </section>

      </>

  )
}

export default Home