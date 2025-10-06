import React from 'react'


export function Wp_header({left,right}) {
  return (
    <div className='wp_header w-full h-full col-start-1 col-end-4 bg-[var(--pal2-whitea)]'>

        <ol className="wp_part left w-1/2 h-full flex items-center justify-start ">{left}</ol>
        <ol className="wp_part right w-1/2 h-full flex items-center justify-end">{right}</ol>
    
    </div>

  )
}
