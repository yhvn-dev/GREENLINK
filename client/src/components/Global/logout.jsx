import React from 'react'
import { useNavigate } from "react-router-dom" 
import { LogOut } from 'react-feather'
import { useState } from 'react'
import { LogoutModal } from "./logoutModal"

import axios from 'axios'

export function Logout({onOpen}) {
const navigate = useNavigate();


return (
  <>
      <button className="sb-btn logout-btn" onClick={onOpen}>
          <svg className="svg-icons"><LogOut size={16}/></svg> Logout
      </button>

     </>
)

}
