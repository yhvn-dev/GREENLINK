import React from 'react'
import { Wp_header } from './wp_header'
import {Map} from "react-feather"

export function Workspace() {
  return (

        <section className='workspace grid h-full 
        grid-rows-[1fr_9fr] grid-cols-[0.8fr_9.2fr] rounded-[10px]  overflow-y-auto ' > 

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

                <nav className="bg-[var(--ptl-greenc)] down rounded-tl-[10px]  rounded-bl-[10px]">  
                    
                </nav>

            
                <div class="content_box flex flex-col justify-start items-center w-full h-full
                    row-start-2 col-start-2 col-end-3
                    overflow-y-auto ">
                
                    <table className="table table-fixed  max-w-[100%] w-[100%] h-full">

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
                                <div className="text-sm opacity-50">United States</div>
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

            

        </section>

  )
}

