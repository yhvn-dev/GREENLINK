
import { useState } from "react"
import { Logout } from "../../components/Global/logout"
import { LogoutModal } from "../Global/logoutModal";

export function Sidebar({btn_div_a}) {
  const [isOpen,setModal] = useState(false);

  return (

    <>  
    <section className="container sidebar flex flex-col col-start-1 col-end-1 row-start-1 row-end-5">

          <div className="logo_div flex h-[10%] text-center">
            
          </div>
          <div className="btn_div_a h-[60%] w-[90%] items-start ">
              {btn_div_a}
          </div>
        
          <div className="btn_div_b h-[30$] w-[90%] ">
              {isOpen && <LogoutModal isOpen={isOpen} onClose={() => setModal(false)}/>}
              <Logout onOpen={() => setModal(true)}/>
          </div>

  
    </section>

       </>
  )


}