
import { useState } from "react"
import { Logout } from "./logout"
import { LogoutModal } from "./logoutModal";

export function Sidebar({btn_div_a}) {
  const [isOpen,setModal] = useState(false);

  return (

    <>  
    <section className="container sidebar flex 
    flex-col col-start-1 col-end-1 row-start-1 row-end-5 ">
        <div className="logo_div flex h-[10%] w-[90%] text-center">
                                                                                                                                                                     LOGO
        </div>
        <div className="btn_div_a h-[90%] w-[90%] items-start ">
        {btn_div_a}
        {isOpen && <LogoutModal isOpen={isOpen} onClose={() => setModal(false)}/>}
        <Logout onOpen={() => setModal(true)}/>
        </div>
      
    
    </section>

    </>
  )
  
}