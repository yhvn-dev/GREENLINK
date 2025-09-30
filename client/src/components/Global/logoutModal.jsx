import { useNavigate } from "react-router-dom"
import axios from "axios"

import {X} from 'react-feather';

export function LogoutModal({isOpen,onClose}) {
  const navigate = useNavigate()
  if(!isOpen) return null;

  const handleAllLogout = async (e) =>{
      e.preventDefault();
  
       try {
        await axios.delete("http://localhost:5000/users/logout-all",{ withCredentials: true });
     
        localStorage.removeItem("accessToken")
        navigate("/login");
  
      } catch (err) {
        console.error("Logout error:", err.response?.data?.message || err.message);
      }
    };

    const handleDeviceLogout = async (e) =>{
      e.preventDefault()
      try{
        await axios.delete("http://localhost:5000/users/logout",{withCredentials:true})

        localStorage.removeItem("accessToken")
        navigate("/login");

      }catch(err){
        console.error("Logout error:",err.response?.data?.message || err.message)
      }
    }

  return (


    <section className="modal_bg flex items-center justify-center h-full w-full absolute
    top-0 left-0 bg-transparent-[20%]  backdrop-blur-[10px] ">

        <div className="modals logout_modal 
         w-[450px] h-[250px] relative">
          
          <button className='logout-btn cancel-btn absolute top-[20px] right-[20px]' onClick={onClose}>
            <div className="close_icons"><X/></div>
          </button>
          
          <ul className='flex justify-start items-center'> 
          
            <p className="text-[1.5rem]">  Logout Your Account?</p>
            </ul>
 
          <ul className="btn_box w-full flex items-center justify-between p-t">
            <button className='logout-choices logout-all bg-[var(--color-danger-b)] rounded-[10px]'
            onClick={handleAllLogout}>To all devices</button>
            <button className='logout-choices logout-device btn-a rounded-[10px]
            'onClick={handleDeviceLogout}>This devices only</button>
          </ul>
      </div>

    </section>
  

  )
}

