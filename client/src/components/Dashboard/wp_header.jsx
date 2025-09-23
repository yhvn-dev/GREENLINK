import React from 'react'


export function Wp_header({left,right}) {
  return (
    <div className='wp_header w-full  col-start-1 col-end-3'>

        <ol class="wp_part left w-1/2 h-full flex items-center justify-start">{left}</ol>
        <ol class="wp_part right w-1/2 h-full flex items-center justify-end">{right}</ol>
    
    </div>

  )
}
