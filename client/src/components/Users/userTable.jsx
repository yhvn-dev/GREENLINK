
  export function UserTable({users,setOpen, setMode, setSelectedUser}) {

    return (
      <>
      <table className="table table-fixed max-w-[100%] w-[100%] h-[100%] ">

        <tbody className="">
          <tr className="bg-transparent">
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
          {users.map((u) => (   
              
          <tr className="u_tr" key={u.user_id}>
              <td className=""></td>
              <td className="u_td">{u.fullname}</td>
              <td className="u_td">{u.username}</td>
              <td className="u_td">{u.email}</td>
              <td className="u_td">{u.phone_number}</td>
              <td className="u_td">{u.role}</td>
              <td className="u_td"> 
                  <ol className="status_box flex items-center justify-start h-full w-full">
                      <div className={`w-[0.7rem] h-[0.7rem] rounded-full m-r ${u.status === "active" ? "bg-green-400" : "bg-[var(--acc-darkc)]" }`}></div>
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

      </>

    )
  }