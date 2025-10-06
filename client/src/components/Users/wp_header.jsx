import React from 'react'

export function Wp_header({left,right}) {
  return (
    <div className="wp_header flex w-full h-[15%] ">
        <ol className='h_part left flex items-center justify-start w-1/2 '>{left}</ol>
        <ol className='h_part right flex flex-row-reverse items-center w-1/2'>{right}</ol>
    </div>
  )
}
