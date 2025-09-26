import { useState,useEffect} from "react"
import axios from "axios"


export function UserTable() {
  const [allUsers,setAllUsers] = useState([])
  const token = localStorage.getItem("accessToken");

   // Fetch All User    
  useEffect(() =>{

    const fetchAllUsers = async () => {
      try{
        const res = await axios.get("http://localhost:5000/users",{headers:{Authorization:`Bearer ${token}`}})
        setAllUsers(res.data)
        console.log(res.data)

      }catch(err){
        console.err("Error Fetching Users")
      }
    }
    fetchAllUsers()

  },[token])

  return (

    <table className="table table-fixed  max-w-[100%] w-[100%] h-full ">

        {/* head */}
        <tr className="h-[10%]">
            <th className="u_th w-[5%] "><input type="checkbox"/></th>
            <th className="u_th w-[20%]">Fullname</th>
            <th className="u_th w-[15%]">Username</th>
            <th className="u_th">Email</th>
            <th className="u_th">Phone Number</th>
            <th className="u_th w-[10%]">Role</th>
            <th className="u_th w-[10%]">Status</th>
            <th className="u_th w-[15%]">Action</th>
        </tr>

        <tbody className="userTbody">
          {allUsers.map((u) => (   
              
          <tr className="u_tr">
              <td className=""></td>
              <td className="u_td">{u.fullname}</td>
              <td className="u_td">{u.username}</td>
              <td className="u_td">{u.email}</td>
              <td className="u_td">{u.phone_number}</td>
              <td className="u_td">{u.role}</td>
              <td className="u_td"> 
                  <ol class="status_box flex items-center justify-start h-full w-full">
                     <div className={`w-[0.8rem] h-[0.8rem] rounded-full m-r ${u.status === "active" ? "bg-green-400" : "bg-[var(--acc-darkc)]" }`}></div>
                     {u.status}         
                  </ol>
              </td>
              <td className="flex items-center justify-around h-full w-full">
                  <button className="u_btn bg-[var(--white-blple--)]">Update</button>
                  <button className="u_btn bg-[var(--color-danger-b)]">Delete</button>
              </td> 
          </tr>    
                
          ))}

         </tbody>

        
    </table>
  )
}