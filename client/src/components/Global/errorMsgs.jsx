
import React from 'react'
import {Frown} from "react-feather"

export function Unauthorized() {
  return (
   <div className="h-[100%] w-full white absolute flex items-center justify-center"> 
      <ol className='flex justify-between items-center p-1'>
         <Frown size={28}></Frown>
          <p className='m-1'>  Unauthorized Accesss  </p>
      </ol>
   </div>
  )
}





