    import React, { useEffect, useState } from 'react'
    import * as errorMsg from "../Global/errorMsgs"
    import * as validate from "../../utils/userValidations"
    import {X} from "react-feather"

    export function Modal({isOpen,onClose,mode,handleSubmit,userData}) { 
    if(!isOpen) return null

      const [errors,setErrors] = useState("")
      const [username, setUsername] = useState("");
      const [fullname, setFullname] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
      const [password,setPassword] = useState("");
      const [role, setRole] = useState("");
      const [status, setStatus] = useState("");

      useEffect(() => {
        if(userData){
          setUsername(userData.username)
          setFullname(userData.fullname)
          setEmail(userData.email)
          setPhone(userData.phone_number || "")
          setRole(userData.role)
          setStatus(userData.status)
        } 
        
      },[userData])

        const onFormSubmit = async (e) =>{
          e.preventDefault()

          const payload ={
            username,
            fullname,
            email,
            phone_number:phone,
            password,
            role,
            status
        }

        const { payload:validatedPayload, errors } = validate.validateUserEmptyFields(payload, password);

        // front end error
        if (Object.keys(errors).length > 0) {
          setErrors(errors)
          return;
        }
        
        try{
          await handleSubmit(validatedPayload)
          setErrors({});
          onClose()

        }catch(err){
          console.error("User Error",err)
        }


      }

  

      
      const handleClose = (e) =>{
        e.preventDefault()
        setErrors({});
        onClose()
      }

 

      return (
        <>
        <div className="modal_backdrop flex items-center justify-center h-full w-full g-transparent-[20%] backdrop-blur-[10px]  top-0 left-0 absolute">
            <div className={`  ${mode === "delete" ? "h-auto" : "h-auto"} flex flex-col items-center justify-center  w-[450px]
            rounded-[10px] border-[var(-acc-darkc)] relative bg-white modals `}>
            
              <button className='cancel-btn absolute top-[20px] right-[20px] ' onClick={handleClose}>
                <svg><X/></svg>
              </button>
              
              {mode === "delete" ? (
                <>
                    <p className="text-[1.5rem] mb-4">Delete User</p>
                    <p>Are you sure you want to delete user "{fullname}" ?</p>
                    <div className="flex down w-[100%]">
                    
                      <button onClick={() => handleSubmit(userData)}
                        className="w-full h-[100%] btn-p-full-s bg-[var(--color-danger-b)]">
                        Delete
                      </button>
              
                    </div>
                </>

            ) : (
              <>
              
    
                  <p className="flex items-center justify-start text-[1.5rem] mb-4 w-[80%]">
                  {mode === "insert" ? "Add User" : "Update User"}
                  </p>       

                <form onSubmit={onFormSubmit} className="flex flex-col justify-evenly items-center  w-[100%]"> 

                  {/* username */}
                  <ul className="input_box form_box">
                    <input type="text" placeholder='' 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-inp"/>
                    <label >Username</label>
                  </ul>
                  {errors && errorMsg.InputError(errors.username) }

                  {/* fullname */}
                  <ul className="input_box form_box ">
                    <input type="text" placeholder=''
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)} 
                    className="form-inp"/>
                    <label >Fullname</label>
                  </ul>
                  {errors && errorMsg.InputError(errors.fullname) }

                  {/* email */}
                  <ul className="input_box form_box">
                    <input type="text" placeholder=''
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-inp"/>
                    <label >Email</label>
                  </ul>
                  {errors.email && errorMsg.InputError(errors.email)}
                
                  <ul className="input_box form_box">
                    <input type="text" placeholder='' 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-inp"
                    />
                    <label >Phone Number</label>
                  </ul>
            
                  <ul className="input_box form_box">
                    <input type="text" placeholder='' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-inp"                
                    />
                    <label >Password</label>
                  </ul>
                  {errors && errorMsg.InputError(errors.password)}
                
               
                  {/* Role */}
                  <ul className="input_box w-[85%] flex justify-between items-center m-t">

                      <select name="roles" value={role} onChange={(e) => setRole(e.target.value)} >
                        <option value="">Select Role</option>
                        <option value="owner">Owner</option>
                        <option value="admin">Admin</option>
                        <option value="viewer">Viewer</option>
                      </select>

                      <select name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="">Select Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>          
                      </select>
                  </ul>
  
                   {errors && errorMsg.InputError(errors.statRole )}
        
                <ul className="form_box">
                  <button 
                    type="submit"
                    className={`btn-p-full-s ${mode === "update" ? "bg-[var(--white-blple--)]" : "bg-[var(--ptl-greenb)]"}`}
                  >
                    {mode === "update" ? "Save Changes" : "Insert User"}
                  </button>
                </ul>

                </form>
              
              </>
          
            )}          
          </div>
        </div>
        </>
      ) 
    }
      