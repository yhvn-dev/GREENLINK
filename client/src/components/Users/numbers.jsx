import React from 'react'

export function Numbers({bg_boxes,data_boxes}) {
  return (
    <>
    
    <div className='numbers grid grid-cols-[6fr_4fr] grid-rows-[1fr] h-[100%] w-[100%]
    row-start-2 row-end-2 col-start-2 col-end gap-[1rem] rounded-[10px] p-t'>{bg_boxes}</div>

    <div className='numbers grid grid-cols-[6fr_4fr] grid-rows-[1fr] h-[100%] w-[100%]
    row-start-2 row-end-2 col-start-2 col-end gap-[1rem] rounded-[10px] p-t bg-transparent'>{data_boxes}</div>

  </>
  )

  
}


