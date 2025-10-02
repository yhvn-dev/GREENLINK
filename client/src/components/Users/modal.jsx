    import React, { useEffect, useState } from 'react'
    import * as errorMsg from "../Global/errorMsgs"
    import * as validate from "../../utils/userValidations"
    import {X,Edit,Plus} from "react-feather"

    export function Modal({isOpen,onClose,mode,handleSubmit,userData}) { 
    if(!isOpen) return null

      const [errors,setErrors] = useState({})
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

        <div className="modal_backdrop flex items-center justify-center h-full w-full 
        g-transparent-[20%] backdrop-blur-[10px] top-0 left-0 absolute">

            <div className={`${mode === "delete" ? "h-auto" : "h-[500px]"} flex flex-col items-center justify-center  w-[800px]
            rounded-[10px] border-[var(-acc-darkc)] relative bg-white modals z-2`}>
            
              <button className='cancel-btn absolute top-[20px] right-[20px]' onClick={handleClose}>
                <div className='close_icons'><X/></div>
              </button>
              
              {mode === "delete" ? (
                <>
                    <p className="text-[1.5rem] mb-4">Delete User</p>
                    <p>Are you sure you want to delete user "{fullname}" ?</p>
                    <div className="flex down w-[100%]">                  
                      <button onClick={() => handleSubmit(userData)} type="button"
                        className="w-full h-[100%] btn-p-full-s bg-[var(--color-danger-b)]">Delete
                      </button>
                    </div>
                </>

            ) : (
              <>

                <div className='flex items-c enterjustify-center '>
                    <svg className="m-01 modal">{mode === "insert" ? <Plus  size={30}/> : <Edit size={30}/> }</svg>
                    <p className='text-[1.5rem] m-x'>{mode === "insert" ? "Add User" : "Update User"}</p>
                </div>
              
                <form onSubmit={onFormSubmit} className="flex flex-col justify-center items-centers
                w-[100%]"> 

                  <div className="input_part_div left flex justify-center items-center">

                      <section className='form_part left w-1/2  flex flex-col items-center 
                      justify-evenly'>

                      {/* username */}
                      <ul className="input_box form_box relative">
                        <input 
                          type="text" 
                          placeholder="" 
                          name='username'
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className={`form-inp username ${errors.username ? "input-error" : "input-normal"}`}
                        />
                        <label>Username</label>

                        {errors.username && !username && (                     
                          <p className='error-txt'>{errors.username}</p>
                        )}
                      </ul>

                      {/* fullname */}
                      <ul className="input_box form_box relative">
                        <input 
                          type="text" 
                          placeholder='' 
                          name='fullname'
                          value={fullname}
                          onChange={(e) => setFullname(e.target.value)} 
                          className="form-inp fullname"/>
                        <label>Fullname</label>       

                        {errors.fullname && !fullname && (
                          <p className='error-txt'>{errors.fullname}</p>
                        )}
                      </ul>

                      {/* email */}
                      <ul className="input_box form_box relative">
                        <input 
                          type="text" 
                          placeholder='' 
                          name='email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-inp email"
                        />
                        <label>Email</label> 

                        {errors.email && !email && (
                            <p className="error-txt">{errors.email}</p>                           
                          )}   

                        {errors.email && email && (                            
                            <p className="error-txt">{errors.email}</p>         
                          )}   
                      </ul>

                      {/* phone number */}
                      <ul className="input_box form_box relative">
                        <input 
                          type="text" 
                          placeholder='' 
                          name='phone_number'
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="form-inp phone_number"
                        />
                        <label>Phone Number</label>
                      </ul>

                      {/* password */}
                      <ul className="input_box form_box relative">
                        <input 
                          type="text" 
                          placeholder='' 
                          name='password'
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-inp password"
                        />
                        <label>Password</label>

                        {errors.password && !password && (
                          <p className="error-txt">{errors.password}</p>                             
                        )}        
                      </ul>

                    </section>

                    <section className='form_part right w-1/2 flex flex-col items-center 
                    justify-evenly h-full'>

      
                        <ul className="input_box flex flex-col items-center justify-center 
                          h-[70%] w-[80%]">
                          <div className='img-holder cntr h-[80%] w-[80%] rounded-[25px] bg-[var(--pal2-whiteb)]'>
                            img holder  
                          </div>
                              
                          <input type="file" className='cntr p-5 w-fit m-t'></input>  
                  
                        </ul>
                    
                          {/* Role & Status */}
                          <ul className="input_box w-[85%] flex justify-between items-center 
                          m-t p-1 relative">

                            

                            <select 
                              name="roles" 
                              className="roles rounded-[10px] p-h-0-6 nav-com" 
                              value={role} 
                              onChange={(e) => setRole(e.target.value)}>
                              <option value="">Select Role</option>
                              <option value="owner">Owner</option>
                              <option value="admin">Admin</option>
                              <option value="viewer">Viewer</option>
                            </select>

                            <select 
                              name="status" 
                              className="status rounded-[10px] p-h-0-6 nav-com" 
                              value={status} 
                              onChange={(e) => setStatus(e.target.value)}>
                              <option value="">Select Status</option>
                              <option value="active">Active</option>
                              <option value="inactive">Inactive</option>          
                            </select>
                          </ul>

                          {errors.role && !role && (   
                            <p className='right error-txt'>{errors.role}</p>
                          )}                              
                          {errors.status && !status && (
                            <p className='right error-txt'>{errors.status}</p>
                          )}         

                        </section>

                  </div>

                  <div className="btn_div flex items-center justify-center col-start-1 col-end-3">

                      <ul className="form_box">
                        <button 
                          type="submit"
                          className={`btn-p ${mode === "update" ? "bg-[var(--white-blple--)]" : "bg-[var(--ptl-greenb)]"}`}
                        >
                          {mode === "update" ? "Save Changes" : "Insert User"}
                        </button>
                      </ul>
                  </div>

                </form>    
              </>  
            )}          
          </div>

        </div>

        </>
      ) 
    }
      