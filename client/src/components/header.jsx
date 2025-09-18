import * as Logos from "../components/logo"
import { Nav } from "../components/nav"

export function Header({navChildren}) {
  return (
    <div className="header ">

      <nav className="flex justify-between items-center h-full">
  
          <ul className="header_part left flex justify-start items-center h-full w-1/2">
            <Logos.Text_Logo/>
          </ul>

  
          <ul className="h_part h_right flex justify-end items-center w-1/2 h-full" >
          
            <Nav>
                {navChildren} 
            </Nav>     
              
          </ul>

        </nav>


  </div>
  )
}