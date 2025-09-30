
import {Frown} from "react-feather"

export function Unauthorized() {
  return (
   <div className="h-[100%] w-full white absolute flex items-center justify-center"> 
      <ol className='flex justify-between items-center p-1'>
         <Frown size={28}></Frown>
         <p className='m-1'>  Unauthorized Accesss </p>
      </ol>
   </div>
  )
}

export function InputError(error){
   return (
      <div className='error-box text-[0.8rem] 
      flex justify-center items-center rounded-[10px] absolute right-[0px] top-[1%]
      pointer-events-none z-10'> 
            <p>{error}</p>
      </div>
   )
}



