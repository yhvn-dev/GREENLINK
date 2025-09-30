import React from 'react'

export function Numbers({data_boxes}) {
  return (
    <div className='numbers grid grid-cols-[2fr_5fr_3fr] grid-rows-[1fr] h-[100%] w-[100%]
    row-start-2 row-end-2 col-start-2 col-end gap-[1rem] rounded-[10px] p-t'>{data_boxes}</div>
  )
}


