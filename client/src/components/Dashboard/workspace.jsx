import React from 'react'
import { Wp_header } from './wp_header'
import {Map} from "react-feather"


export function Workspace() {
  return (

        <section className='db workspace grid h-full col-start-2 col-end-2 row-start-3 row-end-3
                grid-rows-[1fr_9fr] grid-cols-[0.8fr_8.6fr_0.8fr] rounded-[10px] overflow-y-auto ' > 

                <Wp_header
                    left={<>
                        <span className='title_text flex items-center justify-start '>
                             <svg className="svg-icons"><Map size={16} /></svg>  
                             <p className='table_title'>Greenhouse Map</p>
                        </span>
                    </>}

                    right={<>
                
                    </>}
                />

                <nav className="beds_nav down rounded-tl-[10px]
                     rounded-bl-[10px]  bg-[var(--pal2-whiteb)]
                     shadow-[0px_0px_10px_1px_rgba(53,53,53,0.1)] 
                     col-start-1 col-end-2 row-start-2 row-end-2">  
                    
                </nav>

            
                <div className="content_box flex flex-col justify-start items-center w-full h-full
                    row-start-2 col-start-2 col-end-3 
                    overflow-y-auto shadow-[5px_5px_20px_1px_rgba(53,53,53,0.2)] rounded-[10px]">
                
                    <table className="table table-fixed  max-w-[100%] w-[100%] h-full ">

                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>


                        {/* row 1 */}
                        <tr>
                            <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                            </th>
                            <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                    alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">Hart Hagerty</div>
                                <div className="text-sm ">United States</div>
                                </div>
                            </div>
                            </td>
                            <td>
                            Zemlak, Daniel and Leannon
                            <br />
                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>


                        </tbody>
                
                
                    </table>
                
                </div>      

                {/* water level div */}
                <div className="water_level_div  rounded-tl-[10px]
                rounded-bl-[10px]  bg-[var(--pal2-whiteb)]
                shadow-[0px_0px_10px_1px_rgba(53,53,53,0.1)] 
                col-start-33 col-end-3 row-start-2 row-end-2">
                    

                </div>

                           
            </section>

  )
}

