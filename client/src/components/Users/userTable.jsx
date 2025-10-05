
import Pfp from "../../assets/Images/Default Profile Picture 2.jpg"
  
  export function UserTable({users,setOpen, setMode, setSelectedUser}) {
    return (
      <>
      <table className="table table-fixed max-w-[100%] w-[100%] h-[100%] ">

        <tbody className="">
          <tr className="u_tr_head bg-transparent">
              <th className="u_th w-[5%] "><input type="checkbox"/></th>
              <th className="u_th w-[10%]">Username</th>
              <th className="u_th w-[20%]">Fullname</th>
              <th className="u_th">Email</th>
              <th className="u_th">Phone Number</th>
              <th className="u_th w-[10%]">Role</th>
              <th className="u_th w-[10%]">Status</th>
              <th className="u_th w-[15%]">Action</th>
          </tr>
        </tbody>
      
        {/*    */}
        <tbody className="userTbody">

          <>
          {users.map((u) => (        
          <tr className="u_tr" key={u.user_id}>
        
            <td className=""></td>
            <td className="u_td">{u.username}</td>
            <td className="u_td flex justify-start items-center">
               <img src={u.profile_picture ? u.profile_picture : Pfp} className="max-w-[25px] max-h-[25px] w-auto h-auto rounded-full object-cover border-gray-400 m-x"/>
                 <p>{u.fullname}</p>
              </td>
            <td className="u_td ">{u.email}</td>
            <td className="u_td">{u.phone_number}</td>
            <td  className="u_td flex justify-start items-start">
              <p
                className={`${
                  u.role === "owner"
                    ? "owner_color"
                    : u.role === "admin"
                    ? "admin_color"
                    : "viewer_color"
                }`}
              >
                {u.role}
              </p>
            </td>
              
            <td className="u_td"> 
                <ol className="status_box flex items-center justify-start h-full w-full">                    <div className={`w-[0.7rem] h-[0.7rem] rounded-full m-r-0-6 ${u.status === "active" ? "bg-[var(--ptl-greenb)]" : "bg-[var(--acc-darkc)]" }`}></div>
                    {u.status}         
                </ol>
            </td>
            <td className="flex items-center justify-around h-full w-full">
                <button onClick={() => {setSelectedUser(u); setOpen(true); setMode("update")}}    
                className="u_btn bg-[var(--white-blple--)] text-white">UPDATE</button>
                <button onClick={() => {setSelectedUser(u); setOpen(true); setMode("delete") }}     
                className="u_btn bg-[var(--color-danger-b)] text-white  ">DELETE</button>
            </td> 
        </tr>    
          ))}
        </>

        </tbody>


      </table>

      </>

    )
  }