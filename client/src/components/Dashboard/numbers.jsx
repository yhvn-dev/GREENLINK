import React from 'react'
import { Droplets, Sun, Wind, Activity, AlertTriangle, TrendingUp, Clock, Leaf } from 'lucide-react';

export function Numbers({data_box}) {
  return (
    
    <section className="numbers flex flex-col 
    justify-start items-center p-t gap-[1rem] col-start-2 col-end-4  rounded-[10px]">
        <div className="flex flex-col items-start justify-start w-full h-[15%]">
            <p className='text-2xl font-semibold'>Quick Stats</p>
        </div>
        <div className="center w-full h-full gap-x-4">
          {data_box}
        </div>
      
    </section>

  )
}
