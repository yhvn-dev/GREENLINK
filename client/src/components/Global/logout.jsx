 
import { LogOut } from 'react-feather'

export function Logout({onOpen}) {

return (
  <>
      <button className="sb-btn logout-btn" onClick={onOpen}>
          <svg className="svg-icons"><LogOut size={16}/></svg> Logout
      </button>

     </>
)

}
