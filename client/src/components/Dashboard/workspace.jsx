import { useState } from 'react'
import { Wp_header } from './wp_header'
import { Map } from "react-feather"
import * as Beds from "./beds"

export function Workspace({ bed }) {
    
  return (
    <section className='
      grid h-full col-start-2 col-end-4 row-start-3 row-end-3
      grid-rows-[1fr_9fr] grid-cols-[1fr] rounded-[10px] overflow-y-auto
      bg-white overflow-hidden'> 

      <Wp_header
        left={
            <>
            <h1
                className="text-2xl font-bold mb-2 text-[var(--sancga)">
                Greenhouse Monitoring System
            </h1>
            <p className="text-sm px-4">
                Real-time soil moisture and pH level monitoring
            </p>
            </>
        }
        right={
            <div className="">
            </div>
            }        
      />

      {/* content area */}
      <div className="content_box flex flex-col justify-start items-center w-full h-full
        row-start-2 col-span-1 overflow-y-auto shadow-[5px_5px_20px_1px_rgba(53,53,53,0.2)] 
        rounded-[10px]">

        <div className="w-full h-full">
            {bed === "bed_1" ? <Beds.Bed_1 bedNum={bed} /> :
            bed === "bed_2" ? <Beds.Bed_2 bedNum={bed} /> :
                                <Beds.Bed_3 bedNum={bed}/>}
        </div>

      </div>


    </section>
    
  )
}
