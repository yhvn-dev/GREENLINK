
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
      <div className='border-b border-[var(--color-danger-c)] text-[0.8rem] flex justify-center items-center w-[85%] rounded-[10px]'>
            <p className=''>{error}</p>
      </div>
   )
}



