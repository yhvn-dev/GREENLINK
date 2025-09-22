

import React from 'react'
import {Img_Logo,Text_Logo } from '../logo'


export function Sidebar({children}) {
  return (


   <section className="container sidebar flex flex-col col-start-1 col-end-1 row-start-1 row-end-5">

        <div class="logo_div flex h-[10%] bg-amber-300">
            <Img_Logo/> <Text_Logo/>
        </div>
        <div class="btn_div h-[90%]">

            {children}

        </div>

   </section>
  )


}