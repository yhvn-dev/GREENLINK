


import React from 'react'
import Bush from "../../assets/Images/Bush 1.png"

export function Header({left,user}) {
  return (

    <section className="container header flex items-center justify-center">

        <div className="left_header half">{left}</div>
        <div className="right_header half flex-row-reverse">

            <img src={user?.profile_image || Bush} className='profile-img'></img>
            <ul class="col_text ">
              <p className='name-txt'>{user?.username || "Guest"}</p>
              <p className='role-txt text-[0.8rem] text-[var(--acc-darkc)]'>{user?.role || "Viewer"}</p>
            </ul>

        </div>
      
    </section>

  )
}

