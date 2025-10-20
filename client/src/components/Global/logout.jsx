 
import { LogOut } from 'react-feather'

export function Logout({onOpen}) {

return (
  <>
      <button className="flex items-center gap-2 py-1  transition-colors duration-300 rounded-[10px] my-2 w-full
    hover:bg-[var(--pal2-whiteb)] hover:text-white" onClick={onOpen}>
          <i className="ri-logout-circle-line text-[16px] mx-1"></i>
          <p className='link-text text-sm'>Logout</p>
      </button>

     </>
)

}
