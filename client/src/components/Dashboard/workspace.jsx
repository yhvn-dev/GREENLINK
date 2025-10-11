import { useState } from 'react'
import { Wp_header } from './wp_header'
import {Map} from "react-feather"
import * as Beds from "./beds"


export function Workspace() {
  const [bed,setBed]  = useState("bed_1")


  return (

        <section className='db workspace 
        grid h-full col-start-2 col-end-2 row-start-3 row-end-3
        grid-rows-[1fr_9fr] grid-cols-[1fr_7.5fr_1.5fr] rounded-[10px] overflow-y-auto
        bg-white overflow-hidden ' > 

                <Wp_header
                    left={<>
                        <span className='title_text flex items-center justify-start '>
                             <svg className="svg-icons"><Map size={18} /></svg>  
                             <p className='text-[1.3rem]'>Greenhouse Map</p>
                        </span>
                    </>}

                    right={<>
                
                    </>}
                />


                {/* water level div */}
                <div className="water_level_div  rounded-[10px]
                rounded-bl-[10px]  bg-[var(--pal2-whitea)]
                shadow-[0px_0px_10px_1px_rgba(53,53,53,0.1)] 
                col-start-1 col-end-1 row-start-2 row-end-2">
                </div>

                
                <div className="content_box flex flex-col justify-start items-center w-full h-full
                    row-start-2 col-start-2 col-end-3 
                    overflow-y-auto shadow-[5px_5px_20px_1px_rgba(53,53,53,0.2)] 
                    rounded-[10px]">
                
                    <table className="table table-fixed  max-w-[100%] w-[100%] h-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>   
                            <tr>
                             {bed === "bed_1" ? <Beds.Bed_1/> :
                             bed === "bed_2" ?  <Beds.Bed_2/> :
                                               <Beds.Bed_3/>
                             }
                            </tr> 
                       
                        </tbody>      
                    </table>
                
                </div>      

        
                
                {/* NAVIGATION */}
                <nav className="beds_nav down rounded-tl-[10px]
                     rounded-bl-[10px]  bg-[var(--pal2-whitea)]
                     shadow-[0px_0px_10px_1px_rgba(53,53,53,0.1)] 
                     col-start-3 col-end-3 row-start-2 row-end-2">

                    <button onClick={() => setBed("bed_1")}
                    className='m-t p-1 bg-[var(--pal2-whiteb)] w-full rounded-[8px] shadow-lg'>Bed 1</button>  
                    <button  onClick={() => setBed("bed_2")}
                    className='m-t p-1 bg-[var(--pal2-whiteb)] w-full rounded-[8px] shadow-lg'>Bed 2</button>  
                    <button onClick={() => setBed("bed_3")}
                     className='m-t p-1 bg-[var(--pal2-whiteb)] w-full rounded-[8px] shadow-lg'>Bed 3</button>           
                </nav>


                           
            </section>

  )
}

