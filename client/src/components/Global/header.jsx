import * as Logos from "./logo"
import { Nav } from "./nav"

export function Header({navChildren}) {
  return (
    <div className="header col-start-1 col-end-1 row-start-1 row-end-1 ">

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