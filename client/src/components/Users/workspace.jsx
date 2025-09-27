import { Wp_header } from "./wp_header"
import { UserTable } from "../../components/Users/userTable"
import "../../pages/Users/users.css"

export function Workspace({show}) {
  return (
        
    <div className="container workspace flex flex-col h-[100%] row-start-3 row-end-3
    col-start-2 col-end-2 overflow-y-auto">
        <Wp_header
            left={<>
                <span className='m-x'>Users</span>
            </>}
            right={<><p>Right</p></>}
        />
        <div className="table_holder flex flex-col items-center justify-start h-full w-full  overflow-y-auto shadow-[5px_5px_20px_1px_rgba(53,53,53,0.2)] rounded-[10px]">

            <UserTable show={show}/>
        
        </div>

    </div>

  )
}