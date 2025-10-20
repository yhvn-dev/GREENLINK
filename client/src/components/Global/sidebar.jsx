import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Logout } from "./logout";
import { LogoutModal } from "./logoutModal";
import { Beer } from "lucide-react";

export function Sidebar() {
  const [isOpen, setModal] = useState(false);
 
  return (
    <section className="sidebar container flex flex-col col-start-1 col-end-2 row-start-1 row-end-4 p-4">
      
      <div className="logo_div flex items-center justify-center h-[10%] w-[95%] mb-6 text-xl font-bold text-green-600">
        LOGO
      </div>

      {/* Nav Buttons */}
      <div className="flex flex-col items-center justify-start gap-2 flex-grow h-full w-full">
        {/* Dashboard */}
        <NavLink
          to="/Dashboard"
          end
          className={({ isActive }) =>
            `flex items-center gap-2 py-1 transition-colors duration-300 rounded-[10px] my-2 w-full
              ${
                isActive
                  ? "border-l-4 border-green-400 bg-[var(--pal2-whiteb)] text-green-500"
                  : "text-gray-300 hover:bg-[var(--pal2-whiteb)] hover:text-white"
              }`
          }>
       
          <p className="text-sm">Dashboard</p>
        </NavLink>



        {/* Users */}
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `flex items-center gap-2 py-1 transition-colors duration-300 rounded-[10px] my-2 w-full
              ${
                isActive
                  ? "border-l-4 border-green-400 bg-[var(--pal2-whiteb)] text-green-500"
                  : "text-gray-300 hover:bg-[var(--pal2-whiteb)] hover:text-white"
              }`
          }>
          <p className="text-sm">Users</p>
        </NavLink>


        {/* Analytics */}
        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex items-center gap-2 py-1 transition-colors duration-300 rounded-[10px] my-2 w-full
              ${
                isActive
                  ? "border-l-4 border-green-400 bg-[var(--pal2-whiteb)] text-green-500"
                  : "text-gray-300 hover:bg-[var(--pal2-whiteb)] hover:text-white"
              }`
          }
        >
      
          <p className="text-sm">Analytics</p>
        </NavLink>


      
      </div>


      {/* Logout Section */}
      <div className="flex items-center justify-center w-full">
        {isOpen && <LogoutModal isOpen={isOpen} onClose={() => setModal(false)} />}
        <Logout onOpen={() => setModal(true)} />
      </div>
    </section>
  );



}
