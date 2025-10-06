import React, { useEffect, useState } from 'react'
import Pfp from "../../assets/Images/Default Profile Picture 2.jpg"
import * as validate from "../../utils/userValidations"
import {X,Edit,Plus,Upload} from "react-feather"

export function Modal({isOpen,onClose,mode,handleSubmit,userData,backendError}) {    
      if(!isOpen) return null

      const [errors,setErrors] = useState({})
      const [username, setUsername] = useState("");
      const [fullname, setFullname] = useState("");
      const [email, setEmail] = useState("");
      const [phoneNumber, setPhoneNumber] = useState("");
      const [password,setPassword] = useState("");
      const [role, setRole] = useState("");
      const [status, setStatus] = useState("") ;
      const [profile_picture,setProfilePicture] = useState(null);
      const [preview,setPreview] = useState(null)

      useEffect(() => {
        if(userData){
          setUsername(userData.username)
          setFullname(userData.fullname)
          setEmail(userData.email)
          setPhoneNumber(userData.phone_number || "")
          setRole(userData.role)
          setStatus(userData?.status || "active")
          setPreview(userData.profile_picture || null)
          setProfilePicture(null)
        } 

      },[userData])

      const handleFileChanges = (e) => {
        const file = e.target.files[0];
        if(file){
          setProfilePicture(file); 
          setPreview(URL.createObjectURL(file)); 
        }
      }

        const onFormSubmit = async (e) =>{
        e.preventDefault()

        const formData = new FormData();
        // append the data on form data
        formData.append("username", username);
        formData.append("fullname", fullname);
        formData.append("email", email);
        formData.append("phone_number", phoneNumber);
        formData.append("role", role);
        formData.append("status", status);
                
          // Only include password if user typed one
        if (mode === "insert" || password.trim() !== "") {
            formData.append('password',password)  ;
        }
    
       // 4. Append profile picture if uploaded
        if (profile_picture) {
          formData.append("profile_picture", profile_picture); // real file
        }

        // 5. Validate before sending
        const payload = {username,fullname ,email,phone:phoneNumber,role,status};
        const { errors } = validate.validateUserEmptyFields(payload,password,mode);
        if (Object.keys(errors).length > 0) {
          setErrors(errors);
          return;
        }

        try{
          await handleSubmit(formData)
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

            <div className={`${mode === "delete" ? "w-[500px]" : "w-[700px]"} flex flex-col items-center justify-center 
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
                        className="btn-p-delete">Delete User
                      </button>
                    </div>
                </>
              ):(

                <>
                <div className='flex items-center enterjustify-center '>
                    <svg className="m-01 modal">{mode === "insert" ? <Plus  size={30}/> : <Edit size={30}/> }</svg>
                    <p className='text-[1.5rem] m-x'>{mode === "insert" ? "Add User" : "Update User"}</p>
                </div>
              
                <form onSubmit={onFormSubmit} className="userForm flex flex-col justify-center items-centers
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
                          className={`form-inp username`}
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

                      </ul>

                      {/* phone number */}
                      <ul className="input_box form_box relative">
                        <input 
                          type="text" 
                          placeholder='' 
                          name='phone_number'
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
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
                        
                        {errors.password && (
                            <p className="error-txt">{errors.password}</p>
                        )}

                      </ul>

                    </section>

                    <section className='form_part right w-1/2 flex flex-col items-center 
                    justify-evenly h-full'>

                      <ul className="input_box flex flex-col items-center justify-center 
                        h-[70%] w-[80%]">
                        <div className='img-holder cntr rounded-full bg-[var(--pal2-whiteb)]'>
                            <img src={preview || Pfp} className='border-[3px]  
                            border-[var(--pal2-whiteb)] rounded-full' alt={Pfp} width={120}/>
                        </div>
                            
                        <label className="custom-file m-t">
                          <input type="file" className="profile_picture" name="profile_picture"
                          onChange={handleFileChanges}
                          />
                          <span className="flex items-center justify-center"> 
                            <svg className="upload_icon"><Upload size={20}/></svg>
                            Upload Photo
                          </span>
                        </label>
                
                      </ul>
                  
                  
                      {/* Role & Status */}
                      <ul className="input_box w-full 
                      flex justify-evenly items-center m-y-2 h-1/2 ">
  
                        <select 
                          name="status" 
                          className="status rounded-[10px] p-h-0-6 nav-com w-full m-x-6" 
                          value={status} 
                          onChange={(e) => setStatus(e.target.value)}>
                          <option value="">Select Status</option>
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>          
                        </select>
                              
                        <select 
                          name="roles" 
                          className="roles rounded-[10px] p-h-0-6 nav-com  w-full m-x-6" 
                          value={role} 
                          onChange={(e) => setRole(e.target.value)}>
                          <option value="">Select Role</option>
                          <option value="owner">Owner</option>
                          <option value="admin">Admin</option>
                          <option value="viewer">Viewer</option>
                        </select>
                                            
                      </ul>

                        {/* FORM MSG BOX */}
                        <div className="flex items-center justify-around h-[2rem]  w-full">
                          {errors.status && !status && (
                            <p className='error-nav-txt'>{errors.status}</p>
                          )}
                          {errors.role && !role && (
                            <p className="error-nav-txt">{errors.role}</p>                             
                          )}       
                        </div>       
                      </section>

                  </div>
                      
                  {/* Button Div */}
                  <div className="btn_div flex items-center justify-center col-start-1 col-end-3">
                      <ul className="form_box">
                        <button 
                          type="submit"
                          className={`${mode === "update" ? "btn-p-update" : "btn-p"}`}>
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
      