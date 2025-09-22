import React, { useState,useRef } from 'react'
import Bush1 from "../../assets/Images/Bushes 1.png"
import { User,Lock } from "react-feather";
import { colors } from "../../utils/colors"

import "../../pages/Login/login.css"

export function Form({handleSubmit,errorMsg,successMsg,loginInputRef,passwordRef}) {

  return (
    
    
        <form onSubmit={handleSubmit} className="forms card bg-[var(--pal2-whiteb)]">

        {/* left */}
        <ul className="form_part flex down left w-1/2 h-full relative">
    
            <img className="m-t bushes" src={Bush1}></img>
            
            <div className="m-[0.5rem] z-[2]">
            <span>LOGO</span>
            <span> GREENLINK</span>
            </div>

            <div class="text_box down items-center text-center">

            <span className="text descr font-semibold text-[1rem]">Control your garden anytime anywhere</span>
            <p className="text descrp">
                GREENLINK makes plant care effortless with smart, automated watering,
                Manage your garden through simple and reliable application.
            </p>


            </div>            
        
        </ul>



        <ul className="form_part down right  w-1/2 h-full bg-white rounded-[10px] ">
            {/* right */}
                                                    
            <div class="form_box title_box h-[20%] w-full">

            <span className="title form_title" >LOGIN</span>
            <p className="descrp">Water Your Plants Login Here</p>
            </div>



            <ul class="input_box_frame down justify-center w-full h-[80%] w-full">

            {/* username */}
                <div className="form_box input_box">

                <input ref={loginInputRef} className="form-inp" name="username-email-inp" placeholder=""/>
                <label>Username or Email</label>
                <svg className="form-svg"><User size={16} color={colors.accDarkc}/></svg>                           
                </div>
                <ol className="formMsg_box flex">
                    {errorMsg.loginInput && <p className="formMsg errMsg justify-start">{errorMsg.loginInput}</p>}
                </ol>
                

                {/* password */}
                <div className="form_box input_box">
                <input ref={passwordRef} className="form-inp" type="text" name="password-inp" placeholder=""/>
                <label>Password</label>
                <svg className="form-svg"><Lock size={16} color={colors.accDarkc}/></svg>
                </div>
                <ol className="formMsg_box flex">
                    {errorMsg.password && <p className="formMsg errMsg justify-start">{errorMsg.password}</p>} 
                </ol>
            
                
                <div className="form_box btn_box">
                <button  className="btn-p-full" type="submit">Login</button>
                </div>
                <ol className="formMsg_box successMsgBox">
                    {errorMsg.server && <p className="formMsg errMsg justify-start">{errorMsg.server}</p>}
                    {successMsg && <p className="formMsg succMsg">{successMsg}</p>}
                </ol>

                <div className="form_box social_login_box"></div>
                
            </ul>
            
        
        </ul>

    </form>
  )


}

