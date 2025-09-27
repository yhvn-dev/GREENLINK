  import { useState,useEffect} from "react"
  import axios from "axios"
  import api from "../../utils/api"

  import {Modal} from "../Users/modal"

  export function UserTable() {
    const [allUsers,setAllUsers] = useState([])
    const [selectedUser,setSelectedUser] = useState(null)
    const [open,setOpen] = useState(false);
    const [mode,setMode] = useState("")
    
    // Fetch All User    

    const fetchAllUsers = async () => {
      try{

        const res = await api.get("/users")
        setAllUsers(res.data)
        console.log(res.data)

      }catch(err){
        console.error("Error Fetching Users",err)
      }
    }
    
     useEffect(() =>{
        fetchAllUsers()
     },[])



    const handleUpdate = async (data) =>{
      try{
        
        if(!selectedUser?.user_id){
          console.error("No user selected for update");
        }

        await api.put(`/users/${selectedUser.user_id}`,data)
       
        setAllUsers((prev) =>
          prev.map((u) =>
            u.user_id === selectedUser.user_id ? {...u, ...data} : u)
        )

        await fetchAllUsers()
        console.log("UPDATE:",selectedUser)
        setOpen(false)

      }catch(err){
        console.error("Error Updating Users",err)
      }
    }

    const handleDelete = async () => {
      try {
        console.log("Deleting user:", selectedUser); // Debug

        if (!selectedUser?.user_id) {
          console.error("No user selected for delete");
          return;
        }

        await api.delete(`/users/${selectedUser.user_id}`);

        console.log("User Deleted Successfully");

        setAllUsers((prev) =>
          prev.filter((u) => u.user_id !== selectedUser.user_id)
        );

        await fetchAllUsers()

        setOpen(false);
      } catch (err) {
        console.error(
          "Error Deleting Users:",
          err.response?.data || err.message
        );
      }
    };




    return (
      <>

      <table className="table table-fixed  max-w-[100%] w-[100%] h-full ">

        <tbody>
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
        </tbody>
      


        {/*    */}
        <tbody className="userTbody">
          {allUsers.map((u) => (   
              
          <tr className="u_tr" key={u.user_id}>
              <td className=""></td>
              <td className="u_td">{u.fullname}</td>
              <td className="u_td">{u.username}</td>
              <td className="u_td">{u.email}</td>
              <td className="u_td">{u.phone_number}</td>
              <td className="u_td">{u.role}</td>
              <td className="u_td"> 
                  <ol className="status_box flex items-center justify-start h-full w-full">
                      <div className={`w-[0.8rem] h-[0.8rem] rounded-full m-r ${u.status === "active" ? "bg-green-400" : "bg-[var(--acc-darkc)]" }`}></div>
                      {u.status}         
                  </ol>
              </td>
              <td className="flex items-center justify-around h-full w-full">
                  <button onClick={() => {setSelectedUser(u); setOpen(true); setMode("update")}}    
                  className="u_btn bg-[var(--white-blple--)]">Update</button>
                  <button onClick={() => {setSelectedUser(u); setOpen(true); setMode("delete") }}     
                  className="u_btn bg-[var(--color-danger-b)]">Delete</button>
              </td> 
          </tr>    

          ))}

        </tbody>

      </table>

      {open && <Modal 
      isOpen={open}
      onClose={() => setOpen(false)}
      mode={mode} 
      handleSubmit={mode === "update" ? handleUpdate : handleDelete}
      userData={selectedUser}
      />}

      </>
    )
  }